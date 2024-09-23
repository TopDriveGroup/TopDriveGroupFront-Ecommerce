//ELEMENTOS DEL COMPONENTE
import NavBarClient from '../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../components/LandingEcommerce/Footer/Footer';
import SideBarPanelClient from '../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import styles from './styles.module.css';

function RequestDocumentsPage() {

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient/>
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Solicitud de documentos</h2>
                    <h3>Datos para mostrar en Solicitud de documentos</h3>
                    <p>Sección para solicitudes a Milena</p>
                    <p>Selección de documento a solicitar</p>
                    <p>Confirmación de correo electrónico donde se recibirá el documento</p>
                    <p>Solicitudes pendientes</p>
                    <p>Histório de solicitudes</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RequestDocumentsPage;