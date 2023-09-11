import {useState, useRef, RefObject} from "react";

export const getRefValue = <C,>(ref: RefObject<C>) => {
    return ref.current as C;
};

export const useStateRef = <V,>(
    defaultValue: V
): [V, (value: V) => void, RefObject<V>] => {
    const ref = useRef(defaultValue);
    const [state, _setState] = useState(defaultValue);
    const setState = (value: V) => {
        _setState(value);
        ref.current = value;
    };
    return [state, setState, ref];
};
