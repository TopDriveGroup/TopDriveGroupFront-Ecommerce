//ELEMENTOS DEL COMPONENTE
import SideBarPanelClient from '../PanelUser/SideBarPanelClient/SideBarPanelClient';
import SideBarPanelTopDriveGroup from '../PanelTopDriveGroup/SideBarTopDriveGroup/SideBarPanelTopDriveGroup';
import styles from './styles.module.css';

interface SideBarProps {
    typeRole: string;
}

function SideBar({typeRole}: SideBarProps) {

    return (
        <div className={`${styles.container} `}>
            <div className={`${styles.container__Component} `}>
                {typeRole === 'Superadmin' && (
                    <SideBarPanelClient />
                )}
                {((typeRole === 'CEO') || (typeRole === 'CTO') || (typeRole === 'Director') || (typeRole === 'Programador') || (typeRole === 'Validador') || (typeRole === 'Contador') || (typeRole === 'Auxiliar de contabilidad')) && (
                    <SideBarPanelTopDriveGroup />
                )}
            </div>
        </div>
    );
}

export default SideBar;