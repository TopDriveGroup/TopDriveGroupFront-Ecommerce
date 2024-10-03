/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IPQRF } from '../../../types/pqrf.types';
import { postPqrfStart, pqrfErrors } from './pqrfSlice';

//CREACION DE UNA PQRF DE PARTE DEL CLIENTE
export const postPqrf = (formData: IPQRF) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postPqrfStart(formData));
        return await axiosInstance.post('/pqrf', formData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(pqrfErrors(error.response?.data.message));
        } else {
            dispatch(pqrfErrors(error.message));
        }
    }
};