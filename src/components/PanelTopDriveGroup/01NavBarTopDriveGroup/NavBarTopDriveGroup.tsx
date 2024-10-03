/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../redux/store';
import { logoutUser } from '../../../redux/Landing/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import SearchBar from '../../Landing/01NavBar/02SearchBar/SearchBar';
import TypesFilters from '../../Landing/01NavBar/03TypesFilters/TypesFilters';
import LogoTopDrive from '../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { IoClose, IoCartOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import styles from './styles.module.css';

function NavBarClient() {
    const location = useLocation();
    const { t, i18n } = useTranslation('navBarEcommerce');
    const dispatch: AppDispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const languageMenuRef = useRef<HTMLDivElement>(null);
    const [languageMenuVisible, setLanguageMenuVisible] = useState(false);

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

    const [countCartProducts, setCountCartProducts] = useState<number>(0);
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
        updateCartCount();                                          // Initialize cart count on component mount
        window.addEventListener('storage', updateCartCount);        // Update cart count when localStorage changes
        return () => {
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);

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
                                {t('navBarEcommerce.language')}
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
                            <span>{t('navBarEcommerce.national')} +57 (601) 8966199</span>
                        </div>

                        <Link to="/" className={`${styles.home} p-3 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBarEcommerce.home')}
                        </Link>
                    </div>

                    <div className={`${styles.container__Links_PreNavBar} d-flex`}>
                        <Link to="https://micrositios.goupagos.com.co/top-drive-ma" target="blank" rel="noopener noreferrer" className={`${styles.online__Payments} p-3 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBarEcommerce.online__Payments')} {/* Pagos en línea */}
                        </Link>
                        <Link to="/portfolio" className={`${styles.portfolio} ${location.pathname === '/portfolio' ? styles.active : ''} p-2 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBarEcommerce.portfolio')} {/* Portafolio */}
                        </Link>
                        <Link to="/ecommerce/quotation" className={`${styles.quotation} ${location.pathname === '/ecommerce/quotation' ? styles.active : ''} p-2 d-flex align-items-center justify-content-center text-decoration-none`} >
                            {t('navBarEcommerce.quotations')} {/* Cotiza */}
                        </Link>
                        <Link to="/ecommerce/contact-us" className={`${styles.contactUs} ${location.pathname === '/ecommerce/contact-us' ? styles.active : ''} px-2 d-flex align-items-center justify-content-end text-decoration-none`} >
                            {t('navBarEcommerce.contactUs')} {/* Contacto */}
                        </Link>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/ecommerce" className={`${styles.container__Logo} d-flex align-items-center justify-content-center`} >
                        <img src={LogoTopDrive} alt="Logo Top Drive Group" className={`${styles.logo} m-auto`} loading="lazy"  />
                    </Link>

                    <div className={`${styles.container__Menu} d-flex align-items-center justify-content-center`} onClick={toggleModal}>
                        <LuMenu className={styles.icon__Menu} /> <span className={styles.text__Menu}>{t('navBarEcommerce.menu')}</span>
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

                    <Link to="/ecommerce/shopping-cart" className={`${styles.shopping__Cart} px-2 d-flex align-items-center justify-content-center position-relative text-decoration-none`} >
                        <div className={`${styles.count__Item_Cart} d-flex align-items-center justify-content-center position-absolute`}><p className={`${styles.count__Products_Cart} position-absolute`}>{countCartProducts}</p></div>
                        <IoCartOutline className={styles.icon__Cart}/>
                    </Link>
                    <Link to="/ecommerce/favorites" className={`${styles.favorites} px-2 d-flex align-items-center justify-content-center position-relative text-decoration-none`} aria-label="favoritos" >
                        <IoMdHeartEmpty className={styles.icon__Favorite}/>
                    </Link>

                    <div className={`${styles.links__Nemu_Interactions} d-flex`}>
                        <Link to="/panel-user/profile" className={`${styles.panel} ${location.pathname === '/panel-top-drive-group/configuration' ? styles.active : ''} d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} >
                            <AiOutlineUser className={styles.icon__User_Panel} />
                            {t('navBarEcommerce.panel')} {/* PANEL COLABORADOR TOP DRIVE */}
                        </Link>
                        <div className={`${styles.logout} px-2 d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} onClick={logout} >
                            {t('navBarEcommerce.exit')} {/* SALIR */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBarClient;