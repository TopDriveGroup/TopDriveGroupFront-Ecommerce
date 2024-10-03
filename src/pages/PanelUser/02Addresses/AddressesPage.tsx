/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsCookie from 'js-cookie';
import { Modal } from 'react-bootstrap';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getAddressClient } from '../../../redux/Landing/addressSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IAddress } from '../../../types/address.types';
import NavBarClient from '../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import SideBarPanelClient from '../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import Footer from '../../../components/Landing/Footer/Footer';
import ConfirmDeleteAddress from '../../../components/PanelUser/Address/ConfirmDeleteAddress/ConfirmDeleteAddress';
import { GoPlus } from "react-icons/go";
import styles from './styles.module.css';

export interface AddressResponse {
    result: IAddress[];
}

function AddressesPage() {
    const token = jsCookie.get("token");

    //REDUX
    const dispatch: AppDispatch = useDispatch();
    const address = useSelector((state: RootState) => state.address.address);
    
    // Verifica si address no es null antes de acceder a la propiedad result
    const addressResponse = address ? address as unknown as AddressResponse : null;
    
    useEffect(() => {
        if (token) {
            dispatch(getAddressClient(token));
        }
    }, [token]);

    const [idAddress, setIdAddress] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleDelete = () => {
        setShowDeleteConfirmation(true);
    };

    const onCloseModal = () => {
        setShowDeleteConfirmation(false)
    };

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Direcciones</h2>

                    <Link to='/panel-user/addresses/create-address' className={`${styles.button__Add_Address} text-decoration-none`}>Añadir dirección <GoPlus className={`${styles.icon__Add} `}/></Link>

                    <div className={`${styles.container__Address} mt-4 d-flex flex-wrap align-items-center justify-content-between gap-4`}>
                        {addressResponse && Array.isArray(addressResponse.result) && addressResponse.result.map((addressItem: IAddress) => (
                            <div key={addressItem._id} className={`${styles.address} p-2`}>
                                <div className={`${styles.data__Address} mb-3`}>
                                    <div className={`${styles.aaaaaaaaaaaaaa} `}>
                                        {addressItem.country}, {addressItem.department}, {addressItem.city}
                                    </div>
                                    <div className={`${styles.aaaaaaaaaaaaaa} `}>
                                        {addressItem.street}, CP: {addressItem.postalCode}
                                    </div>
                                </div>

                                <div className={`${styles.ssssss} d-flex`}>
                                    <Link to={`/panel-user/addresses/edit-address/${addressItem._id}`} state={{ addressToUpdate: addressItem }} className={`${styles.button__Edit} text-decoration-none`}>Editar</Link>
                                    <div className={`${styles.divider} `}>|</div>
                                    <div
                                        onClick={() => {
                                            if (addressItem._id) {              // Verifica si _id está definido
                                                setIdAddress(addressItem._id);  // Utiliza el ID de la dirección actual
                                                handleDelete();
                                            }
                                        }}
                                        className={`${styles.button__Delete} `}
                                    >Eliminar dirección</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)} >
                        <Modal.Header closeButton onClick={() => setShowDeleteConfirmation(false)}>
                            <Modal.Title>Confirmación para eliminar la dirección</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ConfirmDeleteAddress
                                idAddress={idAddress}
                                onCloseModal={() => {onCloseModal()}}
                            />
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddressesPage;