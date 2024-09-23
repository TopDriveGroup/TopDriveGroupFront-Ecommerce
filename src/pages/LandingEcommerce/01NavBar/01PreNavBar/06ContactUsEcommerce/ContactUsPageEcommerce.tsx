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
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from './styles.module.css';

function ContactUsEcommercePage() {
    const { t } = useTranslation('contactUs');
    const dispatch: AppDispatch = useDispatch();

    // Estado de Redux
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
                    <div className="d-flex">
                        <div className={`${styles.container__Text_Informative} `}>
                            <h3 className={`${styles.secundary__Title} mb-2`}>¡Cada interacción cuenta!</h3>
                            <p className="mb-2">Gracias por interesarte en <span className={styles.topDriveGroup}>Top Drive Group</span>.</p>
                            <p className="m-0">Agradecemos todas las consultas de clientes y usuarios Si tiene preguntas sobre nuestros productos o servicios o consultas generales, ponte en contacto con nosotros a través del formulario de contacto. Responderemos a tu consulta lo antes posible. También puede seguirnos y ponerse en contacto con nosotros en nuestras redes sociales. Facebook, Linkedin, Instagram, TikTok y YouTube.</p>
                        </div>

                        <div className={`${styles.container__ExternalLink} d-flex align-items-center justify-content-center`}>
                            <a href="https://www.facebook.com/topdrivegroup" target="blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.external__Link} d-flex align-items-center justify-content-center text-decoration-none`}>
                                <FaFacebookSquare className={styles.icon__Facebook} />
                            </a>
                            <a href="https://www.linkedin.com/company/top-drive-group/" target="blank" rel="noopener noreferrer" aria-label="Linkedin" className={`${styles.external__Link} d-flex align-items-center justify-content-center text-decoration-none`}>
                                <FaLinkedin className={styles.icon__Linkedin} />
                            </a>
                            <a href="https://www.instagram.com/topdrive.group/?igshid=YmMyMTA2M2Y%3D" target="blank" rel="noopener noreferrer" aria-label="Instagram" className={`${styles.external__Link} d-flex align-items-center justify-content-center text-decoration-none`}>
                                <RiInstagramFill className={styles.icon__Instagram} />
                            </a>
                            <a href="https://www.tiktok.com/@topdrivegroup" target="blank" rel="noopener noreferrer" aria-label="Tiktok" className={`${styles.external__Link} d-flex align-items-center justify-content-center text-decoration-none`}>
                                <FaTiktok className={styles.icon__TikTok} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC-Cook_9vLLIDhfdELvvJiQ/featured" target="blank" rel="noopener noreferrer" aria-label="Youtube" className={`${styles.external__Link} d-flex align-items-center justify-content-center text-decoration-none`}>
                                <FaYoutube className={styles.icon__Youtube} />
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.container__Maps} m-auto d-flex flex-wrap align-items-start justify-content-start gap-4`}>
                        <div className={`${styles.container__Card_Branch_Office} p-2`}>
                            <h5 className={`${styles.title__Branch_Office} mb-1`}>Cota, Cundinamarca</h5>
                            <div className={`${styles.container__Map} mb-1 overflow-hidden`}>
                                <iframe
                                    className={`${styles.iframe}`}
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44985.70587100053!2d-74.13870022090454!3d4.733164140768325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f836527295e17%3A0xba34223b324d6c1b!2sSan%20Bernardo%20Parque%20empresarial!5e0!3m2!1ses!2sco!4v1712000815621!5m2!1ses!2sco"}
                                    height="150"
                                    width="300px"
                                    frameBorder="0"
                                    style={{ border: "0px solid #ced4da" }}
                                    allowFullScreen
                                />
                            </div>
                            <div className={`${styles.container__Content} `}>
                                <p className='m-0'>Autopista Medellín 1.5 Parque Empresarial San Bernardo Bodega 1.</p>
                                <h5 className={`${styles.title__Country} m-0`}>Colombia</h5>
                            </div>
                        </div>

                        <div className={`${styles.container__Card_Branch_Office} p-2`}>
                            <h5 className={`${styles.title__Branch_Office} mb-1`}>Funza, Cundinamarca</h5>
                            <div className={`${styles.container__Map} mb-1 overflow-hidden`}>
                                <iframe
                                    className={`${styles.iframe}`}
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31809.45047854819!2d-74.16937388663221!3d4.738538738399297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f83077ba72a49%3A0x6b37b81182fbd980!2sMagnum%20Zona%20Franca%20Intexzona!5e0!3m2!1ses!2sco!4v1712001129288!5m2!1ses!2sco"}
                                    height="150"
                                    width="300px"
                                    frameBorder="0"
                                    style={{ border: "0px solid #ced4da" }}
                                    allowFullScreen
                                />
                            </div>
                            <div className={`${styles.container__Content} `}>
                                <p className='m-0'>Kilometro 1 vía Siberia Funza, Parque Industrial Intexzona, Bodega 72 - 2.</p>
                                <h5 className={`${styles.title__Country} m-0`}>Colombia</h5>
                            </div>
                        </div>

                        <div className={`${styles.container__Card_Branch_Office} p-2`}>
                            <h5 className={`${styles.title__Branch_Office} mb-1`}>Juan Mina, Atlántico</h5>
                            <div className={`${styles.container__Map} mb-1 overflow-hidden`}>
                                <iframe
                                    className={`${styles.iframe}`}
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39480.7825887454!2d-74.90783372012629!3d10.964142664246959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d4da530856d3%3A0xebf3da9de4ba4b89!2sZILOG%20Parque%20Industrial!5e0!3m2!1ses!2sco!4v1712001337439!5m2!1ses!2sco"}
                                    height="150"
                                    width="300px"
                                    frameBorder="0"
                                    style={{ border: "0px solid #ced4da" }}
                                    allowFullScreen
                                />
                            </div>
                            <div className={`${styles.container__Content} `}>
                                <p className='m-0'>Kilometro 9 vía Barranquilla Juan Mina, Parque Industrial Proyecto ZILOG, Bodega M2-L7.</p>
                                <h5 className={`${styles.title__Country} m-0`}>Colombia</h5>
                            </div>
                        </div>

                        <div className={`${styles.container__Card_Branch_Office} p-2`}>
                            <h5 className={`${styles.title__Branch_Office} mb-1`}>Cali, Valle del Cauca</h5>
                            <div className={`${styles.container__Map} mb-1 overflow-hidden`}>
                                <iframe
                                    className={`${styles.iframe}`}
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55150.155639507604!2d-76.54124574919172!3d3.5020957044608143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a95dd50a60f3%3A0x142284eff86ef010!2sMURANO%20Plataforma%20Log%C3%ADstica!5e0!3m2!1ses!2sco!4v1712001377323!5m2!1ses!2sco"}
                                    height="150"
                                    width="300px"
                                    frameBorder="0"
                                    style={{ border: "0px solid #ced4da" }}
                                    allowFullScreen
                                />
                            </div>
                            <div className={`${styles.container__Content} `}>
                                <p className='m-0'>Calle 11 # 31A - 14, Arroyo hondo Vía Yumbo, Parque Empresarial Murano, Bodega 2.</p>
                                <h5 className={`${styles.title__Country} m-0`}>Colombia</h5>
                            </div>
                        </div>

                        <div className={`${styles.container__Card_Branch_Office} p-2`}>
                            <h5 className={`${styles.title__Branch_Office} mb-1`}>Miami, Florida</h5>
                            <div className={`${styles.container__Map} mb-1 overflow-hidden`}>
                                <iframe
                                    className={`${styles.iframe}`}
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162560.49829835776!2d-80.26776212551125!3d25.799830698913343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b97a807d8e77%3A0x21fdac5e994eb318!2s8220%20NW%2030th%20Terrace%20%2325%2C%20Doral%2C%20FL%2033122%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1723835637124!5m2!1ses!2sco"}
                                    height="150"
                                    width="300px"
                                    frameBorder="0"
                                    style={{ border: "0px solid #ced4da" }}
                                    allowFullScreen
                                />
                            </div>
                            <div className={`${styles.container__Content} `}>
                                <p className='m-0'>8220 NW 30 TERR #25, FL 33122.</p>
                                <h5 className={`${styles.title__Country} m-0`}>EEUU</h5>
                            </div>
                        </div>
                    </div>

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