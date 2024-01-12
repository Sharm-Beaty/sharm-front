import React, {ChangeEvent, FC} from 'react';
import {applyMask} from "@/utils/masks";

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


// import React, {ChangeEvent, FC, useEffect, useRef} from "react";
// import styles from "./InputPhoneWithMask.module.scss"
// import {maskPhone} from "@/utils/masks";
//
// interface inputPhoneWithMaskProps {
//     inputMaskOnChangeHandle: (value: string) => void;
//     className: string;
//     value: string;
//     placeholder: boolean;
// }
//
// const InputPhoneWithMask: FC<InputPhoneWithMaskProps> = ({ value, placeholder, inputMaskOnChangeHandle, ...rest }) => {
//     const element = useRef<HTMLInputElement>(null);
//
//     const focused = (event: ChangeEvent<HTMLInputElement>) => {
//         if (!event.target.value) {
//             event.target.value = '+38 '
//         }
//     }
//
//     const unfocused = (event: ChangeEvent<HTMLInputElement>) => {
//         if(event.target.value === '+38 ') {
//             event.target.value = ''
//         }
//     }
//
//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const text = event.target.value;
//         const maskedValue = maskPhone(text);
//
//         if (maskedValue) {
//             console.log('test')
//             inputMaskOnChangeHandle(maskedValue);
//         }
//     }
//
//     return (
//         <input
//             ref={element}
//             onFocus={focused}
//             onBlur={unfocused}
//             onChange={handleChange}
//             value={value}
//             placeholder={placeholder ? '+38 (___) ___ __ __' : 'Введіть номер телефону'}
//             {...rest}
//         />
//     )
// }
//
// export default InputPhoneWithMask;