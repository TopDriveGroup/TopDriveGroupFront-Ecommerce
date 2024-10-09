import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../../redux/store';
import { clearUserErrors } from '../../../../../../redux/Landing/userSlice/userSlice';
import { sendEmailPasswordChangeClient } from '../../../../../../redux/Landing/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import NavBar from '../../../../../../components/Landing/01NavBar/NavBar';
import Footer from '../../../../../../components/Landing/Footer/Footer';
import styles from './styles.module.css';

function SendEmailResetPasswordPage() {
    const { t } = useTranslation('sendEmailResetPassword');
    
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const userErrors = useSelector((state: RootState) => state.user.userErrors);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // VALIDA EL FORMATO DEL EMAIL
    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError('El formato del email no es válido');
        } else {
            setEmailError('');
        }
    };

    const handleReturn = async () => {
        try {
            dispatch(clearUserErrors());
            setEmail('');
            setSuccess(false);
            setLoading(false);
        } catch (error) {
            throw new Error('Error en la solicitud de cambio de contraseña');
        }
    };

    const onSubmit = async () => {
        if (!emailError) {
            setLoading(true);
            try {
                await dispatch(sendEmailPasswordChangeClient(email));
                setSuccess(true);
            } catch (error) {
                throw new Error('Error en la solicitud de cambio de contraseña');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <header><NavBar /></header>
            <main className={`${styles.container} d-flex flex-column`}>
                <section>
                    <h2 className={`${styles.main__Title} m-0 text-center`}>{t('sendEmailResetPassword.main__Title')}</h2>
                    <p className='text-center'>{t('sendEmailResetPassword.introduction_Section')}</p>

                    <form className="d-flex flex-column align-items-center justify-content-center position-relative" onSubmit={(e) => e.preventDefault()}>
                        <fieldset className="mb-3 d-flex flex-column align-items-center justify-content-center">
                            <legend className='text-center'>Introduce tu dirección de correo electrónico</legend>
                            <div className={`d-flex align-items-center justify-content-center gap-3`}>
                                <input
                                    type="email"
                                    placeholder="Tu email aquí"
                                    value={email}
                                    className={`${styles.input} p-2 border rounded ${emailError ? 'is-invalid' : ''}`}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                    required
                                />
                                {loading ? 
                                    <button className={`${styles.button__Submit} border-0 rounded m-auto text-decoration-none`} disabled>
                                        <span className="spinner-border spinner-border-sm" role="status"></span> Enviando...
                                    </button>
                                :
                                    <button className={`${styles.button__Submit} border-0 rounded m-auto text-decoration-none`} onClick={onSubmit} disabled={!!emailError}>Enviar</button>
                                }
                            </div>
                            {emailError && (
                                <div className="text-danger">{emailError}</div>
                            )}
                        </fieldset>

                        {Array.isArray(userErrors) && userErrors.map((error, i) => (
                            <article key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</article>
                        ))}

                        {success && !userErrors && (
                            <article className={`${styles.info} d-flex flex-column align-items-center justify-content-center`}>
                                <p>Excelente, hemos enviado a tu correo {email} un link para que recuperes tu contraseña</p>
                            </article>
                        )}

                        {userErrors && (
                            <article className="d-flex flex-column align-items-center justify-content-center">
                                <p className='text-danger'>{userErrors}</p>
                                <p>¡Te equivocaste con el correo electrónico?</p>
                                <button className={`${styles.button__Return} border-0 rounded`} onClick={handleReturn}>Clic acá para intentar de nuevo</button>
                            </article>
                        )}
                    </form>
                </section>
            </main>

            <footer><Footer /></footer>
        </div>
    );
}

export default SendEmailResetPasswordPage;