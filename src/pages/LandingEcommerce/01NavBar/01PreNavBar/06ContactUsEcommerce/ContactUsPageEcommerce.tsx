/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { postContactUs } from '../../../../../redux/LandingEcommerce/contactUs/actions';
import type { RootState, AppDispatch } from '../../../../../redux/store';
//ELEMENTOS DEL COMPONENTE
import { IContactUs } from '../../../../../types/contactUs.types';
import NavBar from '../../../../../components/LandingEcommerce/01NavBar/NavBar';
import Footer from '../../../../../components/LandingEcommerce/Footer/Footer';
import Saludo from '../../../../../assets/Uno.jpg';
import styles from './styles.module.css';

function ContactUsEcommercePage() {
    const { t } = useTranslation('contactUs');
    
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const errorContactUs = useSelector((state: RootState) => state.contactUs.errorContactUs);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactUs>();

    const [formSubmitted, setFormSubmitted] = useState(false); 
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);
    const [message, setMessage] = useState('');
    const [charsRemaining, setCharsRemaining] = useState(500);

    const handleTextareaChange = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        if (newValue.length <= 500) {
            setMessage(newValue);
            setCharsRemaining(500 - newValue.length);
        }
    };

    const onSubmit = async (values: IContactUs) => {
        try {
            if (!acceptedPolicy) return;
            const formData = {
                ...values,
                helpDescription: message,
            } as IContactUs;
            await dispatch(postContactUs(formData));
            setFormSubmitted(true);
            reset();
            setTimeout(() => {
                setFormSubmitted(false);
            }, 2000);
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        }
    };

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex flex-column align-items-center justify-content-center`}>
                <div className={`${styles.banner__Page} mb-4 overflow-hidden position-relative`}>
                    <img src={Saludo} alt="Saludo" className={`${styles.image__Banner_Page} `}/>
                    <div className={`${styles.container__Message_Glass_Morphism} d-flex align-items-center justify-content-center position-absolute`}>
                        CONTÁCTANOS
                    </div>
                </div>

                <div className={`${styles.container__Component} m-auto p-2 d-flex flex-column align-items-start justify-content-center gap-4`}>
                    <div className={`${styles.container__Form} m-auto d-flex align-items-start justify-content-center gap-5`}>
                        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} px-1 position-relative`} >
                            {formSubmitted && (
                                <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>{t('contactUs.alert_Success')}</div>
                            )}
                            {errorContactUs && errorContactUs.map((error, i) => (
                                <div key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</div>
                            ))}
                            <h3 className={`${styles.title} m-0`}>{t('contactUs.form_ContactUs')}</h3>
                            <p className={styles.text}>{t('contactUs.paragraph_Form_ContactUs')}</p>
                            <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>{t('contactUs.label_Name_Corporate_Name')}</h6>
                                <div className={styles.container__Input}>
                                    <input
                                        type="text"
                                        {...register('userName', { required: true })}
                                        className={`${styles.input} mb-4 p-2 border rounded`}
                                        placeholder={t('contactUs.placeholder_Name_Corporate_Name')}
                                    />
                                    {errors.userName && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('contactUs.text_Danger_Name_Corporate_Name')}</p>
                                    )}
                                </div>
                            </div>

                            <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>{t('contactUs.label_Email')}</h6>
                                <div className={styles.container__Input}>
                                    <input
                                        type="email"
                                        {...register('email', { required: true })}
                                        className={`${styles.input} mb-4 p-2 border rounded`}
                                        placeholder={t('contactUs.placeholder_Email')}
                                    />
                                    {errors.email && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('contactUs.text_Danger_Email')}</p>
                                    )}
                                </div>
                            </div>

                            <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>{t('contactUs.label_Phone')}</h6>
                                <div className={styles.container__Input}>
                                    <input
                                        type="text"
                                        {...register('phone', { required: true })}
                                        className={`${styles.input} mb-4 p-2 border rounded`}
                                        placeholder={t('contactUs.placeholder_Phone')}
                                    />
                                    {errors.phone && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('contactUs.text_Danger_Phone')}</p>
                                    )}
                                </div>
                            </div>

                            <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>{t('contactUs.label_Message_Textarea')}</h6>
                                <div className={styles.container__Input}>
                                    <textarea
                                        {...register('helpDescription', { required: true })}
                                        className={`${styles.input} p-2 border rounded`}
                                        placeholder={t('contactUs.placeholder_Message_Textarea')}
                                        cols={10}
                                        rows={5}
                                        value={message}
                                        onChange={handleTextareaChange}
                                    ></textarea>
                                    <p className={`${styles.chars__Remaining} mb-2 text-muted`}>{charsRemaining} {t('contactUs.placeholder_Message_Textarea_Chars_Remaining')}</p>
                                    {errors.helpDescription && (
                                        <p className={`${styles.text__Danger_Textarea} text-danger position-absolute`}>{t('contactUs.text_Danger_Message_Textarea')}</p>
                                    )}
                                </div>
                            </div>

                            <div className={`${styles.container__Accepted_Policy} d-flex align-items-center justify-content-center position-relative`}>
                                <p className={`${styles.text__Accepted_Policy} text-center m-0`}>{t('contactUs.label_Acepted_Conditions')} <Link to="/personalDataPolicy" className={`${styles.link} text-decoration-none text-sky-500`}>{t('contactUs.label_Continue_Acepted_Conditions')}</Link></p>
                                <input
                                    type="checkbox"
                                    {...register('isAcceptedConditions', { required: true })}
                                    checked={acceptedPolicy}
                                    className={`${styles.checkbox} `}
                                    onChange={() => setAcceptedPolicy(!acceptedPolicy)}
                                />
                                {errors.isAcceptedConditions && (
                                    <p className={`${styles.text__Danger_AcceptedPolicy} text-danger position-absolute`}>{t('contactUs.text_Danger_Acepted_Conditions')}</p>
                                )}
                            </div>
                            <div className="d-flex">
                                <button
                                    type='submit'
                                    className={`${styles.button__Submit} m-auto border-0 rounded text-decoration-none`}
                                >{t('contactUs.button_Quote')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUsEcommercePage;