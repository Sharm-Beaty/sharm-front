import {Dispatch, useEffect, useReducer} from "react";
import {HeaderAction} from "@/component/Header/HeaderProvider/HeaderContext";

export const BREAKPOINT_MOBILE_DESKTOP = 768;
export const FIRST_ENTRY = 0;

export const useScreenSizeChange = (dispatch: Dispatch<HeaderAction>) => {
    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            const { inlineSize } = entry.devicePixelContentBoxSize[FIRST_ENTRY];
            if (inlineSize < BREAKPOINT_MOBILE_DESKTOP) {
                dispatch({ type: 'SET_MOBILE' });
            } else {
                dispatch({ type: 'SET_DESKTOP' });
            }
        });
        observer.observe(document.body);
        return () => observer.disconnect();
    }, [dispatch]);
};