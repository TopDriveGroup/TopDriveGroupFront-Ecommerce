import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getTrendingProducts } from '../../../redux/LandingEcommerce/productSlice/actions';
// ELEMENTOS DEL COMPONENTE
import styles from './styles.module.css';

function Trends() {
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const { trendingProducts, loading } = useSelector((state: RootState) => state.products);

    // Despacha la acción para obtener los productos en tendencia cuando el componente se monte
    useEffect(() => {
        dispatch(getTrendingProducts());
    }, [dispatch]);

    return (
        <div className={`${styles.container} mt-5 mb-5 position-relative`}>
            <h3 className={`${styles.main__Title} mb-3 text-center`}>Tendencias en <span className={styles.topDriveGroup}>Top Drive Group</span></h3>

            <div className={`${styles.container__Trends} d-flex align-items-start justify-content-center gap-4`}>
                {loading ? (
                    <p>Cargando tendencias...</p> // Puedes mostrar un spinner aquí si prefieres
                ) : (
                    trendingProducts?.map((trend, index) => (
                        <Link
                            key={index}
                            to={`/trends/${trend._id}`} // Usar el _id o algún campo único como identificador en la URL
                            className={`${styles.container__Trend} m-0 d-flex flex-column align-items-center justify-content-start text-decoration-none`}
                        >
                            <div className={`${styles.container__Image_Trend} p-1`}>
                                <img
                                    src={trend.mainImage} // Puedes personalizar la imagen aquí si la tienes
                                    alt={`Imagen de ${trend._id}`}
                                    className={styles.image__Trend}
                                    loading="lazy"
                                />
                            </div>
                            <div className={`${styles.container__Title__Trend} pt-1 d-flex align-items-center justify-content-start`}>
                                <h5 className={`${styles.title__Trend} m-0 text-center`}>{trend._id}</h5> {/* Nombre de la clase */}
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

export default Trends;
