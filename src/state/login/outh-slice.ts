import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    userInfo: any
}

const initialState: AuthState = {
    isAuthenticated: false,
    userInfo: {}
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: any) => {
            state.isAuthenticated = true;
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
