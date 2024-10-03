/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IAddress } from '../../../types/address.types';
import { addressData, addressErrors, postAddressStart, getAddressStart, putAddressStart, deleteAddressStart } from './addressSlice';

//REGISTRO DE DIRECCIONES DEL CLIENTE
export const postAddressClient = (formData: IAddress, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postAddressStart(formData));
        const response = await axiosInstance.post('/address', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(addressData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(addressErrors(error.response?.data.message));
        } else {
            dispatch(addressErrors(error.message));
        }
    }
};

// OBTENER TODAS LAS DIRECCIONES DEL CLIENTE
export const getAddressClient = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/address', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getAddressStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(addressErrors(error.response?.data.message));
        } else {
            dispatch(addressErrors(error.message));
        }
    }
};

//ACTUALIZAR UNA DIRECCION DEL CLIENTE
export const putAddressClient = (idAddress: string, formData: IAddress, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(putAddressStart());
        const response = await axiosInstance.put(`/address/${idAddress}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(addressData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(addressErrors(error.response?.data.message));
        } else {
            dispatch(addressErrors(error.message));
        }
    }
};

//ELIMINAR UNA DIRECCION DEL CLIENTE
export const deleteAddressClient = (idAddress: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteAddressStart());
        const response = await axiosInstance.delete(`/address/${idAddress}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(addressData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(addressErrors(error.response?.data.message));
        } else {
            dispatch(addressErrors(error.message));
        }
    }
};