import NavBar from '../../../../components/LandingEcommerce/01NavBar/NavBar';
import Footer from '../../../../components/LandingEcommerce/Footer/Footer';
import SideBarPanelClient from '../../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import styles from './styles.module.css';

function ActiveQuotationsPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Cotizaciones activas</h2>
                    <p>Registros de todas las cotizaciones enviadas a Top Drive que esten pendientes</p>
                    <p>Posibilidad de editar la que se seleccione y eliminarla</p>
                    <p>Las cotizaciones se van llenando de productos cuando se vea el detalle del producto, crear un botón de "Agregar para cotizar" al lado del "Agregar al carrito"</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ActiveQuotationsPage;