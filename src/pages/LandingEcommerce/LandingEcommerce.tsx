import NavBar from '../../components/LandingEcommerce/01NavBar/NavBar';
import Banner from '../../components/LandingEcommerce/02Banner/Banner';
import BestSellingProducts from '../../components/LandingEcommerce/03BestSellingProducts/BestSellingProducts';
import Campaign from '../../components/LandingEcommerce/04Campaign/Campaign';
import ProductsOnOffer from '../../components/LandingEcommerce/05ProductsOnOffer/ProductsOnOffer';
import BrandWeek from '../../components/LandingEcommerce/06BrandWeek/BrandWeek';
import InspiredByLastSaw from '../../components/LandingEcommerce/07InspiredByLastSaw/InspiredByLastSaw';
import Trends from '../../components/LandingEcommerce/08Trends/Trends';
import Allies from '../../components/LandingEcommerce/09Allies/Allies';
import Guides from '../../components/LandingEcommerce/10Guides/Guides';
import Footer from '../../components/LandingEcommerce/Footer/Footer';
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