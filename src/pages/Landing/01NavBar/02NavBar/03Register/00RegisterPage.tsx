/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../redux/store';
import { clearUserErrors } from '../../../../../redux/Landing/userSlice/userSlice';
import { postRegisterClient } from '../../../../../redux/Landing/userSlice/actions';
//ELEMENTOS DE COMPONENTE
import { IClient } from "../../../../../types/client.types";
import Loading from '../../../../../components/GeneralComponents/ComponentLoading/Loading';
import UserInformation from './01UserInformation';
import UserCredentials from './02UserCredentials';
import LogoTopDriveGroup from '../../../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { PiWarningCircle } from 'react-icons/pi';
import styles from './styles.module.css';

enum RegistrationStep {
    UserInformation,
    UserCredentials,
}

function RegisterPage() {
    const { t } = useTranslation('register');
    const navigate = useNavigate();

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userErrors = useSelector((state: RootState) => state.user.userErrors);
    const loading = useSelector((state: RootState) => state.user.loading);

    const [currentStep, setCurrentStep] = useState(RegistrationStep.UserInformation);
    const {register, formState: { errors }, handleSubmit} = useForm<IClient>();

    // LIMPIA ERRORES CUENDO EL COMPONENTE SE MONTA, ESTO DADO QUE LA NAVBAR HACE UN "getProfileUser" PARA MOSTRAR OCIONES DE NAVEGACION DIFERENTES DE ACUERDO A SI ESTA O NO LOGUEADO EL CLIENTE
    useEffect(() => {
        dispatch(clearUserErrors());
    }, [dispatch]);

    useEffect(() => {
        if (isAuthenticated) navigate("/panel-user/profile");
    }, [ isAuthenticated ]);

    const onSubmit: SubmitHandler<IClient> = async (values) => {
        const registerData = {
            ...values,
            typeRole: "Superadmin",
        } as IClient;
        switch (currentStep) {
            case RegistrationStep.UserInformation:
                break;
            case RegistrationStep.UserCredentials:
                dispatch(postRegisterClient(registerData));
                break;
            default:
                break;
        }
        if (currentStep !== RegistrationStep.UserCredentials) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep !== RegistrationStep.UserInformation) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={`${styles.container} d-flex align-items-center justify-content-center vh-100`}>
                <div className={`${styles.container__Register_Page} d-flex flex-column align-items-center justify-content-center`}>
                    <Link to="/">
                        <img src={LogoTopDriveGroup} alt="Top Drive Group" className={`${styles.logo} mb-4`} loading="lazy" />
                    </Link>

                    <div className='position-relative'>
                        {userErrors && (
                            <div className={`${styles.errors__Register} p-2 text-center position-absolute w-100`}>
                                <p className='m-0'><PiWarningCircle /> {userErrors}</p>
                            </div>
                        )}
                        <form onSubmit={handleSubmit(onSubmit)} >
                            {currentStep === RegistrationStep.UserInformation && (
                                <UserInformation
                                    register={register}
                                    errors={errors}
                                />
                            )}
                            {currentStep === RegistrationStep.UserCredentials && (
                                <UserCredentials
                                    register={register}
                                    errors={errors}
                                />
                            )}

                            <div className="d-flex align-items-center justify-content-center gap-4">
                                {currentStep !== RegistrationStep.UserInformation && (
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className={`${styles.button__Back} mb-2 border-0 rounded text-decoration-none`}
                                    >
                                        {t('register.button__Back')}
                                    </button>
                                )}
                                <div className="d-flex mb-2">
                                    <button
                                        type='submit'
                                        className={`${styles.button__Submit} border-0 rounded text-decoration-none`}
                                    >
                                        {currentStep === RegistrationStep.UserCredentials ? `${t('register.button__Send')}` : `${t('register.button__Next')}`}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className='m-0 text-center'>
                            {t('register.have__Account')} <Link to="/login" className={`${styles.link} text-decoration-none text-sky-500`}>Sign In</Link>
                        </p>

                        <div className={`${styles.container__Loading} d-flex align-items-center justify-content-center position-absolute`}>
                            {loading && (
                                <Loading />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;