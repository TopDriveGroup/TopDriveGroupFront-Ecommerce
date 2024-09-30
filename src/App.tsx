import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';

// GENERALES
import PaymentButton from './components/GeneralComponents/ComponentPaymentButton/PaymentButton';
import LinkedIn from './components/GeneralComponents/ComponentLinkedIn/LinkedIn';
import WhatsApp from './components/GeneralComponents/ComponentWhatsApp/WhatsApp';
import Scroll from './components/GeneralComponents/ComponentScroll/Scroll';
import SessionManager from './SessionManager';

// LANDINGPAGE
import RegisterPage from './pages/LandingEcommerce/01NavBar/02NavBar/03Register/00RegisterPage';
import LoginPage from './pages/LandingEcommerce/01NavBar/02NavBar/04Login/LoginPage';
import SendEmailResetPassword from './pages/LandingEcommerce/01NavBar/02NavBar/04Login/SendEmailResetPassword/SendEmailResetPasswordUser';
import ResetPasswordPage from './pages/LandingEcommerce/01NavBar/02NavBar/04Login/ResetPassword/ResetPasswordPage';

// LANDINGPAGE ECOMMERCE
import LandingEcommerce from './pages/LandingEcommerce/LandingEcommerce';

// NAVBAR ECOMMERCE
import QuotationEcommercePage from './pages/LandingEcommerce/01NavBar/01PreNavBar/03QuotationEcommercePage/QuotationEcommercePage';
import ContactUsEcommercePage from './pages/LandingEcommerce/01NavBar/01PreNavBar/06ContactUsEcommerce/ContactUsPageEcommerce';
import ShoppingCartPage from './pages/LandingEcommerce/01NavBar/02NavBar/01ShoppingCart/ShoppingCartPage';
import CheckoutPage from './pages/LandingEcommerce/01NavBar/02NavBar/01ShoppingCart/Checkout/CheckoutPage';
import Favorites from './pages/LandingEcommerce/01NavBar/02NavBar/02Favorites/Favorites';

// BANNER ECOMMERCE
import BannerFirstPage from './pages/LandingEcommerce/02Banner/01BannerFirstPage/BannerFirstPage';
import BannerSecondPage from './pages/LandingEcommerce/02Banner/02BannerSecondPage/BannerSecondPage';
import BannerThirdPage from './pages/LandingEcommerce/02Banner/03BannerThirdPage/BannerThirdPage';
import BannerFourthPage from './pages/LandingEcommerce//02Banner/04BannerFourthPage/BannerFourthPage';

// TOPSELLERS ECOMMERCE
import BestSellingProductsPage from './pages/LandingEcommerce/03BestSellingProducts/BestSellingProductsPage';

// CAMPAIGN ECOMMERCE
import CampaignPage from './pages/LandingEcommerce/04Campaign/CampaignPage';

// OFFERS
import ProductsOnOfferPage from './pages/LandingEcommerce/05ProductsOnOffer/ProductsOnOfferPage';

// BRANDWEEK
import BrandWeekPage from './pages/LandingEcommerce/06BrandWeek/BrandWeekPage';

// GUIDES
import MeansPaymentPage from './pages/LandingEcommerce/15Guides/01MeansPayment/MeansPaymentPage';
import TrackingOrdersPage from './pages/LandingEcommerce/15Guides/02TrackingOrders/TrackingOrdersPage';
import ReturnsExchangesPage from './pages/LandingEcommerce/15Guides/03ReturnsExchanges/ReturnsExchangesPage';
import NeedHelpPage from './pages/LandingEcommerce/15Guides/04NeedHelp/NeedHelpPage';

// DETAILS PRODUCT
import DetailProductPage from './pages/LandingEcommerce/DetailProduct/DetailProductPage';
import DetailProductByQrPage from './pages/LandingEcommerce/DetailProduct/DetailProductByQr/DetailProductByQrPage';

// RESULTADOS DEBUSQUEDA
import SearchResultPage from './pages/LandingEcommerce/SearchResult/SearchResultPage';

// PROTECTEDROUTES
import ProtectedRoute from './ProtectedRoute';
import ProfilePage from './pages/PanelUser/01Profile/ProfilePage';
import AddressesPage from './pages/PanelUser/02Addresses/AddressesPage';
import NewAddressPage from './pages/PanelUser/02Addresses/NewAddress/NewAddressPage';
import EditAddressPage from './pages/PanelUser/02Addresses/EditAddress/EditAddressPage';
import ActiveQuotationsPage from './pages/PanelUser/03Quotations/01ActiveQuotations/ActiveQuotationsPage';
import HistoryQuotationsPage from './pages/PanelUser/03Quotations/02HistoryQuotations/HistoryQuotationsPage';

import ActiveOrdersPage from './pages/PanelUser/04Orders/01ActiveOrders/ActiveOrdersPage';
import HistoryOrdersPage from './pages/PanelUser/04Orders/02HistoryOrders/HistoryOrdersPage';
import FavoritesPage from './pages/PanelUser/08Favorites/FavoritesPage';
import RequestDocumentsPage from './pages/PanelUser/09RequestDocuments/RequestDocumentsPage';
import ElectronicInvoicesPage from './pages/PanelUser/10ElectronicInvoices/ElectronicInvoicesPage';

//PANEL TOP DRIVE
import ConfigurationTopDriveGroupPage from './pages/PanelTopDriveGroup/01Configuration/ConfigurationTopDriveGroupPage';
import ProductsTopDriveGroupPage from './pages/PanelTopDriveGroup/02Products/ProductsTopDriveGroupPage';
import CreateProductTopDriveGroupPage from './pages/PanelTopDriveGroup/02Products/CreateProduct/CreateProductTopDriveGroupPage';
import CreateManyProductTopDriveGroupPage from './pages/PanelTopDriveGroup/02Products/CreateManyProduct/CreateManyProductTopDriveGroupPage';
import EditProductTopDriveGroupPage from './pages/PanelTopDriveGroup/02Products/EditProduct/EditProductTopDriveGroupPage';
import ActiveCustomerQuotationsPage from './pages/PanelTopDriveGroup/03CustomerQuotes/01ActiveCustomerQuotations/ActiveCustomerQuotationsPage';
import HistoryCustomerQuotationsPage from './pages/PanelTopDriveGroup/03CustomerQuotes/02HistoryCustomerQuotations/HistoryCustomerQuotationsPage';
import ActiveCustomerOrdersPage from './pages/PanelTopDriveGroup/04CustomerOrders/01ActiveCustomerOrders/ActiveCustomerOrdersPage';
import HistoryCustomerOrdersPage from './pages/PanelTopDriveGroup/04CustomerOrders/02HistoryCustomerOrders/HistoryCustomerOrders';
import AllCustomersPage from './pages/PanelTopDriveGroup/07Clients/01AllCustomers/AllCustomersPage';
import DocumentRequestTopDriveGroupPage from './pages/PanelTopDriveGroup/08DocumentRequest/DocumentRequestTopDriveGroupPage';
import ElectronicInvoicesTopDriveGroupPage from './pages/PanelTopDriveGroup/09ElectronicInvoices/ElectronicInvoicesTopDriveGroupPage';

// ERROR404
import Error404 from './pages/Error404/Error404';

function App() {

    return (
        <div>
            <BrowserRouter>
                <PaymentButton />
                <LinkedIn />
                <WhatsApp />
                <Scroll />
                <SessionManager />
                <Routes>
                    <Route path="/" element={<Navigate to="/ecommerce" replace />} />
                    <Route path="/ecommerce" element={<LandingEcommerce />} />
                    {/* ----------NAVBAR ECOMMERCE---------- */}
                    <Route path='/ecommerce/quotation' element={<QuotationEcommercePage />} />
                    <Route path='/ecommerce/contact-us' element={<ContactUsEcommercePage />} />
                    <Route path='/ecommerce/shopping-cart' element={<ShoppingCartPage />} />
                    <Route path='/ecommerce/shopping-cart/checkout/:transactionId' element={<CheckoutPage/>} />
                    <Route path='/ecommerce/favorites' element={<Favorites />} />

                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/reset-password' element={<SendEmailResetPassword />} />
                    <Route path='/reset-password/complete/:idUser/:passwordResetCode' element={<ResetPasswordPage />} />
                    {/* ----------BANNER ECOMMERCE---------- */}
                    <Route path='/ecommerce/first' element={<BannerFirstPage />} />
                    <Route path='/ecommerce/second' element={<BannerSecondPage />} />
                    <Route path='/ecommerce/third' element={<BannerThirdPage />} />
                    <Route path='/ecommerce/fourth' element={<BannerFourthPage />} />
                    {/* ----------TOPSELLERS ECOMMERCE---------- */}
                    <Route path='/ecommerce/all-top-sellers' element={<BestSellingProductsPage />} />
                    {/* ----------CAMPAIGN ECOMMERCE---------- */}
                    <Route path='/ecommerce/campaign' element={<CampaignPage />} />
                    {/* ----------OFFERS ECOMMERCE---------- */}
                    <Route path='/ecommerce/offers' element={<ProductsOnOfferPage />} />
                    {/* ----------SOLUTIONS ECOMMERCE---------- */}
                    <Route path='/ecommerce/brand-week' element={<BrandWeekPage />} />
                    {/* ----------GUIDES ECOMMERCE---------- */}
                    <Route path='/guides/means-of-payment' element={<MeansPaymentPage />} />
                    <Route path='/guides/track-my-orders' element={<TrackingOrdersPage />} />
                    <Route path='/guides/changes-and-returns' element={<ReturnsExchangesPage />} />
                    <Route path='/guides/help' element={<NeedHelpPage />} />
                    {/* ----------DETAILS ECOMMERCE---------- */}
                    <Route path='/details/:idProduct' element={<DetailProductPage />} />
                    <Route path='/detail/qr/:idProduct' element={<DetailProductByQrPage />} />
                    {/* ----------DETAILS ECOMMERCE---------- */}
                    <Route path='/search-result' element={<SearchResultPage />} />
                    {/* PROTECTED ROUTES */}
                    <Route element={<ProtectedRoute />}>
                        {/* ----------SIDEBAR CLIENT - PROFILE ---------- */}
                        <Route path='/panel-user/profile' element={<ProfilePage />} />
                        {/* ----------SIDEBAR CLIENT - ADDRESSES ---------- */}
                        <Route path='/panel-user/addresses/consult' element={<AddressesPage />} />
                        <Route path='/panel-user/addresses/create-address' element={<NewAddressPage />} />
                        <Route path='/panel-user/addresses/edit-address/:idAddress' element={<EditAddressPage />} />
                        {/* ----------SIDEBAR CLIENT - QUOTATIONS ---------- */}
                        <Route path='/panel-user/quotations/active-quotations' element={<ActiveQuotationsPage />} />
                        <Route path='/panel-user/quotations/history-quotations' element={<HistoryQuotationsPage />} />
                        {/* ----------SIDEBAR CLIENT - ORDERS ---------- */}
                        <Route path='/panel-user/orders/active-orders' element={<ActiveOrdersPage />} />
                        <Route path='/panel-user/orders/history-orders' element={<HistoryOrdersPage />} />
                        {/* ----------SIDEBAR CLIENT - FAVORITES ---------- */}
                        <Route path='/panel-user/favorites/consult' element={<FavoritesPage />} />
                        {/* ----------SIDEBAR CLIENT - DOCUMENTS REQUEST ---------- */}
                        <Route path='/panel-user/documents-request' element={<RequestDocumentsPage />} />
                        {/* ----------SIDEBAR CLIENT - ELECTRONIC INVOICES REQUEST ---------- */}
                        <Route path='/panel-user/electronic-invoices' element={<ElectronicInvoicesPage />} />
                        {/* ----------SIDEBAR TOP DRIVE - CONFIGURATION---------- */}
                        <Route path='/panel-top-drive-group/configuration/user-management' element={<ConfigurationTopDriveGroupPage />} />
                        {/* ----------SIDEBAR TOP DRIVE - PRODUCTS---------- */}
                        <Route path='/panel-top-drive-group/products/consult' element={<ProductsTopDriveGroupPage />} />
                        <Route path='/panel-top-drive-group/products/create-product' element={<CreateProductTopDriveGroupPage />} />
                        <Route path='/panel-top-drive-group/products/create-many-products' element={<CreateManyProductTopDriveGroupPage />} />
                        <Route path='/panel-top-drive-group/products/edit-product/:idProduct' element={<EditProductTopDriveGroupPage />} />
                        {/* ----------SIDEBAR TOP DRIVE - QUOTES---------- */}
                        <Route path='/panel-top-drive-group/quotes-clients/active-customer-quotations' element={<ActiveCustomerQuotationsPage />} />
                        <Route path='/panel-top-drive-group/quotes-clients/history-customer-quotations' element={<HistoryCustomerQuotationsPage />} />
                        {/* ----------SIDEBAR TOP DRIVE - CUSTOMER ORDERS---------- */}
                        <Route path='/panel-top-drive-group/customer-orders/active-customer-orders' element={<ActiveCustomerOrdersPage />} />
                        <Route path='/panel-top-drive-group/customer-orders/history-customer-orders' element={<HistoryCustomerOrdersPage />} />
                        {/* ----------SIDEBAR TOP DRIVE - CLIENTS---------- */}
                        <Route path='/panel-top-drive-group/customers/all-customers' element={<AllCustomersPage />} />
                        {/* ----------SIDEBAR TOP DRIVE - DOCUMENT REQUEST---------- */}
                        <Route path='/panel-top-drive-group/document-request' element={<DocumentRequestTopDriveGroupPage />} />
                        {/* ----------SIDEBAR TOP DRIVE - ELECTRONIC INVOICES---------- */}
                        <Route path='/panel-top-drive-group/electronic-invoices' element={<ElectronicInvoicesTopDriveGroupPage />} />
                    </Route>
                    {/* ERROR 404 */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;