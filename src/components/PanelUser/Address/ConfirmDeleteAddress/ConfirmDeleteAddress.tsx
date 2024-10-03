import jsCookie from 'js-cookie';
//REDUX
import { useDispatch } from 'react-redux';
import { deleteAddressClient, getAddressClient } from '../../../../redux/Landing/addressSlice/actions';
import type { AppDispatch } from '../../../../redux/store';
import styles from './styles.module.css';

interface ConfirmDeleteAddressProps {
    idAddress: string;
    onCloseModal: () => void;
}

function ConfirmDeleteAddress({ idAddress, onCloseModal }: ConfirmDeleteAddressProps) {
    const token = jsCookie.get("token") || '';
    const dispatch: AppDispatch = useDispatch();

    const onDelete = async () => {
        try {
            await dispatch(deleteAddressClient(idAddress, token));
            onCloseModal();
            dispatch(getAddressClient(token));
        } catch (error) {
            throw new Error('Error al eliminar la dirección del cliente');
        }
    };

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='mb-4'>¿Estas seguro de eliminar esta dirección?</p>
            <button onClick={onDelete} className={`${styles.button__Delete} pt-2 pb-2 px-4 border-0`}>Aceptar</button>
        </div>
    );
}

export default ConfirmDeleteAddress;