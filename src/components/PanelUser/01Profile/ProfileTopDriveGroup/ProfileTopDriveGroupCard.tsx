/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser, logoChangeClient, deleteLogoClient } from '../../../../redux/Landing/userSlice/actions';
import type { RootState, AppDispatch } from '../../../../redux/store';
//ELEMENTOS DEL COMPONENTE
import { ITopDriveGroup } from '../../../../types/topDriveGroup.types';
import { BsPencil } from 'react-icons/bs';
import styles from './styles.module.css';

function ProfileTopDriveGroupCard() {
    const token = jsCookie.get("token") || '';
    const dispatch: AppDispatch = useDispatch();

    // Estado de Redux
    const user = useSelector((state: RootState) => state.user.user);
    const [topDriveGroupUser, setTopDriveGroupUser] = useState<ITopDriveGroup>();

    useEffect(() => {
        if (token && user && !topDriveGroupUser) {
            dispatch(getProfileUser(token));
            setTopDriveGroupUser(user as ITopDriveGroup);
        }
    }, [token, user]);

    const [userLogo, setUserLogo] = useState<string | null>();
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        if (user?.logo) {
            setUserLogo(user.logo);
        }
    }, [user?.logo]);

    const handleEditClick = () => {
        setMenuVisible(!menuVisible);
    };

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

    const handleUploadImage = async (image: File) => {
        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "images");
            const response = await axios.post(`${import.meta.env.VITE_CLOUDINARY_LOGO_CLIENTS}`, formData);
            const imageUrl = response.data.secure_url;
            const userData = {
                logo: imageUrl,
            } as ITopDriveGroup;
            window.location.reload();
            dispatch(logoChangeClient(userData, token));
        } catch (error) {
            throw new Error('Error al cargar la imagen');
        }
    };

    return (
        <div className={`${styles.container__Component} `}>
            <h1 className={`${styles.main__Title} mb-3 text-center`}>Tu información de perfil</h1>
            <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                <div className={`${styles.container__Logo_Client} mb-4 mx-auto position-relative d-flex align-items-center justify-content-center`}>
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
                    <div className="m-2">
                        <h6 className='m-0'>Razón social</h6>
                        <div>
                            <p className='m-0'>{topDriveGroupUser?.corporateName}</p>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6 className='m-0'>Permisos</h6>
                        <div>
                            <p className='m-0'>{topDriveGroupUser?.permissions}</p>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6 className='m-0'>Departamento (Información fiscal)</h6>
                        <div>
                            <p className='m-0'>{topDriveGroupUser?.department}</p>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6 className='m-0'>Ciudad (Información fiscal)</h6>
                        <div>
                            <p className='m-0'>{topDriveGroupUser?.city}</p>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6 className='m-0'>Código Dane (Información fiscal)</h6>
                        <div>
                            <p className='m-0'>{topDriveGroupUser?.codeDane}</p>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6 className='m-0'>Código Subregión Dane (Información fiscal)</h6>
                        <div>
                            <p className='m-0'>{topDriveGroupUser?.subregionCodeDane}</p>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6 className='m-0'>Email</h6>
                        <p className='m-0'>{topDriveGroupUser?.email}</p>
                    </div>
                    <div className="m-2">
                        <h6 className='m-0'>Teléfonos</h6>
                        <div>
                            <p className='m-0'>{topDriveGroupUser?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileTopDriveGroupCard;