import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContactUs } from '../../../types/contactUs.types';

interface ContactUsState {
    contactUs: IContactUs | null;
    loading: boolean;
    errorContactUs: string[] | null;
}

const initialState: ContactUsState = {
    contactUs: null,
    loading: false,
    errorContactUs: null,
};

const contactUsSlice = createSlice({
    name: 'contactUs',
    initialState,
    reducers: {
        postContactUsStart: (state, action: PayloadAction<IContactUs | null>) => {
            state.loading = true;
            state.contactUs = action.payload;
            state.errorContactUs = null;
        },
        contactUsErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.errorContactUs = action.payload;
        },
    },
});

export const { postContactUsStart, contactUsErrors } = contactUsSlice.actions;
export default contactUsSlice.reducer;