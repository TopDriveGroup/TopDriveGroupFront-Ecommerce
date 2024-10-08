/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import jsCookie from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../redux/store';
import { clearUserErrors } from '../../../../../redux/Landing/userSlice/userSlice';
import { loginUser } from '../../../../../redux/Landing/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IUserLogin } from '../../../../../types/userLogin.types';
import LogoTopDriveGroup from '../../../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { PiWarningCircle } from 'react-icons/pi';
import styles from './styles.module.css';

interface ConsultBranchPageProps {
    addNotification: (type: 'blocked' | 'error', message: string) => void;
}

interface DecodedToken {
    typeRole: string;
}

function LoginPage({ addNotification }: ConsultBranchPageProps) {
    const { t } = useTranslation('login');
    const token = jsCookie.get("token");
    const navigate = useNavigate();
    
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const userErrors = useSelector((state: RootState) => state.user.userErrors);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    useEffect(() => {
        dispatch(clearUserErrors());
    }, [dispatch]);

    const { register, formState: { errors }, handleSubmit } = useForm<IUserLogin>();
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const onSubmit = async (loginData: IUserLogin) => {
        setLoading(true);
        try {
            await dispatch(loginUser(loginData));
        } catch (error) {
            throw new Error('Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (typeof userErrors === 'string' && userErrors === 'Has bloqueado tu cuenta') {
            addNotification('blocked', 'Has bloqueado tu cuenta');
        } else if (Array.isArray(userErrors) && userErrors.includes('Has bloqueado tu cuenta')) {
            addNotification('blocked', 'Has bloqueado tu cuenta');
        }
    }, [userErrors]);  

    useEffect(() => {
        if (isAuthenticated && token) {
            const decodedToken = jwtDecode<DecodedToken>(token);
            const redirectPath = decodedToken.typeRole === 'Superadmin' 
                ? "/panel-user/profile" 
                : "/panel-top-drive-group/configuration/user-management";
            navigate(redirectPath);
        }
    }, [isAuthenticated, token, navigate]);

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={`${styles.container} d-flex align-items-center justify-content-center vh-100`}>
                <div className={`${styles.container__Component} d-flex flex-column align-items-center justify-content-center`}>
                    <Link to="/">
                        <img src={LogoTopDriveGroup} alt="Top Drive Group" className={`${styles.logo} mb-4`} loading="lazy" />
                    </Link>
                    
                    <div className='position-relative'>
                        {userErrors && (
                            <div className={`${styles.errors__Login} p-2 text-center position-absolute w-100`}>
                                <p className='m-0'><PiWarningCircle /> {userErrors}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <div className='mb-2 d-flex align-items-center justify-content-center position-relative'>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    className={`${styles.input} p-2 mb-3 border rounded`}
                                    placeholder={`${t('login.email__Placeholder')}`}
                                />
                                {errors.email && (
                                    <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('login.email__Error')}</p>
                                )}
                            </div>

                            <div className='mb-2'>
                                <div className="rounded d-flex align-items-center justify-content-center position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register('password', { required: true })}
                                        className={`${styles.input} p-2 mb-3 border rounded`}
                                        placeholder={`${t('login.password__Placeholder')}`}
                                    />
                                    {showPassword ? (
                                        <RiEyeOffFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                                    ) : (
                                        <RiEyeFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                                    )}
                                    {errors.password && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('login.password__Error')}</p>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex">
                                {loading ? 
                                    <div className={`${styles.container__Loading} `}>
                                        <button className={`${styles.button__Submit} border-0 rounded m-auto text-decoration-none`} type='submit' >
                                            <span className={`${styles.role} spinner-border spinner-border-sm`} role="status"></span> Login...
                                        </button>
                                    </div> 
                                :
                                    <button className={`${styles.button__Submit} border-0 rounded m-auto text-decoration-none`} type='submit' >Login</button>
                                }
                            </div>
                        </form>

                        <p className='m-0 text-center'>{t('login.SignUp')} <Link to="/register" className={`${styles.link} text-sky-500 text-decoration-none`}>{t('login.link__SignUp')}</Link></p>
                        <p className='text-center'><Link to="/reset-password" className={`${styles.link} text-sky-500 text-decoration-none`}>{t('login.forgotten__Password')}</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;