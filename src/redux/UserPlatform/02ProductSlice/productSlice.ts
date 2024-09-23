import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/product.types';

interface ProductState {
    productPlatform: IProduct | IProduct[] | null;
    loading: boolean;
    errorProduct: string[] | null;
    searchCompleted: boolean;
    totalProducts: number;
    totalPages: number;
    currentPage: number;
}

const initialState: ProductState = {
    productPlatform: null,
    loading: false,
    errorProduct: null,
    searchCompleted: false,
    totalProducts: 0,
    totalPages: 0,
    currentPage: 0,
};

const productSlice = createSlice({
    name: 'productPlatform',
    initialState,
    reducers: {
        setProductData: (state) => {
            state.loading = false;
        },
        setErrorProduct: (state, action: PayloadAction<string[]>) => {
            state.loading = false;
            state.errorProduct = action.payload;
        },
        //CREAR UN PRODUCTO
        postProductStart: (state, action: PayloadAction<IProduct  | null>) => {
            state.loading = true;
            state.productPlatform = action.payload;
            state.errorProduct = null;
        },
        //OBTENER TODOS LOS PRODUCTOS INCLUYENDO LOS DE BORRADO LOGICO
        getProductsStart: (state, action: PayloadAction<{ productPlatform: IProduct[], totalProducts: number, totalPages: number, currentPage: number }>) => {
            state.loading = false;
            state.productPlatform = action.payload.productPlatform;
            state.totalProducts = action.payload.totalProducts;
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.errorProduct = null;
            state.searchCompleted = true;
        },
        //OBTENER UN PRODUCTO POR ID
        getProductByIdStart: (state, action: PayloadAction<IProduct>) => {
            state.loading = false;
            state.productPlatform = action.payload;
            state.errorProduct = null;
        },
        //ACTUALIZAR UN PRODUCTO
        putProductStart: (state) => {
            state.loading = true;
            state.errorProduct = null;
        },
        //ELIMINAR PERMANENTEMENTE UN PRODUCTO
        deleteProductStart: (state) => {
            state.loading = true;
            state.errorProduct = null;
        },
        //ELIMINAR CON BORRADO LOGICO UN PRODUCTO
        patchLogicalDeleteProductStart: (state) => {
            state.loading = true;
            state.errorProduct = null;
        },
        //ACTIVAR UN PRODUCTO ELIMINADO CON BORRADO LOGICO
        patchActivateLogicalDeleteProductStart: (state) => {
            state.loading = true;
            state.errorProduct = null;
        },
        //OBTENER TODOS LOS PRODUCTOS CON BORRADO LOGICO
        getProductsLogicalStart: (state, action: PayloadAction<IProduct>) => {
            state.loading = true;
            state.productPlatform = action.payload;
            state.errorProduct = null;
        },
        //CREAR MASIVAMENTE PRODUCTOS
        postManyProductsStart: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = true;
            state.productPlatform = action.payload;
            state.errorProduct = null;
        },
        //ACTUALIZAR MASIVAMENTE PRODUCTOS
    },
});

export const { setProductData, setErrorProduct, postProductStart, getProductsStart, getProductByIdStart, putProductStart, deleteProductStart, patchLogicalDeleteProductStart, patchActivateLogicalDeleteProductStart, getProductsLogicalStart, postManyProductsStart } = productSlice.actions;
export default productSlice.reducer;