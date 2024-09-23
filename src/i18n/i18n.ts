import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// INGLES - LANDING
import enNavBarLanding from './locales/en/Landing/00NavBarLanding/01EnNavBarLanding.json';
import enAboutUs from './locales/en/Landing/00NavBarLanding/02EnAboutUs.json';
import enWasteWater from './locales/en/Landing/00NavBarLanding/02Industries/01EnWasteWater.json';
import enFoodBeverages from './locales/en/Landing/00NavBarLanding/02Industries/02EnFoodBeverages.json';
import enCement from './locales/en/Landing/00NavBarLanding/02Industries/03EnCement.json';
import enConstruction from './locales/en/Landing/00NavBarLanding/02Industries/04EnConstruction.json';
import enEnergy from './locales/en/Landing/00NavBarLanding/02Industries/05EnEnergy.json';
import enRenewableEnergies from './locales/en/Landing/00NavBarLanding/02Industries/06EnRenewableEnergies.json';
import enMetallurgy from './locales/en/Landing/00NavBarLanding/02Industries/07EnMetallurgy.json';
import enMining from './locales/en/Landing/00NavBarLanding/02Industries/08EnMining.json';
import enOilGas from './locales/en/Landing/00NavBarLanding/02Industries/09EnOilGas.json';
import enPorts from './locales/en/Landing/00NavBarLanding/02Industries/10EnPorts.json';
import enPulpPaper from './locales/en/Landing/00NavBarLanding/02Industries/11EnPulpPaper.json';
import enChemicals from './locales/en/Landing/00NavBarLanding/02Industries/12EnChemicals.json';
import enTablerists from './locales/en/Landing/00NavBarLanding/02Industries/13EnTablerists.json';
import enTelecommunications from './locales/en/Landing/00NavBarLanding/02Industries/14EnTelecommunications.json';
import enQuotation from './locales/en/Landing/00NavBarLanding/04EnQuotation.json';
import enPQRF from './locales/en/Landing/00NavBarLanding/05EnPQRF.json';
import enContactUs from './locales/en/Landing/00NavBarLanding/06EnContactUs.json';
import enCompanyDescription from './locales/en/Landing/03CompanyDescription/EnCompanyDescription.json';
import enBusinessUnits from './locales/en/Landing/04BusinessUnits/EnBusinessUnits.json';
import enWorks from './locales/en/Landing/04BusinessUnits/01EnWorksPage.json';
import enEfficiency from './locales/en/Landing/04BusinessUnits/02EnEfficiency.json';
import enProductionProcessOptimization from './locales/en/Landing/04BusinessUnits/03EnProductionProcessOptimization.json';
import enDataInfrastructure from './locales/en/Landing/04BusinessUnits/04EnDataInfrastructure.json';
import enModularSolutions from './locales/en/Landing/04BusinessUnits/05EnModularSolutions.json';
import enServices from './locales/en/Landing/04BusinessUnits/06EnServices.json';
import enStatistics from './locales/en/Landing/05Statistics/EnStatistics.json';
import enSolutions from './locales/en/Landing/06Solutions/EnSolutions.json';
import enAllies from './locales/en/Landing/07Allies/EnAllies.json';
import enCertificates from './locales/en/Landing/08Certificates/EnCertificates.json';
import enFooter from './locales/en/Landing/09Footer/EnFooter.json';

// INGLES - HELPERS
import enDepartmentAndCity from './locales/en/helpers/DepartmentAndCity/EnDepartmentAndCity.json';

// INGLES - LANDING ECOMMERCE
import enNavBarEcommerce from './locales/en/LandingEcommerce/01NavBar/01EnNavBarEcommerce.json';
import enMeansPaymentEcommerce from './locales/en/LandingEcommerce/Guides/01MeansPayment/01EnMeansPaymentEcommerce.json';
import enProducTrackingEcommerce from './locales/en/LandingEcommerce/Guides/02ProducTracking/01EnProducTrackingEcommerce.json';
import enReturnsAndExchangesEcommerce from './locales/en/LandingEcommerce/Guides/03ReturnsAndExchanges/01EnReturnsAndExchangesEcommerce.json';

// ESPAÑOL - LANDINGPAGE
import esNavBarLanding from './locales/es/Landing/00NavBarLanding/01EsNavBarLanding.json';
import esAboutUs from './locales/es/Landing/00NavBarLanding/02EsAboutUs.json';
import esWasteWater from './locales/es/Landing/00NavBarLanding/02Industries/01EsWasteWater.json';
import esFoodBeverages from './locales/es/Landing/00NavBarLanding/02Industries/02EsFoodBeverages.json';
import esCement from './locales/es/Landing/00NavBarLanding/02Industries/03EsCement.json';
import esConstruction from './locales/es/Landing/00NavBarLanding/02Industries/04EsConstruction.json';
import esEnergy from './locales/es/Landing/00NavBarLanding/02Industries/05EsEnergy.json';
import esRenewableEnergies from './locales/es/Landing/00NavBarLanding/02Industries/06EsRenewableEnergies.json';
import esMetallurgy from './locales/es/Landing/00NavBarLanding/02Industries/07EsMetallurgy.json';
import esMining from './locales/es/Landing/00NavBarLanding/02Industries/08EsMining.json';
import esOilGas from './locales/es/Landing/00NavBarLanding/02Industries/09EsOilGas.json';
import esPorts from './locales/es/Landing/00NavBarLanding/02Industries/10EsPorts.json';
import esPulpPaper from './locales/es/Landing/00NavBarLanding/02Industries/11EsPulpPaper.json';
import esChemicals from './locales/es/Landing/00NavBarLanding/02Industries/12EsChemicals.json';
import esTablerists from './locales/es/Landing/00NavBarLanding/02Industries/13EsTablerists.json';
import esTelecommunications from './locales/es/Landing/00NavBarLanding/02Industries/14EsTelecommunications.json';
import esQuotation from './locales/es/Landing/00NavBarLanding/04EsQuotation.json';
import esPQRF from './locales/es/Landing/00NavBarLanding/05EsPQRF.json';
import esContactUs from './locales/es/Landing/00NavBarLanding/06EsContactUs.json';
import esCompanyDescription from './locales/es/Landing/03CompanyDescription/EsCompanyDescription.json';
import esBusinessUnits from './locales/es/Landing/04BusinessUnits/EsBusinessUnits.json';
import esWorks from './locales/es/Landing/04BusinessUnits/01EsWorksPage.json';
import esEfficiency from './locales/es/Landing/04BusinessUnits/02EsEfficiency.json';
import esProductionProcessOptimization from './locales/es/Landing/04BusinessUnits/03EsProductionProcessOptimization.json';
import esDataInfrastructure from './locales/es/Landing/04BusinessUnits/04EsDataInfrastructure.json';
import esModularSolutions from './locales/es/Landing/04BusinessUnits/05EsModularSolutions.json';
import esServices from './locales/es/Landing/04BusinessUnits/06EsServices.json';
import esStatistics from './locales/es/Landing/05Statistics/EsStatistics.json';
import esSolutions from './locales/es/Landing/06Solutions/EsSolutions.json';
import esAllies from './locales/es/Landing/07Allies/EsAllies.json';
import esCertificates from './locales/es/Landing/08Certificates/EsCertificates.json';
import esFooter from './locales/es/Landing/09Footer/EsFooter.json';

// ESPAÑOL - HELPERS
import esDepartmentAndCity from './locales/es/helpers/DepartmenAndCity/EsDepartmenAndCity.json';

// ESPAÑOL - LANDING ECOMMERCE
import esNavBarEcommerce from './locales/es/LandingEcommerce/01NavBar/01EsNavBarEcommerce.json';
import esMeansPaymentEcommerce from './locales/es/LandingEcommerce/Guides/01MeansPayment/01EsMeansPaymentEcommerce.json';
import esProducTrackingEcommerce from './locales/es/LandingEcommerce/Guides/02ProducTracking/01EsProducTrackingEcommerce.json';
import esReturnsAndExchangesEcommerce from './locales/es/LandingEcommerce/Guides/03ReturnsAndExchanges/01EsReturnsAndExchangesEcommerce.json';

// APLICAR LAZY LOADING PARA EL LENGUAJE DE TRADUCCION
const resources = {
    en: {
        // LANDING
        navBarLanding: enNavBarLanding,
        aboutUs: enAboutUs,
        industries_WasteWater: enWasteWater,
        industries_FoodBeverages: enFoodBeverages,
        industries_Cement: enCement,
        industries_Construction: enConstruction,
        industries_Energy: enEnergy,
        industries_RenewableEnergies: enRenewableEnergies,
        industries_Metallurgy: enMetallurgy,
        industries_Mining: enMining,
        industries_OilGas: enOilGas,
        industries_Ports: enPorts,
        industries_PulpPaper: enPulpPaper,
        industries_Chemicals: enChemicals,
        industries_Tablerists: enTablerists,
        industries_Telecommunications: enTelecommunications,
        quotation: enQuotation,
        pqrf: enPQRF,
        contactUs: enContactUs,
        companyDescription: enCompanyDescription,
        businessUnits: enBusinessUnits,
        works: enWorks,
        efficiency: enEfficiency,
        productionProcessOptimization: enProductionProcessOptimization,
        dataInfrastructure: enDataInfrastructure,
        modularSolutions: enModularSolutions,
        services: enServices,
        statistics: enStatistics,
        solutions: enSolutions,
        allies: enAllies,
        certificates: enCertificates,
        footer: enFooter,
        
        // LANDING HELPERS
        departmentAndCity: enDepartmentAndCity,

        // LANDING ECOMMERCE
        navBarEcommerce: enNavBarEcommerce,
        meansPaymentEcommerce: enMeansPaymentEcommerce,
        producTrackingEcommerce: enProducTrackingEcommerce,
        returnsAndExchangesEcommerce: enReturnsAndExchangesEcommerce,
    },
    
    es: {
        // LANDING
        navBarLanding: esNavBarLanding,
        aboutUs: esAboutUs,
        industries_WasteWater: esWasteWater,
        industries_FoodBeverages: esFoodBeverages,
        industries_Cement: esCement,
        industries_Construction: esConstruction,
        industries_Energy: esEnergy,
        industries_RenewableEnergies: esRenewableEnergies,
        industries_Metallurgy: esMetallurgy,
        industries_Mining: esMining,
        industries_OilGas: esOilGas,
        industries_Ports: esPorts,
        industries_PulpPaper: esPulpPaper,
        industries_Chemicals: esChemicals,
        industries_Tablerists: esTablerists,
        industries_Telecommunications: esTelecommunications,
        quotation: esQuotation,
        pqrf: esPQRF,
        contactUs: esContactUs,
        companyDescription: esCompanyDescription,
        businessUnits: esBusinessUnits,
        works: esWorks,
        efficiency: esEfficiency,
        productionProcessOptimization: esProductionProcessOptimization,
        dataInfrastructure: esDataInfrastructure,
        modularSolutions: esModularSolutions,
        services: esServices,
        statistics: esStatistics,
        solutions: esSolutions,
        allies: esAllies,
        certificates: esCertificates,
        footer: esFooter,

        // LANDING HELPERS
        departmentAndCity: esDepartmentAndCity,
        
        // LANDING ECOMMERCE
        navBarEcommerce: esNavBarEcommerce,
        meansPaymentEcommerce: esMeansPaymentEcommerce,
        producTrackingEcommerce: esProducTrackingEcommerce,
        returnsAndExchangesEcommerce: esReturnsAndExchangesEcommerce,
    }
};

// Obtener el idioma almacenado en localStorage o usar 'es' como predeterminado
const savedLanguage = localStorage.getItem('language') || 'es';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage, // Idioma inicial
        fallbackLng: 'es',
        ns: [
            // LANDING
            'navBarLanding',
            'aboutUs',
            'industries_WasteWater',
            'industries_FoodBeverages',
            'industries_Cement',
            'industries_Construction',
            'industries_Energy',
            'industries_RenewableEnergies',
            'industries_Metallurgy',
            'industries_Mining',
            'industries_OilGas',
            'industries_Ports',
            'industries_PulpPaper',
            'industries_Chemicals',
            'industries_Tablerists',
            'industries_Telecommunications',
            'quotation',
            'pqrf',
            'contactUs',
            'companyDescription',
            'businessUnits',
            'statistics',
            'solutions',
            'allies',
            'certificates',
            'footer',
            // LANDING HELPES
            'departmentAndCity',
            // LANDING ECOMMERCE
            'navBarEcommerce',
            'meansPaymentEcommerce',
            'producTrackingEcommerce',
            'returnsAndExchangesEcommerce'
        ],
        defaultNS: 'navBarLanding',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;