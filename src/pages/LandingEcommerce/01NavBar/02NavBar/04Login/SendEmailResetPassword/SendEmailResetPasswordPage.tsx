import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../../redux/store';
import { sendEmailPasswordChangeClient } from '../../../../../../redux/LandingEcommerce/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import NavBar from '../../../../../../components/LandingEcommerce/01NavBar/NavBar';
import Footer from '../../../../../../components/LandingEcommerce/Footer/Footer';
import Loading from '../../../../../../components/GeneralComponents/ComponentLoading/Loading';
import styles from './styles.module.css';

function SendEmailResetPasswordPage() {
    const { t } = useTranslation('sendEmailResetPassword');
    
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const userErrors = useSelector((state: RootState) => state.user.userErrors);
    const loading = useSelector((state: RootState) => state.user.loading);

    const [emailResetPassword, setEmailResetPassword] = useState('');
    const [errorSendEmail, setErrorSendEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [ savingData, setSavingData ] = useState(false);

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    useEffect(() => {
        setSuccess(false);
    }, [emailResetPassword]);

    const handleSend = () => {
        try {
            setSavingData(true);
            setSuccess(false);
            if (!emailResetPassword || !validateEmail(emailResetPassword)) {
                setErrorSendEmail(t('sendEmailResetPassword.email__Error'));
                setSuccess(false);
                return;
            }
            dispatch(sendEmailPasswordChangeClient(emailResetPassword));
            setErrorSendEmail('');
            setEmailResetPassword('');
            setTimeout(() => {
                setSuccess(true);
                setSavingData(false);
            }, 1000);
        } catch (userErrors) {
            setErrorSendEmail(t('sendEmailResetPassword.email__Alert'));
            setTimeout(() => {
                setErrorSendEmail('');
            }, 5000);
        }
    };

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex flex-column`}>
                <h1 className={`${styles.main__Title} m-0 text-center`}>{t('sendEmailResetPassword.main__Title')}</h1>
                <p className='text-center'>{t('sendEmailResetPassword.introduction_Section')}</p>
                
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h5 className='text-center'>{t('sendEmailResetPassword.label__Email')}</h5>
                    <div className={`d-flex align-items-center justify-content-center gap-3 position-relative`}>
                        <input
                            type="text"
                            placeholder={t('sendEmailResetPassword.label__Email_Placeholder')}
                            value={emailResetPassword}
                            className={`${styles.input} p-2 border rounded`}
                            onChange={(e) => setEmailResetPassword(e.target.value)}
                        />
                        <button className={`${styles.button__Submit} border-0`} onClick={handleSend}>{t('sendEmailResetPassword.button__Send')}</button>
                        {errorSendEmail && <p className={`${styles.text__Danger} m-0 text-danger position-absolute`}>{errorSendEmail}</p>}
                    </div>
                </div>
                
                {(success === true && !userErrors) && (
                    <div className={`${styles.message} d-flex align-items-center justify-content-center`}>
                        <p className='m-0 text-success'>Excelente, hemos enviado a tu correo {emailResetPassword} un link para que recuperes tu contraseña</p>
                    </div>
                )}

                {userErrors && 
                    <div className={`${styles.message} d-flex align-items-center justify-content-center`}>
                        <p className='m-0 text-danger'>{userErrors}</p>
                    </div>
                }

                <div className={`${styles.container__Loading} d-flex align-items-center justify-content-center`}>
                    {loading || savingData && (
                        <div className="position-absolute">
                            <Loading />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SendEmailResetPasswordPage;