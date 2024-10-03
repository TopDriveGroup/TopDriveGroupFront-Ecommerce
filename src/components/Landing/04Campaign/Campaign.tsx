import TopDrive from '../../../assets/TopDriveGroup/EnchufeRojo.svg';
import { Link } from 'react-router-dom';
import { IoPricetag } from "react-icons/io5";
import styles from './styles.module.css';

function Campaign() {
    
    return (
        <div className={`${styles.container} mb-5 mt-5 position-relative overflow-hidden`}>
            <Link to='/ecommerce/campaign' className='text-decoration-none'>
                <div className={styles.container__Campaign}>
                    <img src={TopDrive} alt="TopDrive" className={`${styles.logo__TopDrive} position-absolute`} loading="lazy" />
                    <div className={`${styles.campaign} d-flex align-items-center`}>
                        <div className={`${styles.info} d-flex`}>
                            <IoPricetag className={styles.icon__Tag}/>
                            <div className={`${styles.container__Info} d-flex flex-column align-items-start justify-content-center`}>
                                <h3 className={`${styles.campaign__Title} m-0`}>TITULO CAMPAÑA</h3>
                                <p className={`${styles.campaign__Description} m-0`}>Pequeña descripción de la campaña para información</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.campaign__Button} d-flex flex-column align-items-center justify-content-center position-absolute border-0`}>
                        Todo sobre la campaña
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Campaign;