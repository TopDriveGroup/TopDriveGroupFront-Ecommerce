import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// INGLES - ECOMMERCE
import enNavBar from './locales/en/Landing/01NavBar/01EnNavBar.json';
import enQuotation from './locales/en/Landing/01NavBar/03EnQuotation.json';
import enBestSellingProducts from './locales/en/Landing/03BestSellingProducts/EnBestSellingProducts.json';
import enProductsOnOffer from './locales/en/Landing/05ProductsOnOffer/EnProductsOnOffer.json';
import enInspiredByLastSaw from './locales/en/Landing/07InspiredByLastSaw/EnInspiredByLastSaw.json';
import enTrends from './locales/en/Landing/08Trends/EnTrends.json';
import enAllies from './locales/en/Landing/09Allies/EnAllies.json';
import enGuides from './locales/en/Landing/10Guides/EnGuides.json';
import enMeansPayment from './locales/en/Landing/10Guides/01MeansPayment/EnMeansPayment.json';
import enTrackingOrders from './locales/en/Landing/10Guides/02TrackingOrders/EnTrackingOrders.json';
import enReturnsAndExchanges from './locales/en/Landing/10Guides/03ReturnsAndExchanges/EnReturnsAndExchanges.json';
import enFooter from './locales/en/Landing/11Footer/EnFooter.json';
// HELPERS
import enDepartmentAndCity from './locales/en/helpers/DepartmentAndCity/EnDepartmentAndCity.json';

// ESPAÑOL - ECOMMERCE
import esNavBar from './locales/es/Landing/01NavBar/01EsNavBar.json';
import esQuotation from './locales/es/Landing/01NavBar/03EsQuotation.json';
import esBestSellingProducts from './locales/es/Landing/03BestSellingProducts/EsBestSellingProducts.json';
import esProductsOnOffer from './locales/es/Landing/05ProductsOnOffer/EsProductsOnOffer.json';
import esInspiredByLastSaw from './locales/es/Landing/07InspiredByLastSaw/EsInspiredByLastSaw.json';
import esTrends from './locales/es/Landing/08Trends/EsTrends.json';
import esAllies from './locales/es/Landing/09Allies/EsAllies.json';
import esGuides from './locales/es/Landing/10Guides/EsGuides.json';
import esMeansPayment from './locales/es/Landing/10Guides/01MeansPayment/01EsMeansPayment.json';
import esTrackingOrders from './locales/es/Landing/10Guides/02TrackingOrders/EsTrackingOrders.json';
import esReturnsAndExchanges from './locales/es/Landing/10Guides/03ReturnsAndExchanges/01EsReturnsAndExchanges.json';
import esFooter from './locales/es/Landing/11Footer/EsFooter.json';
// HELPERS
import esDepartmentAndCity from './locales/es/helpers/DepartmenAndCity/EsDepartmenAndCity.json';

const resources = {
    en: {
        // ECOMMERCE
        navBar: enNavBar,
        quotation: enQuotation,
        bestSellingProducts: enBestSellingProducts,
        productsOnOffer: enProductsOnOffer,
        inspiredByLastSaw: enInspiredByLastSaw,
        trends: enTrends,
        allies: enAllies,
        guides: enGuides,
        meansPayment: enMeansPayment,
        trackingOrders: enTrackingOrders,
        returnsAndExchangesEcommerce: enReturnsAndExchanges,
        footer: enFooter,
        
        // HELPERS
        departmentAndCity: enDepartmentAndCity,
    },
    
    es: {
        // ECOMMERCE
        navBar: esNavBar,
        quotation: esQuotation,
        bestSellingProducts: esBestSellingProducts,
        productsOnOffer: esProductsOnOffer,
        inspiredByLastSaw: esInspiredByLastSaw,
        trends: esTrends,
        allies: esAllies,
        guides: esGuides,
        meansPayment: esMeansPayment,
        trackingOrders: esTrackingOrders,
        returnsAndExchangesEcommerce: esReturnsAndExchanges,
        footer: esFooter,

        // HELPERS
        departmentAndCity: esDepartmentAndCity,
    }
};

// Obtener el idioma almacenado en localStorage o usar 'es' como predeterminado
const savedLanguage = localStorage.getItem('language') || 'es';

i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage, // Idioma inicial
    fallbackLng: 'es',
    ns: [
        // ECOMMERCE
        'navBar',
        'meansPaymentEcommerce',
        'producTrackingEcommerce',
        'returnsAndExchangesEcommerce',

        // HELPES
        'departmentAndCity',
    ],
    defaultNS: 'navBarLanding',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;