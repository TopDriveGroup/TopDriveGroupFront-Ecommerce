import { configureStore } from '@reduxjs/toolkit';
import userReducer from './LandingEcommerce/userSlice/userSlice';
import contactUsReducer from './LandingEcommerce/contactUs/contactUsSlice';
import addressReducer from './LandingEcommerce/addressSlice/addressSlice';
import productReducer from './UserPlatform/02ProductSlice/productSlice';
import bestSellingProductsReducer from './LandingEcommerce/productSlice/productSlice';
import pqrfReducer from './LandingEcommerce/pqrf/pqrfSlice';
import quotesReducer from './LandingEcommerce/quotesSlice/quotesSlice';
import orderReducer from './LandingEcommerce/ordersSlice/ordersSlice';

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        user: userReducer,
        contactUs: contactUsReducer,
        address: addressReducer,
        productPlatform: productReducer,
        products: bestSellingProductsReducer,
        pqrf: pqrfReducer,
        quotes: quotesReducer,
        orders: orderReducer,
    },
});

export type AppDispatch = typeof store.dispatch;