/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IContactUs } from '../../../types/contactUs.types';
import { postContactUsStart, contactUsErrors } from './contactUsSlice';

//ENVIO DE FORMULARIO CONTACTANOS
export const postContactUs = (formData: IContactUs) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postContactUsStart(formData));
        return await axiosInstance.post('/contact-us', formData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(contactUsErrors(error.response?.data.message));
        } else {
            dispatch(contactUsErrors(error.message));
        }
    }
};