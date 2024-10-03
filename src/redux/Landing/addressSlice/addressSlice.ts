import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddress } from '../../../types/address.types';

interface AddressState {
    address: IAddress | IAddress[] | null;
    loading: boolean;
    error: string[] | null;
}

const initialState: AddressState = {
    address: null,
    loading: false,
    error: null,
};

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        //SON LOS ESTADOS
        addressData: (state, action: PayloadAction<IAddress | null>) => {
            state.loading = false;
            state.address = action.payload;
        },
        addressErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.error = action.payload;
        },
        postAddressStart: (state, action: PayloadAction<IAddress | null>) => {
            state.loading = true;
            state.address = action.payload;
            state.error = null;
        },
        getAddressStart: (state, action: PayloadAction<IAddress>) => {
            state.loading = false;
            state.address = action.payload;
        },
        putAddressStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteAddressStart: (state) => {
            state.loading = true;
            state.error = null;
        },
    },
});

export const { addressData, addressErrors, postAddressStart, getAddressStart, putAddressStart, deleteAddressStart } = addressSlice.actions;
export default addressSlice.reducer;