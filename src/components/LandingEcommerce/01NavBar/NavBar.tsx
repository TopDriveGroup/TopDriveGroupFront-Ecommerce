/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import jsCookie from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getProfileUser } from '../../../redux/LandingEcommerce/userSlice/actions';
import { logoutUser } from '../../../redux/LandingEcommerce/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import SearchBar from '../../../components/LandingEcommerce/01NavBar/02SearchBar/SearchBar';
import TypesFilters from '../../../components/LandingEcommerce/01NavBar/03TypesFilters/TypesFilters';
import LogoTopDrive from '../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { IoCartOutline, IoClose } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import styles from './styles.module.css';

interface DecodedToken {
    typeRole: string;
}

function NavBarEcommerce() {
    const token = jsCookie.get("token");
    const location = useLocation();
    const { t, i18n } = useTranslation('navBar');

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    const [typeRole, setTypeRole] = useState('');

    useEffect(() => {
        if (token) {
            dispatch(getProfileUser(token));
            let decodedToken: DecodedToken | null = null;
            if (token) {
                decodedToken = jwtDecode<DecodedToken>(token);
                setTypeRole(decodedToken.typeRole);
            }
        }
    }, [token, dispatch]);

    const [countCartProducts, setCountCartProducts] = useState<number>(0);
    const [showModal, setShowModal] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const languageMenuRef = useRef<HTMLDivElement>(null);
    const [languageMenuVisible, setLanguageMenuVisible] = useState(false);

    useEffect(() => {
        const updateCartCount = () => {
            const cartProductsString = localStorage.getItem('order');
            if (cartProductsString) {
                try {
                    const cartProducts = JSON.parse(cartProductsString);
                    setCountCartProducts(cartProducts.products.length);
                } catch (error) {
                    console.error('Error parsing cart products from localStorage', error);
                    setCountCartProducts(0);
                }
            } else {
                setCountCartProducts(0);
            }
        };
        updateCartCount();
        window.addEventListener('storage', updateCartCount);
        return () => {
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleLanguageMenu = () => {
        setLanguageMenuVisible(!languageMenuVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
                setLanguageMenuVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, languageMenuRef]);

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        setLanguageMenuVisible(false);
    };

    const logout = async () => {
        try {
            dispatch(logoutUser());
        } catch (error) {
            throw new Error('Error al hacer el cierre de sesión');
        }
    };

    return (
        <div className={`${styles.container} position-fixed top-0`}>
            <div className={`${styles.container__Pre_NavBar} m-auto`}>
                <div className={`${styles.pre__NavBar} d-flex align-items-center justify-content-between`}>
                    <div className={`${styles.container__Language_Phone_Lines} d-flex align-items-center justify-content-between`}>
                        <div className={`${styles.container__Language} px-2 d-flex align-items-center justify-content-center position-relative`} onClick={toggleLanguageMenu}>
                            <div className={`${styles.container__Icon_Language} d-flex align-items-center justify-content-center text-center overflow-hidden`} >
                                <BiWorld />
                            </div>
                            <div className={`${styles.text__Language} mx-1 p-0`}>
                                {t('navBar.language')}
                            </div>
                            {languageMenuVisible && (
                                <div ref={languageMenuRef} className={`${styles.dropdown__Language} p-3 d-flex flex-column position-absolute overflow-hidden`}>
                                    <div onClick={() => handleLanguageChange('en')} className={`${styles.language__Button} ${i18n.language === 'en' ? styles.language__Selected : ''}`}>English</div>
                                    <div onClick={() => handleLanguageChange('es')} className={`${styles.language__Button} ${i18n.language === 'es' ? styles.language__Selected : ''}`}>Español</div>
                                </div>
                            )}
                        </div>

                        <div className={`${styles.container__Phone_Lines} px-3 d-flex align-items-center justify-content-center gap-2`}>
                            <FaPhone />
                            <span>{t('navBar.national')} +57 (601) 8966199</span>
                        </div>

                        <Link to="https://topdrivegroup.com/" target="blank" rel="noopener noreferrer" className={`${styles.home} p-3 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBar.home')}
                        </Link>
                    </div>

                    <div className={`${styles.container__Links_PreNavBar} d-flex`}>
                        <Link to="https://micrositios.goupagos.com.co/top-drive-ma" target="blank" rel="noopener noreferrer" className={`${styles.online__Payments} ${location.pathname === 'https://micrositios.goupagos.com.co/top-drive-ma' ? styles.active : ''} p-3 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBar.online__Payments')} {/* Pagos en línea */}
                        </Link>
                        <Link to="/portfolio" className={`${styles.portfolio} ${location.pathname === '/portfolio' ? styles.active : ''} p-2 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBar.portfolio')} {/* Portafolio */}
                        </Link>
                        <Link to="/ecommerce/quotation" className={`${styles.quotation} ${location.pathname === '/ecommerce/quotation' ? styles.active : ''} p-2 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBar.quotations')} {/* Cotiza */}
                        </Link>
                        <Link to="/ecommerce/contact-us" className={`${styles.contactUs} ${location.pathname === '/ecommerce/contact-us' ? styles.active : ''} px-2 d-flex align-items-center justify-content-end text-decoration-none`} >
                            {t('navBar.contactUs')} {/* Contacto */}
                        </Link>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/ecommerce" className={`${styles.container__Logo} d-flex align-items-center justify-content-center`} >
                        <img src={LogoTopDrive} alt="Logo Top Drive Group" className={`${styles.logo} m-auto`} loading="lazy"  />
                    </Link>

                    <div className={`${styles.container__Menu} d-flex align-items-center justify-content-center`} onClick={toggleModal}>
                        <LuMenu className={styles.icon__Menu} /> <span className={styles.text__Menu}>{t('navBar.menu')}</span>
                    </div>

                    {showModal && (
                        <div className={`${styles.container__Modal} position-absolute top-0`} >
                            <div className={styles.modal}>
                                <div className={`${styles.container__Logo_Close} p-2 d-flex align-items-center justify-content-between`}>
                                    <div className={`${styles.container__Logo} d-flex align-items-center justify-content-center`}>
                                        <img src={LogoTopDrive} alt="Logo Top Drive Group" className={`${styles.logo} m-auto`} loading="lazy" />
                                    </div>
                                    <div onClick={closeModal}><IoClose className={styles.icon__Close_Modal} /></div>
                                </div>
                                <TypesFilters closeModal={closeModal} />
                            </div>
                        </div>
                    )}
                    
                    <SearchBar />

                    <div className={`${styles.links__Nemu_Interactions} d-flex`}>
                        <Link to="/ecommerce/shopping-cart" className={`${styles.shopping__Cart} px-2 d-flex align-items-center justify-content-center position-relative text-decoration-none`} >
                            <div className={`${styles.count__Item_Cart} d-flex align-items-center justify-content-center position-absolute`}><p className={`${styles.count__Products_Cart} position-absolute`}>{countCartProducts}</p></div>
                            <IoCartOutline className={styles.icon__Cart}/>
                        </Link>
                        <Link to="/ecommerce/favorites" className={`${styles.favorites} px-2 d-flex align-items-center justify-content-center position-relative text-decoration-none`} aria-label="favoritos" >
                            <IoMdHeartEmpty className={styles.icon__Favorite}/>
                        </Link>

                        {isAuthenticated ? (
                            <div className='d-flex'>
                                {typeRole === 'Superadmin' && (
                                    <Link to="/panel-user/profile" className={`${styles.panel} px-2 d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} >
                                        <AiOutlineUser className={styles.icon__User_Panel} />
                                        {t('navBar.panel')} {/* PANEL DE CLIENTE*/}
                                    </Link>
                                )}
                                {((typeRole === 'CEO') || (typeRole === 'CTO') || (typeRole === 'Director') || (typeRole === 'Programador') || (typeRole === 'Validador') || (typeRole === 'Contador') || (typeRole === 'Auxiliar de contabilidad')) && (
                                    <Link to="/panel-top-drive-group/configuration/user-management" className={`${styles.panel} ${location.pathname === '/panel-top-drive-group/configuration' ? styles.active : ''} d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} >
                                        <AiOutlineUser className={styles.icon__User_Panel} />
                                        {t('navBar.panel')} {/* PANEL COLABORADOR TOP DRIVE */}
                                    </Link>
                                )}
                                <div className={`${styles.logout} px-2 d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} onClick={logout} >
                                    {t('navBar.exit')} {/* SALIR */}
                                </div>
                            </div>
                        ): (
                            <div className='d-flex'>
                                {!isAuthenticated && (
                                    <Link to="/register" className={`${styles.register} px-2 d-flex align-items-center justify-content-center text-center text-decoration-none`} >
                                        {t('navBar.signUp')} {/* REGISTRATE */}
                                    </Link>
                                )}
                                {!isAuthenticated && (
                                    <Link to="/login" className={`${styles.login} px-2 d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} >
                                        <AiOutlineUser className={styles.icon__User} />
                                        {t('navBar.signIn')} {/* LOGIN */}
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBarEcommerce;