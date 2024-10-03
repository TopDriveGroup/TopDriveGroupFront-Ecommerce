import { useTranslation } from 'react-i18next';
//ELEMENTOS DEL COMPONENTE
import NavBar from '../../../../components/Landing/01NavBar/NavBar';
import Footer from '../../../../components/Landing/Footer/Footer';
import Coordinadora from '../../../../assets/Coordinadora.png';
import { FaTruckFast } from "react-icons/fa6";
import styles from './styles.module.css';

function TrackingOrdersPage () {
    const { t } = useTranslation('trackingOrders');

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} `}>
                <div>
                    <h1 className={`${styles.main__Title} m-0 text-center`}>{t('trackingOrders.main__Title')}</h1>
                    <p>{t('trackingOrders.introduction__Page')}</p>
                </div>

                <div className="d-flex align-items-center justify-content-around">
                    <a href="https://coordinadora.com/rastreo/rastreo-de-guia/detalle-de-rastreo-de-guia/" target="blank" rel="noopener noreferrer" className={`${styles.externalLink} d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                        <p className="m-0">Coordinadora</p>
                        <img src={Coordinadora} alt="Coordinadora" className={styles.conveyor__Logo} loading="lazy" />
                    </a>

                    <a href="https://coordinadora.com/rastreo/rastreo-de-guia/detalle-de-rastreo-de-guia/" target="blank" rel="noopener noreferrer" className={`${styles.externalLink} d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                        <p className="m-0">{t('trackingOrders.our__Conveyor')}</p>
                        <FaTruckFast className={`${styles.logo__Conveyor} m-0`} />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TrackingOrdersPage;