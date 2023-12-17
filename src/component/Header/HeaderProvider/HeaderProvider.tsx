'use client'
import React, {useEffect, useReducer, useRef} from "react";
import {headerReducer, initialState, HeaderContext} from "@/component/Header/HeaderProvider/HeaderContext";
import {useScreenSizeChange} from "@/hooks/useScreenSizeChange";
import {useMotionScroll} from "@/hooks/useMotionScroll";

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(headerReducer, initialState);

    useScreenSizeChange(dispatch);
    useMotionScroll(dispatch);

    // console.log(state);
    return (
        <HeaderContext.Provider
            value={{state, dispatch}}>
            {children}
        </HeaderContext.Provider>
    );
};