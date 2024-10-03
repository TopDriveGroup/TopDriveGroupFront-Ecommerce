import NavBar from '../../components/Landing/01NavBar/NavBar';
import Banner from '../../components/Landing/02Banner/Banner';
import BestSellingProducts from '../../components/Landing/03BestSellingProducts/BestSellingProducts';
import Campaign from '../../components/Landing/04Campaign/Campaign';
import ProductsOnOffer from '../../components/Landing/05ProductsOnOffer/ProductsOnOffer';
import BrandWeek from '../../components/Landing/06BrandWeek/BrandWeek';
import InspiredByLastSaw from '../../components/Landing/07InspiredByLastSaw/InspiredByLastSaw';
import Trends from '../../components/Landing/08Trends/Trends';
import Allies from '../../components/Landing/09Allies/Allies';
import Guides from '../../components/Landing/10Guides/Guides';
import Footer from '../../components/Landing/Footer/Footer';
import styles from './styles.module.css';

function LandingEcommerce() {

    return (
        <div className={styles.container__General}>
            <NavBar />
            <div className={styles.container}>
                <Banner />
                <BestSellingProducts />
                <Campaign />
                <ProductsOnOffer />
                <BrandWeek />
                <InspiredByLastSaw />
                <Trends />
                <Allies />
                <Guides />
            </div>
            <Footer />
        </div>
    );
}

export default LandingEcommerce;