import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//ELEMENTOS DEL COMPONENTE
import Logo3M from '../../../assets/Landing/06Allies/3M.png';
import styles from './styles.module.css';

function BrandWeek() {
    const { t } = useTranslation('brandWeek');

    return (
        <div className={`${styles.container} mb-5 mt-5 d-flex align-items-center justify-content-between overflow-hidden`}>
            <div className={`${styles.container__Info} d-flex flex-column align-items-center justify-content-center`}>
                <div className={`${styles.container__Text} d-flex flex-column align-items-center justify-content-center`}>
                    <h2 className={`${styles.title} text-center`}>{t('brandWeek.main__Title')}</h2>
                    <p className={`${styles.text} `}>{t('brandWeek.week')} <span className={styles.brandWeek}>3M</span></p>
                </div> 
                <div className={`${styles.container__link__Button} d-flex align-items-center justify-content-center`}>
                    <Link to="/ecommerce/brand-week" className={`${styles.link__Button} text-decoration-none`} >{t('brandWeek.learn__More')} +</Link>
                </div>
            </div>
            <div className={`${styles.container__Logo} d-flex align-items-center justify-content-center`}>
                <img src={Logo3M} alt="3M" className={`${styles.logo__3M}`} loading="lazy" />
            </div>
        </div>
    );
}

export default BrandWeek;