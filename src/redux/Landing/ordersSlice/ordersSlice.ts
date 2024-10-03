/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGouOrderResult } from '../../../types/gouOrder.types';

interface OrdersState {
    orders: IGouOrderResult | null;
    ordersPending: IGouOrderResult[] | null;
    paymentsPending: IGouOrderResult[] | null;
    loading: boolean;
    errorOrder: string[] | null;
}

const initialState: OrdersState = {
    orders: null,
    ordersPending: null,
    paymentsPending: null,
    loading: false,
    errorOrder: null,
};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrderData: (state) => {
            state.loading = false;
        },
        setErrorOrder: (state, action: PayloadAction<string[]>) => {
            state.loading = false;
            state.errorOrder= action.payload;
        },
        postGouPaymentOrderStart: (state, action: PayloadAction<IGouOrderResult>) => {
            state.loading = true;
            state.orders = action.payload;
            state.errorOrder = null;
        },
        postStatusConsultSessionServiceStart: (state, action: PayloadAction<IGouOrderResult>) => {
            state.loading = true;
            state.orders = action.payload;
            state.errorOrder = null;
        },
        getConsultTransactionIdStart: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.orders = action.payload;
        },
        getOrdersHistoryStart: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.orders = action.payload;
        },
        getConsultTransactionsPendingStart: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.ordersPending = action.payload;
        },
        setPaymentsPendingStatusStart(state) {
            state.loading = true;
        },
        getPaymentsPendingStatusStart: (state, action: PayloadAction<IGouOrderResult[]>) => {
            state.loading = false;
            state.paymentsPending = action.payload;
        },
    },
});

export const { setOrderData, setErrorOrder, postGouPaymentOrderStart, postStatusConsultSessionServiceStart, getConsultTransactionIdStart, getOrdersHistoryStart, getConsultTransactionsPendingStart, setPaymentsPendingStatusStart, getPaymentsPendingStatusStart } = orderSlice.actions;
export default orderSlice.reducer;