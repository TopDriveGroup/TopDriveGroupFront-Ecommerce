/* eslint-disable @typescript-eslint/no-explicit-any */
import jsCookie from 'js-cookie';
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IClient } from '../../../types/client.types';
import { ITopDriveGroup } from '../../../types/topDriveGroup.types';
import { IUserPlatform } from '../../../types/userPlatform.types';
import { IResetPassword } from '../../../types/resetPassword.types';
import { IResetPasswordBlocked } from '../../../types/resetPasswordBlocked.types';
import { setUserData, setUserErrors, registerUserStart, isAuthenticatedStatus, loginStart, profileStart, sendEmailPasswordChangeRequest, passwordChange, accountUnlocking, logoChange, deleteLogo } from './userSlice';

//REGISTRO DE USUARIOS
export const postRegisterClient = (formData: IClient) => async (dispatch: AppDispatch) => {
    try {
        dispatch(registerUserStart(formData));
        const response = await axiosInstance.post('/client/register', formData);
        dispatch(setUserData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setUserErrors(error.response?.data));
        } else {
            dispatch(setUserErrors(error));
        }
    }
};

//VERIFICA EL TOKEN CADA QUE ENTRE A UNA RUTA PROTEGIDA
export const verifyTokenRequest = (token: string) => {
    return axiosInstance.get(`/auth/verify-token`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

//LOGIN DE USUARIOS
export const loginUser = (loginData: { email: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post('/auth/login', loginData);
        jsCookie.set('token', response.data.token); 
        dispatch(loginStart(response.data.serResult));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setUserErrors(error.response?.data.message));
        } else {
            dispatch(setUserErrors(error.response?.data.message));
        }
    }
};

//PERFIL DE USUARIO
export const getProfileUser = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/auth/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(profileStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setUserErrors(error.response?.data.message));
        } else {
            dispatch(setUserErrors(error.message));
        }
    }
};

//ENVIA CORREO PARA SOLICITUD DE CAMBIO DE CONTRASEÑA
export const sendEmailPasswordChangeClient = (email: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(sendEmailPasswordChangeRequest());
        return await axiosInstance.get('/client/email', { params: { email } });
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setUserErrors(error.response?.data));
        } else {
            dispatch(setUserErrors(error));
        }
    }
};

//CAMBIO DE CONTRASEÑA
export const passwordChangeClient = (idUser: string, passwordResetCode: string, formData: IResetPassword) => async (dispatch: AppDispatch) => {
    try {
        dispatch(passwordChange());
        return await axiosInstance.put(`/client/resetPassword/${idUser}/${passwordResetCode}`, formData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setUserErrors(error.response?.data));
        } else {
            dispatch(setUserErrors(error));
        }
    }
};

//DESBLOQUEO DE CUENTA Y CAMBIO DE CONTRASEÑA
export const accountUnlockingClient = (idUser: string, formData: IResetPasswordBlocked) => async (dispatch: AppDispatch) => {
    try {
        dispatch(accountUnlocking());
        return await axiosInstance.put(`/client/resetPasswordBlocked/${idUser}`, formData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setUserErrors(error.response?.data));
        } else {
            dispatch(setUserErrors(error));
        }
    }
};

//CAMBIAR LA FOTO DE PERFIL
export const logoChangeClient = (formData: IClient | ITopDriveGroup | IUserPlatform, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(logoChange(formData));
        const response = await axiosInstance.patch('/client/logo', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(setUserData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setUserErrors(error.response?.data));
        } else {
            dispatch(setUserErrors(error));
        }
    }
};

//ELIMINAR LA FOTO DE PERFIL
export const deleteLogoClient = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteLogo());
        const response = await axiosInstance.patch('/client/deleteLogo', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(setUserData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setUserErrors(error.response?.data));
        } else {
            dispatch(setUserErrors(error));
        }
    }
};

//LOGOUT DE USUARIOS                        
export const logoutUser = () => (dispatch: AppDispatch) => {
    jsCookie.remove('token');
    dispatch(isAuthenticatedStatus(false));
    dispatch(setUserData(null));
    window.location.href = "/login";
};