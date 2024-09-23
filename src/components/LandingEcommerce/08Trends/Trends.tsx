import { Link } from 'react-router-dom';
import EnchufeNegro from '../../../assets/TopDriveGroup/EnchufeNegro.svg';
import styles from './styles.module.css';

function Trends() {

    return (
        <div className={`${styles.container} mb-5 mt-5 position-relative`}>
            <div>
                <h3 className={`${styles.main__Title}  m-0 text-center`}>Tendencias en <span className={styles.topDriveGroup}>Top Drive Group</span></h3>
            </div>

            <img src={EnchufeNegro} alt="EnchufeNegro" className={`${styles.background__Image} position-absolute`}/>
            <div className={`${styles.container__Trends} mt-3 d-flex align-items-center justify-content-center gap-4`}>
                <Link to='/trends' className={`${styles.container__Trend} m-0 d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                    <div className={`${styles.trend} p-1`}>
                        <img src='https://res.cloudinary.com/dllm2rvow/image/upload/v1720468341/products/jcsp41htlwli6ccxhieb.png' alt="Foto 1" className={styles.image__Trend} loading="lazy" />
                    </div>
                    <div>
                        <h4 className={`${styles.title__Trend} m-0 text-center`}>Título clase</h4>
                    </div>
                </Link>
                <Link to='/trends' className={`${styles.container__Trend} m-0 d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                    <div className={`${styles.trend} p-1`}>
                        <img src='https://res.cloudinary.com/dllm2rvow/image/upload/v1720468327/products/ysgpnn2nwjpwms7krmor.png' alt="Foto 2" className={styles.image__Trend} loading="lazy" />
                    </div>
                    <div>
                        <h4 className={`${styles.title__Trend} m-0 text-center`}>Título clase</h4>
                    </div>
                </Link>
                <Link to='/trends' className={`${styles.container__Trend} m-0 d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                    <div className={`${styles.trend} p-1`}>
                        <img src="https://res.cloudinary.com/dllm2rvow/image/upload/v1720468320/products/bzlbpsb24udicnhq85xr.png" alt="Foto 3" className={styles.image__Trend} loading="lazy" />
                    </div>
                    <div>
                        <h4 className={`${styles.title__Trend} m-0 text-center`}>Título clase</h4>
                    </div>
                </Link>
                <Link to='/trends' className={`${styles.container__Trend} m-0 d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                    <div className={`${styles.trend} p-1`}>
                        <img src="https://res.cloudinary.com/dllm2rvow/image/upload/v1720468320/products/bzlbpsb24udicnhq85xr.png" alt="Foto 4" className={styles.image__Trend} loading="lazy" />
                    </div>
                    <div>
                        <h4 className={`${styles.title__Trend} m-0 text-center`}>Título clase</h4>
                    </div>
                </Link>
                <Link to='/trends' className={`${styles.container__Trend} m-0 d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                    <div className={`${styles.trend} p-1`}>
                        <img src="https://res.cloudinary.com/dllm2rvow/image/upload/v1720468307/products/vfey4o7x8lmldk2bebyr.png" alt="Foto 5" className={styles.image__Trend} loading="lazy" />
                    </div>
                    <div>
                        <h4 className={`${styles.title__Trend} m-0 text-center`}>Título clase</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Trends;