/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IProduct } from '../../../types/product.types';
import { IInspiredByLastSaw } from '../../../types/InspiredByLastSaw.types';
import { setProductData, setErrorProduct, getAllProductsWithoutLogicalDeletionStart, getAllProductsStart, getProductByIdStart, getSearchProductsStart, getBestSellingProductSuccessStart, setProductsOnOfferStart, getProductsOnOfferStart, setTrendingProductsStart, getTrendingProductsStart, setInspiredByLastSawStart, getInspiredByLastSawStart, getProductByQrStart, putProductStart, deleteProductStart, postTrackProductViewStart } from './productSlice';

//OBTENER TODOS LOS PRODUCTO SIN BORRADO LOGICO
export const getAllProductsWithoutLogicalDeletionService = (page: number, limit: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get(`/ecommerce/all-products?page=${page}&limit=${limit}`);
        dispatch(getAllProductsWithoutLogicalDeletionStart(response.data.result));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//OBTENER TODOS LOS PRODUCTO SIN BORRADO LOGICO CON PROPIEDADES ESPECIFICAS
export const getAllProducts = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get(`/ecommerce/all-products-top-drive`);
        dispatch(getAllProductsStart(response.data.result));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//OBTENER UN PRODUCTO POR ID
export const getProductById = (idProduct: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get(`/ecommerce/${idProduct}`);
        dispatch(getProductByIdStart(response.data.result));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//BUSCA TODOS LOS PRODUCTOS POR REFERENCIA, DESCRIPCION, CLASE, CATEGORIA, TIPO O FABRICANTE
export const getSearchProducts = (
    description: string, 
    page: number = 1, 
    limit: number = 10, 
    sortBy: string = 'A-Z', 
    filters?: { id: string; label: string; property: string }[]
) => async (dispatch: AppDispatch) => {
    dispatch(setProductData());
    
    try {
        const response = await axiosInstance.get(`/ecommerce/search-product`, {
            params: {
                term: description,
                page,
                limit,
                sortBy,
                filters,
            }
        });

        dispatch(getSearchProductsStart({
            products: response.data.result,
            totalProducts: response.data.totalProducts,
            totalPages: response.data.totalPages,
            currentPage: page,
        }));
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message;
        dispatch(setErrorProduct(errorMessage));
    }
};

//OBTENER LOS PRODUCTOS MAS VENDIDOS
export const getBestSellingProductsClient = () => async (dispatch: AppDispatch) => {
    dispatch(setProductData());
    try {
        const response = await axiosInstance.get('/ecommerce/best-selling-products');
        dispatch(getBestSellingProductSuccessStart(response.data.result));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//BUSCA TODOS LOS PRODUCTOS EN OFERTA
export const getProductsOnOffer = () => async (dispatch: AppDispatch) => {
    dispatch(setProductsOnOfferStart());
    try {
        const response = await axiosInstance.get(`/ecommerce/products-on-offer`);
        dispatch(getProductsOnOfferStart(response.data.result));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//OBTENER TODOS LOS PRODUCTOS EN TENDENCIA
export const getTrendingProducts = () => async (dispatch: AppDispatch) => {
    dispatch(setTrendingProductsStart());
    try {
        const response = await axiosInstance.get(`/ecommerce/trending-products`);
        dispatch(getTrendingProductsStart(response.data.result));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//OBTENER UN PRODUCTO POR QR
export const getProductByQr = (idProduct: string) => async (dispatch: AppDispatch) => {
    dispatch(setProductData());
    try {
        const response = await axiosInstance.get(`/ecommerce/qr/${idProduct}`);
        dispatch(getProductByQrStart(response.data.result));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//ACTUALIZAR UN PRODUCTO
export const putProduct = (idProduct: string, formData: IProduct, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(putProductStart());
        const response = await axiosInstance.put(`/top-drive/product/${idProduct}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(setProductData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//ELIMINAR UN PRODUCTO
export const deleteProduct = (idProduct: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteProductStart());
        const response = await axiosInstance.delete(`/top-drive/product/${idProduct}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(setProductData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//REGISTRA LA ACTIVIDAD DEL CLIENTE POR CONSULTA DE PRODUCTOS
export const postTrackProductView = (formData: IInspiredByLastSaw) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postTrackProductViewStart());
        return await axiosInstance.post('/ecommerce/track-product-view', formData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};

//REGISTRA LA ACTIVIDAD DEL CLIENTE POR CONSULTA DE PRODUCTOS
export const getInspiredByLastSaw = (token: string, sessionId: string) => async (dispatch: AppDispatch) => {
    dispatch(setInspiredByLastSawStart());
    try {
        const response = await axiosInstance.get(`/ecommerce/track-product-view/${sessionId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getInspiredByLastSawStart(response.data.result.products));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setErrorProduct(error.response?.data.message));
        } else {
            dispatch(setErrorProduct(error.message));
        }
    }
};