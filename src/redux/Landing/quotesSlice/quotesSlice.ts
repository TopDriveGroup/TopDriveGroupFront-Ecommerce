import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuote } from '../../../types/quote.types';

interface quotestate {
    quotes: IQuote | null;
    loading: boolean;
    errorQuotes: string[] | null;
}

const initialState: quotestate = {
    quotes: null,
    loading: false,
    errorQuotes: null,
};

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        postQuotesStart: (state, action: PayloadAction<IQuote | null>) => {
            state.loading = true;
            state.quotes = action.payload;
            state.errorQuotes = null;
        },
        quotesErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.errorQuotes = action.payload;
        },
    },
});

export const { postQuotesStart, quotesErrors } = quotesSlice.actions;
export default quotesSlice.reducer;