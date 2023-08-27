import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "@/state/login/outh-slice";
import {TypedUseSelectorHook, useSelector} from "react-redux";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// використовувати const test = useAppSelector((state) => state.auth)

/*
    без використання use client
    put
    store.dispatch(login(data))
    get
    const test = store.getState().search.data
 */
