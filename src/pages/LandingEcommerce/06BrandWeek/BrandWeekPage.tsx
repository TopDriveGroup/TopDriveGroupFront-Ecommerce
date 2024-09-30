import NavBar from '../../../components/LandingEcommerce/01NavBar/NavBar';
import Footer from '../../../components/LandingEcommerce/Footer/Footer';
import ConstructionWorker from '../../../assets/Error404/ConstructionWorker.svg';
import styles from './styles.module.css';

function BrandWeekPage () {
    
    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex align-items-center justify-content-center`}>
                <div>
                    <img src={ConstructionWorker} alt="Página en construcción" className={styles.image} loading="lazy" />
                    <h2 className='text-center'>Página en construcción</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BrandWeekPage;