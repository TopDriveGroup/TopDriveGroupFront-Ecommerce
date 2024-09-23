/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClient } from '../../../types/client.types';
import { ITopDriveGroup } from '../../../types/topDriveGroup.types';
import { IUserPlatform } from '../../../types/userPlatform.types';

interface UserState {
    user: IClient | ITopDriveGroup | IUserPlatform | null;
    loading: boolean;
    userErrors: string[] | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    user: null,
    loading: false,
    userErrors: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IClient | null>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setUserErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.userErrors = action.payload;
        },
        registerUserStart: (state, action: PayloadAction<IClient | null>) => {
            state.loading = true;
            state.user = action.payload;
            state.user = action.payload;
            state.userErrors = null;
        },
        isAuthenticatedStatus: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        loginStart: (state, action: PayloadAction<IClient | ITopDriveGroup | IUserPlatform>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        profileStart: (state, action: PayloadAction<IClient>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        sendEmailPasswordChangeRequest: (state) => {
            state.loading = false;
            state.userErrors = null;
        },
        passwordChange: (state) => {
            state.loading = false;
            state.userErrors = null;
        },
        accountUnlocking: (state) => {
            state.loading = false;
            state.userErrors = null;
        },
        logoChange: (state, action: PayloadAction<ITopDriveGroup | IUserPlatform | IClient>) => {
            state.loading = false;
            state.user = action.payload;
        },
        deleteLogo: (state) => {
            state.loading = false;
        },
    },
});

export const { setUserData, setUserErrors, registerUserStart, isAuthenticatedStatus, loginStart, profileStart, sendEmailPasswordChangeRequest, passwordChange, accountUnlocking, logoChange, deleteLogo } = userSlice.actions;
export default userSlice.reducer;