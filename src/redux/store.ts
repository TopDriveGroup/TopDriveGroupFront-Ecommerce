import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Landing/userSlice/userSlice';
import contactUsReducer from './Landing/contactUs/contactUsSlice';
import documentRequestReducer from './PanelTopDriveGroup/08DocumentRequest/documentRequestSlice';
import addressReducer from './Landing/addressSlice/addressSlice';
import productReducer from './UserPlatform/02ProductSlice/productSlice';
import bestSellingProductsReducer from './Landing/productSlice/productSlice';
import pqrfReducer from './Landing/pqrf/pqrfSlice';
import quotesReducer from './Landing/quotesSlice/quotesSlice';
import orderReducer from './Landing/ordersSlice/ordersSlice';
import { socketMiddleware } from './Socket.io/socketMiddleware';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        user: userReducer,
        contactUs: contactUsReducer,
        documentRequest: documentRequestReducer,
        address: addressReducer,
        productPlatform: productReducer,
        products: bestSellingProductsReducer,
        pqrf: pqrfReducer,
        quotes: quotesReducer,
        orders: orderReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ serializableCheck: false }).concat(socketMiddleware),
});

export type AppDispatch = typeof store.dispatch;