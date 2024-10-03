// ELEMENTOS DEL COMPONENTE
import NavBarClient from '../../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../../components/Landing/Footer/Footer';
import SideBarPanelClient from '../../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import styles from './styles.module.css';

function HistoryOrdersPage() {

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Pedidos históricos</h2>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HistoryOrdersPage;











/*
                    <h3>Datos para mostrar en los pedidos activos</h3>
                    <p>Sale el resumen con todos los productos de cada pedido</p>
                    <p>Se le asigna un número de pedido a cada uno</p>
                    <p>Sale el valor total</p>
                    <p>Sale la fecha</p>
                    <p>Sale el estado del pedido</p>
                    <div className='m-4 p-4 border rounded'>
                        <p>Botón "Ver detalles del pedido"</p>
                        <p>Sale la dirección, forma de pago, resumen (Subtotal, descuentos, costo del envío, total, etc)</p>
                        <p>Sale una línea de procesos concluidos y pendientes</p>
                        <p>Fecha aproximada de entrega</p>
                        <p>Opción para rastreo en transportadora</p>
                        <p>Número de rastreo</p>
                        <p>Relación de cada producto, sus cantidades y respecivos precios junto con su vr total</p>
                    </div>

*/