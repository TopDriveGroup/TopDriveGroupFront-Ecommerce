//ELEMENTOS DEL COMPONENTE
import NavBarClient from '../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../components/Landing/Footer/Footer';
import SideBarPanelClient from '../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import styles from './styles.module.css';

function ElectronicInvoicesPage() {

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient/>
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Facturas electrónicas</h2>
                    <h3>Datos para mostrar en Facturación electrónica</h3>
                    <p>Botón para traer las facturas electrónicas de cada compra</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ElectronicInvoicesPage;