/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IQuote } from '../../../types/quote.types';
import { postQuotesStart, quotesErrors } from './quotesSlice';

//CREACION DE UNA PQRF DE PARTE DEL CLIENTE
export const postQuote = (formData: IQuote) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postQuotesStart(formData));
        return await axiosInstance.post('/quote', formData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(quotesErrors(error.response?.data.message));
        } else {
            dispatch(quotesErrors(error.message));
        }
    }
};