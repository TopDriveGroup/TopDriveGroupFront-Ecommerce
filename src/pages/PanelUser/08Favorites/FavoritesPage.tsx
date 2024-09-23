//ELEMENTOS DEL COMPONENTE
import NavBarClient from '../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../components/LandingEcommerce/Footer/Footer';
import SideBarPanelClient from '../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import styles from './styles.module.css';

function FavoritesPage() {

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient/>
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Favoritos</h2>
                    <h3>Datos para mostrar en favoritos</h3>
                    <p>Relación de cada producto agregado a favoritos</p>
                    <p>Cada favorito se elimina cuando se compran</p>
                    <p>Botón de "Agregar al carrito"</p>
                    <p>Botón de "Contador"</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FavoritesPage;