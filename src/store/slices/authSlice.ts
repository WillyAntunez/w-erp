import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { IUser } from '@/types/user';

export type AuthState = {
    token: string | null;
    user: IUser | null;
}

const initialState: AuthState = {
    token: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        resetAuth(state) {
            state.token = null;
            state.user = null;
        },
    },
});

export const {setToken, setUser, resetAuth} = authSlice.actions;