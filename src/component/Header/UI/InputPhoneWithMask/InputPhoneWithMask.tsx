import React, {ChangeEvent, FC} from 'react';
import {applyMask} from "@/utils/masks";
import {motion} from "framer-motion";

interface InputPhoneWithMaskProps {
    onChangeHandler: (maskedValue:string) => void;
    className: string;
    value: string;
    mask: string;
    char: string;
}
const InputPhoneWithMask:FC<InputPhoneWithMaskProps> = ({ mask, char, className,value , onChangeHandler }) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!mask) return
        const rawValue = event.target.value;
        const maskedValue = applyMask(rawValue, String(mask), char)
        onChangeHandler(maskedValue);
    };

    return (
        <input
            className={className}
            value={value}
            onChange={handleChange}
            placeholder={String(mask)}
        />
    );
};

export default InputPhoneWithMask;
