/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getProfileUser, logoChangeClient, deleteLogoClient } from '../../../redux/LandingEcommerce/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import NavBarClient from '../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import SideBarPanelClient from '../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import Footer from '../../../components/LandingEcommerce/Footer/Footer';
import { IClient } from '../../../types/client.types';
import { BsPencil } from 'react-icons/bs';
import styles from './styles.module.css';

function ProfilePage() {
    const token = jsCookie.get("token") || '';
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);

    const [client, setClient] = useState<IClient>();
    const [userLogo, setUserLogo] = useState<string | null>(null);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        if (token) dispatch(getProfileUser(token));
    }, [token]);

    useEffect(() => {
        if (user) {
            setClient(user as IClient);
            if (user.logo) setUserLogo(user.logo);
        }
    }, [user]);

    const handleEditClick = () => {
        setMenuVisible(!menuVisible);
    };

    const menuRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const handleMenuOptionClick = async (option: string) => {
        if (option === 'CargarImagen') {
            setMenuVisible(false);
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.onchange = (e: any) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                    handleUploadImage(file);
                }
            };
            fileInput.click();
        } else if (option === 'EliminarImagen') {
            try {
                dispatch(deleteLogoClient(token));
                window.location.reload();
            } catch (error) {
                throw new Error('Error al eliminar la imagen');
            }
            setMenuVisible(false);
        }
    };

    const handleUploadImage = async (image: File) => {
        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "images");
            const response = await axios.post(`${import.meta.env.VITE_CLOUDINARY_LOGO_CLIENTS}`, formData);
            const imageUrl = response.data.secure_url;
            const userData = {
                logo: imageUrl,
            } as IClient;
            dispatch(logoChangeClient(userData, token));
            window.location.reload();
        } catch (error) {
            throw new Error('Error al cargar la imagen');
        }
    };

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Información de perfil</h2>

                    <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                        <div className={`${styles.container__Logo_Client} mb-4 mx-auto d-flex align-items-center justify-content-center position-relative` }>
                            <div className={`${styles.container__Logo} d-flex align-items-center justify-content-center`}>
                                {userLogo && (
                                    <img className={`${styles.logo__Client} `} src={userLogo} alt="Logo del usuario" loading="lazy" />
                                )}
                                {!userLogo && (
                                    <div className={styles.container__Warning}>
                                        <p className="display-6 text-center">No tienes un Logo para mostrar</p>
                                    </div>
                                )}
                            </div>
                            <div className={`${styles.container__Update} d-flex align-items-center justify-content-center position-absolute rounded-circle`}>
                                <BsPencil className={`${styles.icon__Update} overflow-hidden`} onClick={handleEditClick} />
                                {menuVisible && (
                                    <div ref={menuRef} className={`${styles.menu} position-absolute`}>
                                        {userLogo ? (
                                            <div>
                                                <div className={styles.menu__Update} onClick={() => handleMenuOptionClick('CargarImagen')}>Actualizar logo</div>
                                                <div className={styles.menu__Update} onClick={() => handleMenuOptionClick('EliminarImagen')}>Eliminar logo</div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className={styles.menu__Send_Logo} onClick={() => handleMenuOptionClick('CargarImagen')}>Subir logo</div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={`${styles.container__Info_Client} d-flex flex-column align-items-start justify-content-center`}>
                            {client?.name && (
                                <div>
                                    <div className="m-2">
                                        <h6 className='m-0'>Nombres</h6>
                                        <div>
                                            <p className='m-0'>{client?.name}</p>
                                        </div>
                                    </div>
                                    <div className="m-2">
                                        <h6 className='m-0'>Apellidos</h6>
                                        <div>
                                            <p className='m-0'>{client?.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {client?.corporateName && (
                                <div>
                                    <div className="m-2">
                                        <h6 className='m-0'>Razón Social</h6>
                                        <div>
                                            <p className='m-0'>{client?.corporateName}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="m-2">
                                <h6 className='m-0'>Tipo de identificación</h6>
                                <div>
                                    <p className='m-0'>{client?.typeDocumentId}</p>
                                </div>
                            </div>
                            <div className="m-2">
                                <h6 className='m-0'>Número de identificación</h6>
                                <div>
                                    <p className='m-0'>{client?.documentId}</p>
                                </div>
                            </div>
                            {/* <div className="m-2">
                                <h6 className='m-0'>Departamento</h6>
                                <div>
                                    <p className='m-0'>{client?.department ? client?.department : 'No asignado aún'}</p>
                                </div>
                            </div> */}
                            {/* <div className="m-2">
                                <h6 className='m-0'>Ciudad</h6>
                                <div>
                                    <p className='m-0'>{client?.city ? client?.city : 'No asignada aún'}</p>
                                </div>
                            </div> */}
                            {/* <div className="m-2">
                                <h6 className='m-0'>Dirección</h6>
                                <div>
                                    <p className='m-0'>{client?.address ? client?.address : 'No asignada aún'}</p>
                                </div>
                            </div> */}
                            <div className="m-2">
                                <h6 className='m-0'>Teléfono</h6>
                                <div>
                                    <p className='m-0'>{client?.phone}</p>
                                </div>
                            </div>
                            <div className="m-2">
                                <h6 className='m-0'>Email</h6>
                                <div>
                                    <p className='m-0'>{client?.email}</p>
                                </div>
                            </div>
                            <div className="m-2">
                                <h6 className='m-0'>Estado del usuario</h6>
                                <div>
                                    <p className='m-0'>{client?.isBlocked ? 'Usuario bloqueado' : 'Usuario activo'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage;