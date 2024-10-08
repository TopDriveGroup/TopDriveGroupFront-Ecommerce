import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/product.types';

interface ProductState {
    products: IProduct | IProduct[] | null;
    bestSellingProducts: IProduct | IProduct[] | null;
    productsOnOffer: IProduct | IProduct[] | null;
    inspiredByLastSawProducts: IProduct[] | null;
    trendingProducts: IProduct[] | null;
    loading: boolean;
    searchCompleted: boolean;
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    errorProduct: string | null;
}

const initialState: ProductState = {
    products: null,
    bestSellingProducts: null,
    productsOnOffer: null,
    inspiredByLastSawProducts: null,
    trendingProducts: null,
    loading: false,
    searchCompleted: false,
    totalProducts: 0,
    totalPages: 0,
    currentPage: 0,
    errorProduct: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductData(state) {
            state.loading = true;
        },
        setErrorProduct(state, action: PayloadAction<string>) {
            state.loading = false;
            state.errorProduct = action.payload;
        },
        getAllProductsWithoutLogicalDeletionStart: (state, action: PayloadAction<IProduct>) => {
            state.loading = false;
            state.products = action.payload;
            state.errorProduct = null;
        },
        getAllProductsStart: (state, action: PayloadAction<IProduct>) => {
            state.loading = false;
            state.products = action.payload;
            state.errorProduct = null;
        },
        getProductByIdStart: (state, action: PayloadAction<IProduct>) => {
            state.loading = false;
            state.products = action.payload;
            state.errorProduct = null;
        },
        getSearchProductsStart: (state, action: PayloadAction<{ products: IProduct[], totalProducts: number, totalPages: number, currentPage: number }>) => {
            state.loading = false;
            state.products = action.payload.products;
            state.totalProducts = action.payload.totalProducts;
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.errorProduct = null;
            state.searchCompleted = true;
        },
        resetSearchCompleted(state) {
            state.searchCompleted = false;
        },
        getBestSellingProductSuccessStart(state, action: PayloadAction<IProduct[]>) {
            state.loading = false;
            state.bestSellingProducts = action.payload;
        },
        setProductsOnOfferStart(state) {
            state.loading = true;
        },
        getProductsOnOfferStart(state, action: PayloadAction<IProduct[]>) {
            state.loading = false;
            state.productsOnOffer = action.payload;
        },
        //REGISTRA LA ACTIVIDAD DEL CLIENTE POR CONSULTA DE PRODUCTOS
        setTrendingProductsStart(state) {
            state.loading = true;
        },
        //OBTENER TODOS LOS PRODUCTOS EN TENDENCIA
        getTrendingProductsStart(state, action: PayloadAction<IProduct[]>) {
            state.loading = false;
            state.trendingProducts = action.payload;
        },
        //REGISTRA LA ACTIVIDAD DEL CLIENTE POR CONSULTA DE PRODUCTOS
        setInspiredByLastSawStart(state) {
            state.loading = true;
        },
        //INSPIRADO EN LO QUE VISTE, RETORNA PRODUCTOS RELACIONADOS DE ACUEDO CON EL HABITO DE CONSULTA
        getInspiredByLastSawStart(state, action: PayloadAction<IProduct[]>) {
            state.loading = false;
            state.inspiredByLastSawProducts = action.payload;
        },
        getProductByQrStart(state, action: PayloadAction<IProduct>) {
            state.loading = false;
            state.products = action.payload;
        },
        //ACTUALIZAR UN PRODUCTO
        putProductStart: (state) => {
            state.loading = true;
            state.errorProduct = null;
        },
        //ELIMINAR UN PRODUCTO
        deleteProductStart: (state) => {
            state.loading = true;
            state.errorProduct = null;
        },
        //REGISTRA LA ACTIVIDAD DEL CLIENTE POR CONSULTA DE PRODUCTOS
        postTrackProductViewStart: (state) => {
            state.loading = true;
            state.errorProduct = null;
        },
    },
});

export const { setProductData, setErrorProduct, getAllProductsWithoutLogicalDeletionStart, getAllProductsStart, getProductByIdStart, getSearchProductsStart, resetSearchCompleted, getBestSellingProductSuccessStart, setProductsOnOfferStart, getProductsOnOfferStart, setTrendingProductsStart, getTrendingProductsStart, setInspiredByLastSawStart, getInspiredByLastSawStart, getProductByQrStart, putProductStart, deleteProductStart, postTrackProductViewStart } = productsSlice.actions;
export default productsSlice.reducer;