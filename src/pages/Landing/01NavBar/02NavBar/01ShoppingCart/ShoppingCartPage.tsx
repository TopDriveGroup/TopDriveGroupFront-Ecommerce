/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import jsCookie from 'js-cookie';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../../../redux/store';
import { getConsultTransactionsPending, postGouPaymentOrder } from '../../../../../redux/Landing/ordersSlice/actions';
import { getProfileUser } from '../../../../../redux/Landing/userSlice/actions';
import { getAddressClient } from '../../../../../redux/Landing/addressSlice/actions';
// ELEMENTOS DEL COMPONENTE
import { IClient } from '../../../../../types/client.types';
import { IAddress } from '../../../../../types/address.types';
import { IGouOrderRequest } from '../../../../../types/gouOrder.types';
import ModalNewAddress from '../../../../../components/PanelUser/Address/ModalNewAddress/ModalNewAddress';
import ModalLogin from '../../../../../components/Landing/01NavBar/04ModalLogin/ModalLogin';
import NavBar from '../../../../../components/Landing/01NavBar/NavBar';
import Footer from '../../../../../components/Landing/Footer/Footer';
import { formatNumber } from '../../../../../helpers/FormatNumber/FormatNumber';
import { ICartProduct } from '../../../../../types/cartProduct';
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from './styles.module.css';

interface IProductsOrder {
    products: ICartProduct[];
    total: number;
}

export interface AddressResponse {
    result: IAddress[];
}

function ShoppingCartPage() {
    const token = jsCookie.get('token') || '';

        // REDUX
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user) as IClient;
    const order = useSelector((state: RootState) => state.orders.orders);
    const ordersPending = useSelector((state: RootState) => state.orders.ordersPending);
    const address = useSelector((state: RootState) => state.address.address);
    // Verifica si address no es null antes de acceder a la propiedad result
    const addressResponse = address ? address as unknown as AddressResponse : null;

    useEffect(() => {
        if (token) {
            dispatch(getProfileUser(token));
            dispatch(getAddressClient(token));
        }
    }, [token, dispatch]);

    useEffect(() => {
        if (token) {
            dispatch(getConsultTransactionsPending(token));
        }
    }, [token, dispatch]);

    const userAgent = navigator.userAgent;
    const [productsOrder, setProductsOrder] = useState<IProductsOrder>({ products: [], total: 0 });

    useEffect(() => {
        const productsOrderString = localStorage.getItem('order');
        if (productsOrderString) {
            setProductsOrder(JSON.parse(productsOrderString));
        }
    }, []);

    const handleIncrement = (productId: string | undefined) => {
        if (!productId || !productsOrder.products) return;
        const updatedProducts = productsOrder.products.map(product => {
            if (product.productId === productId) {
                const newQuantity = product.quantity + 1;
                return {
                    ...product,
                    quantity: newQuantity,
                    subtotal: newQuantity * product.sellingPrice
                };
            }
            return product;
        });
        updateLocalStorage(updatedProducts);
    };
    
    const handleDecrement = (productId: string | undefined) => {
        if (!productId || !productsOrder.products) return;
        const updatedProducts = productsOrder.products.map(product => {
            if (product.productId === productId) {
                const newQuantity = Math.max(product.quantity - 1, 1); // Mínimo de 1
                return {
                    ...product,
                    quantity: newQuantity,
                    subtotal: newQuantity * product.sellingPrice
                };
            }
            return product;
        });
        updateLocalStorage(updatedProducts);
    };

    const updateLocalStorage = (updatedProducts: ICartProduct[]) => {
        const updatedOrder = { products: updatedProducts, total: calculateTotalPurchase(updatedProducts), client: 'idUser' };
        if (updatedProducts.length === 0) {
            localStorage.removeItem('order');
        } else {
            localStorage.setItem('order', JSON.stringify(updatedOrder));
        }
        setProductsOrder(updatedOrder);
    };

    const calculateTotalPurchase = (products: ICartProduct[]) => {
        return products.reduce((total, product) => total + (product.sellingPrice * product.quantity), 0);
    };

    const handleDeleteProduct = (productId: string | undefined) => {
        if (!productId) return;
        const updatedProducts = productsOrder.products.filter(product => product.productId !== productId);
        updateLocalStorage(updatedProducts);
    };

    //Selección de la dirección
    const [showAddress, setShowAddress] = useState<IAddress | null>(null);
    const [showNotAddress, setShowNotAddress] = useState(false);
    const handleAddressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedAddressId = event.target.value;
        const selectedAddress = addressResponse?.result.find(
            (addressItem: IAddress) => addressItem._id === selectedAddressId
        );
        setShowAddress(selectedAddress || null);
        setShowNotAddress(false);
    };

    //Abre el Modal para crear la dirección
    const [showCancelNewAddressModal, setShowCancelNewAddressModal] = useState(false);
    const onCloseNewAddressModal = () => {
        setShowCancelNewAddressModal(false);
    };

    //Abre el Modal para login
    const [showCancelLoginModal, setShowCancelLoginModal] = useState(false);
    const onCloseLoginModal = () => {
        setShowCancelLoginModal(false);
    };

    // Estado del modal de confirmación si el cliente tiene transacciones en estado pendiente
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleConfirmModalClose = (confirm: boolean) => {
        setShowConfirmModal(false);
        if (confirm) {
            onSubmit();
        }
    };

    //CREA LA ORDEN
    const onSubmit = async () => {
        if (!user) {
            setShowCancelLoginModal(true);
            return;
        }
        if (!showAddress) {
            setShowNotAddress(true);
            return;
        }

        const savedLanguage = localStorage.getItem('language');
        const name = user.name || user.corporateName || '';
        const surname = user.lastName || 'No aplica';
        const phone = typeof user.phone === 'number' ? user.phone : 0;
        const phoneAddress = user.phone || '';
        
        // Define el documentType basado en user.typeDocumentId
        let documentType: string;
        if (user.typeDocumentId === 'NIT') {
            documentType = 'NIT';
        } else if (user.typeDocumentId === 'Cedula de Ciudadania') {
            documentType = 'CC';
        } else {
            documentType = 'CE';
        }
        try {
            const formData: IGouOrderRequest = {
                locale: savedLanguage === 'es' ? 'es_CO' : 'en_US',
                buyer: {
                    document: user.documentId,
                    documentType: documentType,
                    name: name,
                    surname: surname,
                    company: 'Top Drive Group SAS',
                    email: user.email,
                    mobile: phone,
                    address: {
                        street: showAddress?.street || '',
                        city: showAddress?.city || '',
                        state: showAddress?.department || '',
                        postalCode: showAddress?.postalCode || '',
                        country: showAddress?.country || '',
                        phone: phoneAddress,
                    }
                },
                payment: {
                    reference: null,
                    description: 'Prueba de pago',
                    amount: {
                        currency: 'COP',
                        total: productsOrder.total,
                    },
                    items: productsOrder.products.map(product => ({
                        sku: product.sap,
                        name: product.description,
                        category: product.category,
                        qty: product.quantity,
                        price: product.sellingPrice,
                        tax: product.iva,
                    }))
                },
                userAgent: userAgent,
                skipResult: false,
                noBuyerFill: false,
                captureAddress: false,
            };
            await dispatch(postGouPaymentOrder(formData, token));
        } catch (error) {
            throw new Error('Error al enviar la orden');
        }
    };

    // Redirigir después de recibir la respuesta de la API
    useEffect(() => {
        if (order && order.processUrl) window.open(order.processUrl, '_blank', 'noopener,noreferrer');
    }, [order]);

    const handleSubmitClick = () => {
        if (ordersPending && ordersPending.length > 0) {
            setShowConfirmModal(true);
        } else {
            onSubmit();
        }
    };

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-4`}>
                <h3>Carrito de compras</h3>

                {productsOrder.products.length === 0 ? (
                    <p>No tienes productos agregados al carrito</p>
                ) : (
                    <div className={`${styles.container__Cart_Table} m-auto`}>
                        <div className={`${styles.container__Title_Columns} mb-2 d-flex`}>
                            <div className={`${styles.column__Product} text-center`}>Producto</div>
                            <div className={`${styles.column__Price} text-center`}>Precio</div>
                            <div className={`${styles.column__Quantity} text-center`}>Cantidad</div>
                            <div className={`${styles.column__Total} text-center`}>Total</div>
                            <div className={`${styles.column_Delete} text-center`}></div>
                        </div>

                        {Array.isArray(productsOrder.products) && productsOrder.products.map((product) => (
                            <div key={product.productId} className={`${styles.cart__Product} mb-4 mx-auto d-flex align-items-center justify-content-center`}>
                                <div className={`${styles.info__Data} d-flex`}>
                                    <div className={`${styles.container__Image} d-flex align-items-center justify-content-center overflow-hidden`}>
                                        <img src={product.mainImage} alt={`${product.description}`} className={`${styles.image}`} />
                                    </div>
                                    <div className={`${styles.container__Description} pt-3`}>
                                        <h6 className={`${styles.title__Product} m-0 overflow-hidden`}>{product.description}</h6>
                                        <h6 className={`${styles.brand__Product} m-0`}>{product.class} | {product.category} | {product.type}</h6>
                                    </div>
                                </div>

                                <div className={`${styles.info__Prices} d-flex`}>
                                    <div className={`${styles.info__Column_Price} d-flex align-items-center justify-content-center text-center`}>
                                        <p className={`${styles.price__Product} m-0`}>$ {formatNumber(product.sellingPrice)} und</p>
                                    </div>

                                    <div className={`${styles.info__Column_Quantity} d-flex align-items-center justify-content-center text-center`}>
                                        <div className={`${styles.container__Icon_Minus_Plus} d-flex align-items-center justify-content-center`} onClick={() => handleDecrement(product.productId)}>
                                            <HiMiniMinus className={styles.icon} />
                                        </div>
                                        <div className={`${styles.quantity__Product} d-flex align-items-center justify-content-center`}>{product.quantity}</div>
                                        <div className={`${styles.container__Icon_Minus_Plus} d-flex align-items-center justify-content-center`} onClick={() => handleIncrement(product.productId)}>
                                            <HiMiniPlus className={styles.icon} />
                                        </div>
                                    </div>

                                    <div className={`${styles.info__Column_Total} d-flex align-items-center justify-content-center text-center`}>
                                        <p className={`${styles.subtotal__Product} m-0`}>$ {formatNumber(product.subtotal)} und</p>
                                    </div>
                                    <div className={`${styles.info__Column_Delete} d-flex align-items-center justify-content-center text-center`} onClick={() => handleDeleteProduct(product.productId)}>
                                        <RiDeleteBin6Line className={`${styles.icon_Delete} `} />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {ordersPending && ordersPending.length > 0 ? (
                            <div className={`${styles.legend__Pending} mb-4 mx-auto p-3 text-center`}>
                                <p className='m-0'>En estos momentos tu(s) transacción(es): {ordersPending.map((order, index) => (<span key={index}> {order?.requestId}, </span>))}se encuentra pendiente de validación por la entidad financiera. Por favor espera unos minutos a que esta se resuelva. En caso de no recibir una respuesta, te recomendamos ponerte en contacto con nuestra línea de soporte/atención al cliente en (+57) 311 271 2405 o, alternativamente, puedes enviar un correo electrónico a <a href="mailto:info@topdrivegroup.com" className={`${styles.means__Contact} m-0 text-decoration-none`}>info@topdrivegroup.com</a>.</p>
                            </div>
                        ) : null}

                        <div className={`${styles.container__Price_And_Delivery} mb-4 d-flex align-items-start justify-content-center gap-2`}>
                            <div>
                                {!user ? (
                                    <div className={`${styles.container__Address} p-3 d-flex align-items-center justify-content-center`}>
                                        <p className='m-0'>Debes iniciar sesión</p>
                                    </div>
                                ) : (
                                    <div className={`${styles.container__Address} p-2`}>
                                        {addressResponse && Array.isArray(addressResponse.result) && addressResponse.result.length > 0 ? (
                                            <select
                                                className={`${styles.address} mb-2 p-2 d-flex flex-wrap align-items-center justify-content-start gap-2`}
                                                value={showAddress?._id || ''}
                                                onChange={handleAddressChange}
                                            >
                                                <option value="" disabled>Selecciona una dirección</option>
                                                {addressResponse.result.map((addressItem: IAddress) => (
                                                    <option key={addressItem._id} value={addressItem._id}>
                                                        {`${addressItem.country}, ${addressItem.department}, ${addressItem.city}, ${addressItem.postalCode || 'N/A'}, ${addressItem.street}`}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <p className='p-2'>No tienes direcciones registradas</p>
                                        )}
                                        <button className={`${styles.button__Create_Address} m-auto border-0 text-decoration-none`} onClick={() => { setShowCancelNewAddressModal(true) }} >Agregar dirección</button>
                                    </div>
                                )}
                            </div>

                            <Modal show={showCancelNewAddressModal} onHide={() => setShowCancelNewAddressModal(false)} size="lg" backdrop="static" keyboard={false} >
                                <Modal.Header closeButton onClick={() => setShowCancelNewAddressModal(false)}></Modal.Header>
                                <Modal.Body>
                                    <ModalNewAddress
                                        token={token}
                                        onCreateComplete={() => {
                                            onCloseNewAddressModal();
                                        }}
                                        />
                                </Modal.Body>
                            </Modal>

                            <div className={`${styles.container__Total_Order} d-flex align-items-start justify-content-start`}>
                                <div className={`${styles.container__Titles_Totals} `}>
                                    <div className={`${styles.title} px-2 d-flex align-items-center justify-content-start`}>Subtotal:</div>
                                    <div className={`${styles.title} px-2 d-flex align-items-center justify-content-start`}>Total descuentos:</div>
                                    <div className={`${styles.title} px-2 d-flex align-items-center justify-content-start`}>Totales:</div>
                                </div>
                                <div className={`${styles.container__Totals} `}>
                                    <div className={`${styles.data} px-2 d-flex align-items-center justify-content-end`}>${formatNumber(productsOrder.total)}</div>
                                    <div className={`${styles.data} px-2 d-flex align-items-center justify-content-end`}>$ </div>
                                    <div className={`${styles.data} px-2 d-flex align-items-center justify-content-end`}>${formatNumber(productsOrder.total)}</div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.container__Submit} mb-4 d-flex flex-column align-items-center justify-content-center position-relative`}>
                            <button
                                onClick={handleSubmitClick}
                                className={`${styles.button__Submit} border-0 rounded text-decoration-none`}
                            >
                                Proceder a pagar con <img src={'https://placetopay-static-prod-bucket.s3.us-east-2.amazonaws.com/goupagos-com-co/logos/logo_2.svg'} alt="Place To Pay" className={`${styles.image__Place_to_Pay} `} />
                            </button>
                            <a href="https://drive.google.com/file/d/1IZayUSGA6CMru3RhcRI0sjTNJSxOKsUR/view" target="blank" rel="noopener noreferrer" className={`${styles.link} m-2 text-decoration-none`}>¿Qué es GOU?</a>
                            {showNotAddress && (
                                <div className={`${styles.error__Message} position-absolute`}>
                                    <p>Por favor, selecciona una dirección antes de proceder con el pago.</p>
                                </div>
                            )}
                        </div>

                        <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmación</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Tienes transacciones en estado pendiente, ¿Deseas continuar?
                            </Modal.Body>
                            <Modal.Footer>
                                <div className='mx-auto d-flex gap-4'>
                                    <button className={`${styles.button__Cancel} border-0`} onClick={() => handleConfirmModalClose(false)}>Cancelar</button>
                                    <button className={`${styles.button__Submit} border-0`} onClick={() => handleConfirmModalClose(true)}>Sí, continuar</button>
                                </div>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showCancelLoginModal} onHide={onCloseLoginModal}  backdrop="static" keyboard={false}>
                            <Modal.Header closeButton onClick={onCloseLoginModal}>Debes iniciar sesión para continuar con el pago</Modal.Header>
                            <Modal.Body>
                                <ModalLogin
                                    onLoginComplete={onCloseLoginModal}
                                />
                            </Modal.Body>
                        </Modal>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ShoppingCartPage;