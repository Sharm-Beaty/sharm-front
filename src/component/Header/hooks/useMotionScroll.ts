import {Dispatch, useEffect, useReducer} from "react";
import {HeaderAction} from "@/component/Header/HeaderProvider/HeaderContext";
import { motion, useScroll } from "framer-motion"

export const useMotionScroll = (dispatch: Dispatch<HeaderAction>) => {
    const {scrollY} = useScroll();

    useEffect(() => {
        console.log(scrollY)
        // dispatch({type: 'SET_MOBILE'});

    }, [scrollY]);
}