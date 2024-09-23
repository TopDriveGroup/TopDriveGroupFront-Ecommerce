/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link } from 'react-router-dom';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { logoutUser } from '../../../redux/LandingEcommerce/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import SearchBar from '../../../components/LandingEcommerce/01NavBar/02SearchBar/SearchBar';
import TypesFilters from '../../../components/LandingEcommerce/01NavBar/03TypesFilters/TypesFilters';
import LogoTopDrive from '../../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { IoCartOutline, IoClose } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import styles from './styles.module.css';

function NavBarEcommerce() {
    const dispatch: AppDispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    const [showModal, setShowModal] = useState(false);

    // Función para cambiar el estado y mostrar/ocultar el modal
    const toggleModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
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
            <div className={`${styles.navbar} m-auto`}>
                <div className={`${styles.preNavBar} d-flex align-items-center justify-content-between`}>
                    <div className={styles.offers}>
                        {/* LINK PARA LAS OFERTAS */}
                    </div>

                    <div className={`${styles.container__Links_PreNavBar} d-flex`}>
                        <div className={`${styles.container__Language} p-1 d-flex align-items-center justify-content-center`}>
                            <div className={`${styles.container__IconLanguage} d-flex align-items-center justify-content-center text-center overflow-hidden`}>
                                <GrLanguage className={styles.icon__Language}/>
                            </div>
                            <div className={`${styles.text__Language} m-0 p-0`}>
                                Español
                            </div>
                        </div>
                        <Link to="/ecommerce/online-payments" className={`${styles.onlinePayments} d-flex align-items-center justify-content-center text-decoration-none`} >
                            Pagos en línea
                        </Link>
                        <Link to="/industries" className={`${styles.services} d-flex align-items-center justify-content-center text-decoration-none`} >
                            Industrias
                        </Link>
                        <Link to="/portfolio" className={`${styles.portfolio} d-flex align-items-center justify-content-center text-decoration-none`} >
                            Portafolio
                        </Link>
                        <Link to="/quotations" className={`${styles.quotation} d-flex align-items-center justify-content-center text-decoration-none`} >
                            Cotiza
                        </Link>
                        <Link to="/about-us" className={`${styles.aboutUs} d-flex align-items-center justify-content-center text-decoration-none`} >
                            Nosotros
                        </Link>
                        <Link to="/contact-us" className={`${styles.contact} m-0 p-0 d-flex align-items-center justify-content-end text-decoration-none`} >
                            Contacto
                        </Link>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className={`${styles.container__Logo} d-flex align-items-center justify-content-center`} >
                        <img src={LogoTopDrive} alt="Logo Top Drive Group" className={`${styles.logo} m-auto`} />
                    </Link>

                    {/* Div para abrir el modal */}
                    <div className={`${styles.container__Menu} d-flex align-items-center justify-content-center`} onClick={toggleModal}>
                        <LuMenu className={styles.icon__Menu} /> <span className={styles.text__Menu}>MENU</span>
                    </div>

                    {showModal && (
                        <div className={`${styles.container__Modal} position-absolute top-0`} >
                            <div className={styles.modal}>
                                <div className={`${styles.container__Logo_Close} p-2 d-flex align-items-center justify-content-between`}>
                                    <div  className={`${styles.container__Logo} d-flex align-items-center justify-content-center`}>
                                        <img src={LogoTopDrive} alt="Logo Top Drive Group" className={`${styles.logo} m-auto`} />
                                    </div>
                                    <div onClick={closeModal}><IoClose className={styles.icon__Close_Modal} /></div>
                                </div>
                                <TypesFilters closeModal={closeModal} />
                            </div>
                        </div>
                    )}
                    
                    <SearchBar />

                    <div className={`${styles.links__Nemu_Interactions} d-flex`}>
                        <Link to="/ecommerce/shopping-cart" className={`${styles.shopping__Cart} d-flex align-items-center justify-content-center position-relative text-decoration-none`} >
                            <div className={`${styles.count__ItemCart} d-flex align-items-center justify-content-center position-absolute`}>0</div>
                            <IoCartOutline className={styles.icon__Cart}/>
                        </Link>
                        <Link to="/favorites" className={`${styles.shopping__Cart} d-flex align-items-center justify-content-center position-relative text-decoration-none`} >
                            <IoMdHeartEmpty className={styles.icon__Favorite}/>
                        </Link>

                        {isAuthenticated ? (
                            <div className={`${styles.logout} d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} onClick={logout} >
                                SALIR
                            </div>
                        ): (
                            <div className='d-flex'>
                                {!isAuthenticated && (
                                    <Link to="/register" className={`${styles.register} d-flex align-items-center justify-content-center text-center text-decoration-none`} >
                                        REGISTRATE
                                    </Link>
                                )}
                                {!isAuthenticated && (
                                    <Link to="/login" className={`${styles.login} d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} >
                                        <AiOutlineUser className={styles.icon__Login} />
                                        LOGIN
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