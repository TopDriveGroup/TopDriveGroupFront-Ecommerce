import NavBar from '../../../../components/Landing/01NavBar/NavBar';
import Footer from '../../../../components/Landing/Footer/Footer';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import styles from './styles.module.css';

function NeedHelpPage () {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} `}>
                <div>
                    <h1 className={`${styles.main__Title} m-0 text-center`}>Canales de ayuda y atención</h1>
                    <p>Además de hacer tus compras cómodamente a cualquier hora del día, podrás recibirlas en máximo 15 días hábiles (esta promesa de entrega la hacemos sin tener en cuenta cualquier contratiempo que se pueda presentar en la recepción, procesamiento y/o envío de la orden) y disfrutar de promociones, regalos y ofertas especiales, pensadas exclusivamente para ti, garantizándote la seguridad en tus transacciones.</p>
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h3 className={`${styles.secundary__Title } m-0`}>Ayuda Online</h3>
                    <div className=''>
                        <div className='m-2 d-flex gap-2'>
                            <div className={`${styles.container__Icon} p-2`}>
                                <IoMdMail className={styles.icon} />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <a href="mailto:info@topdrivegroup.com" className={`${styles.means__Contact} m-0 text-decoration-none`}>info@topdrivegroup.com</a>
                            </div>
                        </div>

                        <div className='m-2 d-flex gap-2'>
                            <div className={`${styles.container__Icon} p-2`}>
                                <FaPhone className={styles.icon} />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <p className={`${styles.means__Contact} m-0`}>+57 311 271 2405</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p>Hacemos nuestro mejor esfuerzo para responder a cualquier pregunta que puedas tener.</p>
                    <p>Puedes enviarnos un correo electrónico a <a href="mailto:info@topdrivegroup.com" className={`${styles.email__Contact} m-0 text-decoration-none`}>info@topdrivegroup.com</a> y lo responderemos dentro de las proximas 72 horas.</p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default NeedHelpPage;