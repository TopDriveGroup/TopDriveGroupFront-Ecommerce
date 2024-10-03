

import NavBarTopDriveGroup from '../../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../../components/Landing/Footer/Footer';
import SideBarPanelTopDriveGroup from '../../../../components/PanelTopDriveGroup/SideBarTopDriveGroup/SideBarPanelTopDriveGroup';
import styles from './styles.module.css';

function HistoryCustomerOrdersPage() {
    
    return (
        <div>
            <NavBarTopDriveGroup />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelTopDriveGroup />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Pedidos históricos</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HistoryCustomerOrdersPage;