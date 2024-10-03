/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../../redux/store';
import { passwordChangeClient } from '../../../../../../redux/Landing/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IResetPassword } from '../../../../../../types/resetPassword.types';
import LogoTopDriveGroup from '../../../../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import styles from './styles.module.css';

function ResetPasswordPage() {
    const { t } = useTranslation('resetPassword');

    const { idUser, passwordResetCode } = useParams();
    const navigate = useNavigate();
    
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const userErrors = useSelector((state: RootState) => state.user.userErrors);

    const { register, formState: { errors }, handleSubmit } = useForm<IResetPassword>();

    const [idUserParams, setIdUserParams] = useState('');
    const [idPasswordResetCodeParams, setIdPasswordResetCodeParams] = useState('');
    const [password, setPassword] = useState('');
    const [replyPassword, setReplyPassword] = useState('');
    const [messageErrorPassword, setMessageErrorPassword] = useState('');
    const [passwordUpdated, setPasswordUpdated] = useState(false);

    useEffect(() => {
        if (idUser) {
            setIdUserParams(idUser);
        }
        if (passwordResetCode) {
            setIdPasswordResetCodeParams(passwordResetCode);
        }
    }, [ ]);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const [showReplayPassword, setShowReplayPassword] = useState(false);
    const toggleShowReplayPassword = () => {
        setShowReplayPassword((prevState) => !prevState);
    };

    const onSubmit = async (formData: IResetPassword) => {
        if (password === replyPassword) {
            try {
                dispatch(passwordChangeClient(idUserParams, idPasswordResetCodeParams, formData));
                setPasswordUpdated(true);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } catch (userErrors) {
                setMessageErrorPassword('Hubo un problema al actualizar la contraseña');
            }
        } else {
            setMessageErrorPassword('Las contraseñas no coinciden');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={`${styles.container} d-flex align-items-center justify-content-center vh-100`}>
                <div className={`${styles.container__Component} d-flex flex-column align-items-center justify-content-center`}>
                    <Link to="/home" >
                        <img src={LogoTopDriveGroup} alt="Top Drive Group" className={`${styles.logo} mb-2`} loading="lazy" />
                    </Link>

                    <div className='p-4 position-relative'>
                        {userErrors && userErrors.length > 0 && (
                            <div className={`${styles.errors__Login} bg-danger p-2 text-white text-center border position-absolute w-100`}>
                                {userErrors.map((userErrors, i) => (
                                    <p className='m-0' key={i}> {userErrors}</p>
                                ))}
                            </div>
                        )}
                    </div>

                    <h3 className={`${styles.secundary__Title } `}>{t('resetPassword.main__Title')}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className='mb-2 d-flex align-items-center justify-content-center position-relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register('password', { required: true })}
                                className={`${styles.input} p-2 mb-3 border rounded`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={`${t('resetPassword.new__Password_Placeholder')}`}
                            />
                            {showPassword ? (
                                <RiEyeOffFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                            ) : (
                                <RiEyeFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                            )}
                            {errors.password && (
                                <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('resetPassword.new__Password_Error')}</p>
                            )}
                        </div>

                        <div className='mb-2 d-flex align-items-center justify-content-center position-relative'>
                            <input
                                type={showReplayPassword ? "text" : "password"}
                                {...register('replyPassword', { required: true })}
                                className={`${styles.input} p-2 mb-3 border rounded`}
                                value={replyPassword}
                                onChange={(e) => setReplyPassword(e.target.value)}
                                placeholder={`${t('resetPassword.confirm__New_Password_Placeholder')}`}
                            />
                            {showReplayPassword ? (
                                <RiEyeOffFill className={`${styles.icon} position-absolute`} onClick={toggleShowReplayPassword} />
                            ) : (
                                <RiEyeFill className={`${styles.icon} position-absolute`} onClick={toggleShowReplayPassword} />
                            )}
                            {errors.replyPassword && (
                                <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('resetPassword.confirm__New_Password_Error')}</p>
                            )}
                        </div>

                        {messageErrorPassword && <div className="userErrors-message">{messageErrorPassword}</div>}

                        <div className="d-flex mb-4">
                            <button className={`${styles.button__Submit} border-0 rounded m-auto text-decoration-none`} type='submit' >{t('resetPassword.button__Send')}</button>
                        </div>

                        {passwordUpdated && (
                            <div className="success-message">{t('resetPassword.alert__Success')}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordPage;