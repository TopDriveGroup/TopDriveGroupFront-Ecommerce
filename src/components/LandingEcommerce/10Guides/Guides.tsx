import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//ELEMENTOS DEL COMPONENTE
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineCreditScore, MdPublishedWithChanges } from "react-icons/md";
import styles from './styles.module.css';

function Guides() {
    const { t } = useTranslation('guides');

    return (
        <div className={`${styles.container} mb-5 mt-5`}>
            <div>
                <h3 className={`${styles.main__Title}  m-0 text-center`}>{t('guides.tittle__Section')}</h3>
            </div>
            <div className={`${styles.container__Informatives} mt-3 d-flex align-items-center justify-content-between gap-4`}>
                <Link to={'/guides/means-of-payment'} className={`${styles.link__Informative} d-flex align-items-center justify-content-center text-decoration-none`}>
                    <MdOutlineCreditScore className={`${styles.icon__Informative} `}/>
                    <p className={`${styles.title__Informative__Pay} m-0 text-center`}>{t('guides.payment__Methods')}</p>
                </Link>

                <Link to={'/guides/track-my-orders'} className={`${styles.link__Informative} d-flex align-items-center justify-content-center text-decoration-none`}>
                    <BsBoxSeam className={`${styles.icon__Informative} `}/>
                    <p className={`${styles.title__Informative__Tracking} m-0 text-center`}>{t('guides.tracking_Orders')}</p>
                </Link>

                <Link to={'/guides/changes-and-returns'} className={`${styles.link__Informative} d-flex align-items-center justify-content-center text-decoration-none`}>
                    <MdPublishedWithChanges className={`${styles.icon__Informative} `}/>
                    <p className={`${styles.title__Informative__Change} m-0 text-center`}>{t('guides.exchages__And_Returns')}</p>
                </Link>
            </div>
        </div>
    );
}

export default Guides;