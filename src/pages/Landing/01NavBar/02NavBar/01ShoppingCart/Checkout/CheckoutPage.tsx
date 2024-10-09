import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsCookie from 'js-cookie';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../../redux/store';
import { getConsultTransactionId } from '../../../../../../redux/Landing/ordersSlice/actions';
// ELEMENTOS DEL COMPONENTE
import NavBar from '../../../../../../components/Landing/01NavBar/NavBar';
import Footer from '../../../../../../components/Landing/Footer/Footer';
import styles from './styles.module.css';

function CheckoutPage() {
    const { transactionId } = useParams<{ transactionId: string }>();
    const token = jsCookie.get('token') || '';
    const dispatch: AppDispatch = useDispatch();
    const order = useSelector((state: RootState) => state.orders.orders);
    
    useEffect(() => {
        if (transactionId && token) {
            dispatch(getConsultTransactionId(transactionId, token));
        }
    }, [transactionId, token, dispatch]);
    
    if (!order || !order.result) return <p>Cargando...</p>
    
    const { result } = order;

    const status = result.status.status;
    const isApproved = status === 'APPROVED';
    const isRejected = status === 'REJECTED';
    const isPending = status === 'PENDING';

    if (isApproved) localStorage.clear();
    
    return (
        <div>
            <NavBar />
            <div className={`${styles.container} `}>
                <h1>Payment Status</h1>
                {isApproved && (
                    <div>
                        <h2>Transaction Details</h2>
                        <p><strong>Request ID:</strong> {result.requestId}</p>
                        <p><strong>Status:</strong> {result.status.status}</p>
                        <p><strong>Message:</strong> {result.status.message}</p>
                        <p><strong>Date:</strong> {result.status.date ? new Date(result.status.date).toLocaleString() : 'N/A'}</p>
                        <p><strong>Process URL:</strong> {result.processUrl || 'N/A'}</p>
                        {/* Detalles del comprador */}
                        <h3>Buyer Details</h3>
                        <p><strong>Document:</strong> {result.request.buyer.document}</p>
                        <p><strong>Document Type:</strong> {result.request.buyer.documentType}</p>
                        <p><strong>Name:</strong> {result.request.buyer.name}</p>
                        <p><strong>Surname:</strong> {result.request.buyer.surname}</p>
                        <p><strong>Email:</strong> {result.request.buyer.email}</p>
                        <p><strong>Mobile:</strong> {result.request.buyer.mobile}</p>
                        <p><strong>Company:</strong> {result.request.buyer.company}</p>
                        <p><strong>Street:</strong> {result.request.buyer.address.street}</p>
                        <p><strong>City:</strong> {result.request.buyer.address.city}</p>
                        <p><strong>State:</strong> {result.request.buyer.address.state}</p>
                        <p><strong>Postal Code:</strong> {result.request.buyer.address.postalCode}</p>
                        <p><strong>Phone:</strong> {result.request.buyer.address.phone}</p>
                        {/* Detalles del pagador */}
                        <h3>Payer Details</h3>
                        <p><strong>Document:</strong> {result.request.payer.document}</p>
                        <p><strong>Document Type:</strong> {result.request.payer.documentType}</p>
                        <p><strong>Name:</strong> {result.request.payer.name}</p>
                        <p><strong>Surname:</strong> {result.request.payer.surname}</p>
                        <p><strong>Email:</strong> {result.request.payer.email}</p>
                        <p><strong>Mobile:</strong> {result.request.payer.mobile}</p>
                        {/* Detalles del pago */}
                        <h3>Payment Details</h3>
                        <p><strong>Reference:</strong> {result.request.payment.reference}</p>
                        <p><strong>Description:</strong> {result.request.payment.description}</p>
                        <p><strong>Currency:</strong> {result.request.payment.amount.currency}</p>
                        <p><strong>Total:</strong> {result.request.payment.amount.total}</p>
                        <p><strong>Allow Partial:</strong> {result.request.payment.allowPartial ? 'Yes' : 'No'}</p>
                        {/* Mapeo de items de pago */}
                        <h3>Payment Items</h3>
                        <ul>
                            {result.request.payment.items.map((item, index) => (
                                <li key={index}>
                                    <p><strong>SKU:</strong> {item.sku}</p>
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Category:</strong> {item.category}</p>
                                    <p><strong>Quantity:</strong> {item.qty}</p>
                                    <p><strong>Price:</strong> {item.price}</p>
                                    <p><strong>Tax:</strong> {item.tax}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {isRejected && (
                    <div>
                        <h2>Transaction Rejected</h2>
                        <p><strong>Request ID:</strong> {result.requestId}</p>
                        <p><strong>Status:</strong> {result.status.status}</p>
                        <p><strong>Message:</strong> {result.status.message}</p>
                        <p><strong>Date:</strong> {result.status.date ? new Date(result.status.date).toLocaleString() : 'N/A'}</p>
                        <p><strong>Process URL:</strong> {result.processUrl || 'N/A'}</p>
                        {/* Detalles del comprador */}
                        <h3>Buyer Details</h3>
                        <p><strong>Document:</strong> {result.request.buyer.document}</p>
                        <p><strong>Document Type:</strong> {result.request.buyer.documentType}</p>
                        <p><strong>Name:</strong> {result.request.buyer.name}</p>
                        <p><strong>Surname:</strong> {result.request.buyer.surname}</p>
                        <p><strong>Email:</strong> {result.request.buyer.email}</p>
                        <p><strong>Mobile:</strong> {result.request.buyer.mobile}</p>
                        <p><strong>Company:</strong> {result.request.buyer.company}</p>
                        <p><strong>Street:</strong> {result.request.buyer.address.street}</p>
                        <p><strong>City:</strong> {result.request.buyer.address.city}</p>
                        <p><strong>State:</strong> {result.request.buyer.address.state}</p>
                        <p><strong>Postal Code:</strong> {result.request.buyer.address.postalCode}</p>
                        <p><strong>Phone:</strong> {result.request.buyer.address.phone}</p>
                        {/* Detalles del pagador */}
                        <h3>Payer Details</h3>
                        <p>Datos en null</p>
                        {/* Detalles del pago */}
                        <h3>Payment Details</h3>
                        <p><strong>Reference:</strong> {result.request.payment.reference}</p>
                        <p><strong>Description:</strong> {result.request.payment.description}</p>
                        <p><strong>Currency:</strong> {result.request.payment.amount.currency}</p>
                        <p><strong>Total:</strong> {result.request.payment.amount.total}</p>
                        <p><strong>Allow Partial:</strong> {result.request.payment.allowPartial ? 'Yes' : 'No'}</p>
                        {/* Mapeo de items de pago */}
                        <h3>Payment Items</h3>
                        <ul>
                            {result.request.payment.items.map((item, index) => (
                                <li key={index}>
                                    <p><strong>SKU:</strong> {item.sku}</p>
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Category:</strong> {item.category}</p>
                                    <p><strong>Quantity:</strong> {item.qty}</p>
                                    <p><strong>Price:</strong> {item.price}</p>
                                    <p><strong>Tax:</strong> {item.tax}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {isPending && (
                    <div>
                        <h2>Transaction Pending</h2>
                        <p><strong>Request ID:</strong> {result.requestId}</p>
                        <p><strong>Status:</strong> {result.status.status}</p>
                        <p><strong>Reason:</strong> {result.status.reason}</p>
                        <p><strong>Date:</strong> {result.status.date ? new Date(result.status.date).toLocaleString() : 'N/A'}</p>
                        <p><strong>Process URL:</strong> {result.processUrl || 'N/A'}</p>
                        {/* Detalles del comprador */}
                        <h3>Buyer Details</h3>
                        <p><strong>Document:</strong> {result.request.buyer.document}</p>
                        <p><strong>Document Type:</strong> {result.request.buyer.documentType}</p>
                        <p><strong>Name:</strong> {result.request.buyer.name}</p>
                        <p><strong>Surname:</strong> {result.request.buyer.surname}</p>
                        <p><strong>Email:</strong> {result.request.buyer.email}</p>
                        <p><strong>Mobile:</strong> {result.request.buyer.mobile}</p>
                        <p><strong>Company:</strong> {result.request.buyer.company}</p>
                        <p><strong>Street:</strong> {result.request.buyer.address.street}</p>
                        <p><strong>City:</strong> {result.request.buyer.address.city}</p>
                        <p><strong>State:</strong> {result.request.buyer.address.state}</p>
                        <p><strong>Postal Code:</strong> {result.request.buyer.address.postalCode}</p>
                        <p><strong>Phone:</strong> {result.request.buyer.address.phone}</p>

                        {/* Detalles del pago */}
                        <h3>Payment Details</h3>
                        <p><strong>Reference:</strong> {result.request.payment.reference}</p>
                        <p><strong>Description:</strong> {result.request.payment.description}</p>
                        <p><strong>Currency:</strong> {result.request.payment.amount.currency}</p>
                        <p><strong>Total:</strong> {result.request.payment.amount.total}</p>
                        <p><strong>Allow Partial:</strong> {result.request.payment.allowPartial ? 'Yes' : 'No'}</p>
                        {/* Mapeo de items de pago */}
                        <h3>Payment Items</h3>
                        <ul>
                            {result.request.payment.items.map((item, index) => (
                                <li key={index}>
                                    <p><strong>SKU:</strong> {item.sku}</p>
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Category:</strong> {item.category}</p>
                                    <p><strong>Quantity:</strong> {item.qty}</p>
                                    <p><strong>Price:</strong> {item.price}</p>
                                    <p><strong>Tax:</strong> {item.tax}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default CheckoutPage;
