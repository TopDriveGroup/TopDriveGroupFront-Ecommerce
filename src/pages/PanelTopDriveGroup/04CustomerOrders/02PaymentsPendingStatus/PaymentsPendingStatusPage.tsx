/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import jsCookie from 'js-cookie';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../../../redux/store';
import { getPaymentsPendingStatus } from '../../../../redux/Landing/ordersSlice/actions';
import { memoizedPaymentsPending, memoizedLoading } from '../../../../redux/Reselect/orders/memoizedPaymentsPendings';
// COMPONENTES
import NavBarTopDriveGroup from '../../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../../components/Landing/Footer/Footer';
import SideBarPanelTopDriveGroup from '../../../../components/PanelTopDriveGroup/SideBarTopDriveGroup/SideBarPanelTopDriveGroup';
import styles from './styles.module.css';

function PaymentsPendingStatusPage() {
    const token = jsCookie.get("token") || '';

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const paymentsPending = useSelector(memoizedPaymentsPending);  // Uso del selector memoizado
    const loading = useSelector(memoizedLoading);  // Uso del selector memoizado

    useEffect(() => {
        if (token) {
            dispatch(getPaymentsPendingStatus(token));
        }
    }, [token]);

    return (
        <div>
            <NavBarTopDriveGroup />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelTopDriveGroup />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Pagos en estado pendiente</h2>
                    
                    {loading ? (
                        <p>Cargando pagos pendientes...</p> 
                    ) : (
                        Array.isArray(paymentsPending) && paymentsPending.length > 0 ? (
                        paymentsPending.map((payment, index) => (
                            <div key={payment.requestId || index} className={`${styles.address} p-2`}>
                            <div><strong>Estado:</strong> {payment.result.status.status}</div>
                            <div><strong>Mensaje:</strong> {payment.result.status.message}</div>
                            <div><strong>Fecha:</strong> {new Date(payment.result.status.date).toLocaleString()}</div>

                            <h4>Información del comprador</h4>
                            <div><strong>Documento:</strong> {payment.result.request.buyer.document}</div>
                            <div><strong>Tipo de documento:</strong> {payment.result.request.buyer.documentType}</div>
                            <div><strong>Nombre:</strong> {payment.result.request.buyer.name} {payment.result.request.buyer.surname}</div>
                            <div><strong>Email:</strong> {payment.result.request.buyer.email}</div>
                            <div><strong>Móvil:</strong> {payment.result.request.buyer.mobile}</div>

                            <h4>Dirección</h4>
                            <div><strong>Calle:</strong> {payment.result.request.buyer.address.street}</div>
                            <div><strong>Ciudad:</strong> {payment.result.request.buyer.address.city}</div>
                            <div><strong>Estado:</strong> {payment.result.request.buyer.address.state}</div>
                            <div><strong>Código Postal:</strong> {payment.result.request.buyer.address.postalCode}</div>
                            <div><strong>Teléfono:</strong> {payment.result.request.buyer.address.phone}</div>
                            </div>
                        ))
                        ) : (
                            <p>No hay pagos pendientes.</p>
                        )
                    )}
                </div>
            </div>
            <Footer />
        </div>
  );
}

export default PaymentsPendingStatusPage;