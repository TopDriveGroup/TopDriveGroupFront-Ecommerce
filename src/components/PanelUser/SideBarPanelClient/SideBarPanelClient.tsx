/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
// REDUX
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../redux/store';
import { logoutUser } from '../../../redux/Landing/userSlice/actions';
// ELEMENTOS DEL COMPONENTE
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css';

function SideBarPanelClient() {
    const location = useLocation();
    const dispatch: AppDispatch = useDispatch();

    // Leer el estado inicial de los submenús desde localStorage
    const getInitialState = (key: string, defaultValue: boolean) => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    };

    const [isAddressSubMenuOpen, setAddressSubMenuOpen] = useState(() => getInitialState('addressSubMenuOpen', false));
    const [isQuotesSubMenuOpen, setQuotesSubMenuOpen] = useState(() => getInitialState('quotesSubMenuOpen', false));
    const [isOrdersSubMenuOpen, setOrdersSubMenuOpen] = useState(() => getInitialState('ordersSubMenuOpen', false));
    const [isFavoritesSubMenuOpen, setFavoritesSubMenuOpen] = useState(() => getInitialState('favoritesSubMenuOpen', false));

    // SUBMENU DE DIRECCIONES
    const toggleAddressSubMenuOpen = () => {
        const newState = !isAddressSubMenuOpen;
        setAddressSubMenuOpen(newState);
        localStorage.setItem('addressSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE COTIZACIONES
    const toggleQuotesSubMenuOpen = () => {
        const newState = !isQuotesSubMenuOpen;
        setQuotesSubMenuOpen(newState);
        localStorage.setItem('quotesSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE ORDENES
    const toggleOrdersSubMenuOpen = () => {
        const newState = !isOrdersSubMenuOpen;
        setOrdersSubMenuOpen(newState);
        localStorage.setItem('ordersSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE FAVORITOS
    const toggleFavoritesSubMenuOpen = () => {
        const newState = !isFavoritesSubMenuOpen;
        setFavoritesSubMenuOpen(newState);
        localStorage.setItem('favoritesSubMenuOpen', JSON.stringify(newState));
    };

    // RUTAS CON PARAMS
    const matchAddress = useMatch('/panel-user/addresses/:idAddress');

    const logout = async () => {
        try {
            dispatch(logoutUser());
        } catch (error) {
            throw new Error('Error al hacer el cierre de sesión');
        }
    };

    return (
        <div className={`${styles.container} overflow-y-auto`}>
            <div className={`${styles.container__Panel_User} d-flex flex-column`}>
                <Link
                    to='/panel-user/profile'
                    className={`${styles.link__Section_Panel} ${(location.pathname === '/panel-user/profile') ? styles.active : ''} text-decoration-none`}
                >
                    Perfil
                </Link>

                <div onClick={toggleAddressSubMenuOpen} className={`${styles.link__Section_Panel} ${(location.pathname === '/panel-user/addresses/consult' || location.pathname === '/panel-user/addresses/create-address' || matchAddress) ? styles.active : ''}  d-flex align-items-center justify-content-between text-decoration-none`}>
                    Direcciones {isAddressSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  
                </div>
                {isAddressSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/panel-user/addresses/consult'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/panel-user/addresses/consult' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Consultar direcciones
                        </Link>
                        <Link
                            to='/panel-user/addresses/create-address'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/panel-user/addresses/create-address' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Crear direcciones
                        </Link>
                    </div>
                )}

                <div onClick={toggleQuotesSubMenuOpen} className={`${styles.link__Section_Panel} ${(location.pathname === '/panel-user/quotations/active-quotations' || location.pathname === '/panel-user/quotations/history-quotations') ? styles.active : ''}  d-flex align-items-center justify-content-between text-decoration-none`}>
                    Cotizaciones {isQuotesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  
                </div>
                {isQuotesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/panel-user/quotations/active-quotations'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/panel-user/quotations/active-quotations' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Cotizaciones activas
                        </Link>
                        <Link
                            to='/panel-user/quotations/history-quotations'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/panel-user/quotations/history-quotations' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Cotizaciones históricas
                        </Link>
                    </div>
                )}

                <div onClick={toggleOrdersSubMenuOpen} className={`${styles.link__Section_Panel} ${(location.pathname === '/panel-user/orders/active-orders' || location.pathname === '/panel-user/orders/history-orders') ? styles.active : ''}  d-flex align-items-center justify-content-between text-decoration-none`}>
                    Pedidos {isOrdersSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  
                </div>
                {isOrdersSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/panel-user/orders/active-orders'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/panel-user/orders/active-orders' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Pedidos activos
                        </Link>
                        <Link
                            to='/panel-user/orders/history-orders'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/panel-user/orders/history-orders' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Pedidos históricas
                        </Link>
                    </div>
                )}

                <div onClick={toggleFavoritesSubMenuOpen} className={`${styles.link__Section_Panel} ${(location.pathname === '/panel-user/favorites/consult') ? styles.active : ''}  d-flex align-items-center justify-content-between text-decoration-none`}>
                    Favoritos {isFavoritesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  
                </div>
                {isFavoritesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/panel-user/favorites/consult'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/panel-user/favorites/consult' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Consultar favoritos
                        </Link>
                    </div>
                )}

                <Link
                    to='/panel-user/documents-request'
                    className={`${styles.link__Section_Panel} ${location.pathname === '/panel-user/documents-request' ? styles.active : ''} text-decoration-none`}
                >
                    Solicitud de documentos
                </Link>
                <Link
                    to='/panel-user/electronic-invoices'
                    className={`${styles.link__Section_Panel} ${location.pathname === '/panel-user/electronic-invoices' ? styles.active : ''} text-decoration-none`}
                >
                    Facturas electrónicas
                </Link>
                <div className={styles.logout} onClick={logout}>
                    Cerrar sesión
                </div>
            </div>
        </div>
    );
}

export default SideBarPanelClient;