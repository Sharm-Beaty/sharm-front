import React, {useReducer, createContext, useContext, RefObject} from 'react'

export type HeaderState = {
    title: string,
    isBurgerOpen: boolean
    currentScreen: string
    scrollPosition: number
};

export type HeaderAction =
    | { type: 'SET_TITLE', payload: string }
    | { type: 'TOGGLE_BURGER', payload: boolean }
    | { type: 'SET_MOBILE',}
    | { type: 'SET_DESKTOP',}
    | { type: 'SET_PROVIDER_REF', payload: RefObject<HTMLDivElement>}
    | { type: 'SET_SCROLL_POSITION', payload: boolean};

export const initialState: HeaderState = {
    title: '',
    isBurgerOpen: false,
    currentScreen: '',
    scrollPosition: Number(0),
};

export const headerReducer = (state: HeaderState, action: HeaderAction) => {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state,
                title: action.payload
            };
        case 'TOGGLE_BURGER':
            return {
                ...state,
                isBurgerOpen: !state.isBurgerOpen
            };
        case 'SET_DESKTOP':
            return {
                ...state,
                currentScreen: 'DESKTOP'
            };
        case 'SET_MOBILE':
            return {
                ...state,
                currentScreen: 'MOBILE'
            };
        case 'SET_SCROLL_POSITION':
            return {
                ...state,
                scrollPosition: Number(action.payload)
            };
        default:
            return state;
    }
};


export const HeaderContext = createContext<{
    state: HeaderState;
    dispatch: React.Dispatch<HeaderAction>;
}>({
    state: initialState,
    dispatch: () => null
});