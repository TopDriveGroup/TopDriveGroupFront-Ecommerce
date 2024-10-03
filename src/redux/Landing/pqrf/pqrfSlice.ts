import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPQRF } from '../../../types/pqrf.types';

interface PQRFState {
    pqrf: IPQRF | null;
    loading: boolean;
    errorPqrf: string[] | null;
}

const initialState: PQRFState = {
    pqrf: null,
    loading: false,
    errorPqrf: null,
};

const pqrfSlice = createSlice({
    name: 'pqrf',
    initialState,
    reducers: {
        postPqrfStart: (state, action: PayloadAction<IPQRF | null>) => {
            state.loading = true;
            state.pqrf = action.payload;
            state.errorPqrf = null;
        },
        pqrfErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.errorPqrf = action.payload;
        },
    },
});

export const { postPqrfStart, pqrfErrors } = pqrfSlice.actions;
export default pqrfSlice.reducer;