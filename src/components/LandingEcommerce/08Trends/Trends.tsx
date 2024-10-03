import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getTrendingProducts } from '../../../redux/LandingEcommerce/productSlice/actions';
// ELEMENTOS DEL COMPONENTE
import styles from './styles.module.css';

function Trends() {
    const { t } = useTranslation('trends');

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const { trendingProducts, loading } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(getTrendingProducts());
    }, [dispatch]);

    return (
        <div className={`${styles.container} mt-5 mb-5 position-relative`}>
            <h3 className={`${styles.main__Title} mb-3 text-center`}>{t('trends.trends__In')} <span className={styles.topDriveGroup}>Top Drive Group</span></h3>

            <div className={`${styles.container__Trends} d-flex align-items-start justify-content-center gap-4`}>
                {loading ? (
                    <p>{t('trends.loading__Trends')}...</p> 
                ) : (
                    trendingProducts?.map((trend, index) => (
                        <Link
                            key={index}
                            to={`/trends/${trend._id}`} 
                            className={`${styles.container__Trend} m-0 d-flex flex-column align-items-center justify-content-start text-decoration-none`}
                        >
                            <div className={`${styles.container__Image_Trend} p-1`}>
                                <img
                                    src={trend.mainImage}
                                    alt={`Imagen de ${trend._id}`}
                                    className={styles.image__Trend}
                                    loading="lazy"
                                />
                            </div>
                            <div className={`${styles.container__Title__Trend} pt-1 d-flex align-items-center justify-content-start`}>
                                <h5 className={`${styles.title__Trend} m-0 text-center`}>{trend._id}</h5>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

export default Trends;
