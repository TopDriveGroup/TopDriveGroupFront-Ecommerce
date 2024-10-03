//ELEMENTOS DEL COMPONENTE
import NavBarTopDriveGroup from '../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import SideBarPanelTopDriveGroup from '../../../components/PanelTopDriveGroup/SideBarTopDriveGroup/SideBarPanelTopDriveGroup';
import Footer from '../../../components/Landing/Footer/Footer';
import styles from './styles.module.css';

function ConfigurationTopDriveGroupPage() {

    return (
        <div>
            <NavBarTopDriveGroup />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelTopDriveGroup />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Configuración</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ConfigurationTopDriveGroupPage;