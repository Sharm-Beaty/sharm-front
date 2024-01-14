import React, {FC, ReactNode, useEffect, useRef} from "react";
import styles from "./ModalWindow.module.scss";
import {gsap} from 'gsap';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    padding?: string;
    className: string;
}



const Modal: FC<ModalProps> = ({
                                   className,
                                   isVisible,
                                   onClose,
                                   children,
                                   padding = "1rem 90px",
                               }) => {
    const modalElement = useRef<HTMLDivElement | null>(null);


    let tl = gsap.timeline();

    useEffect(() => {
            if (modalElement.current) {
                if (isVisible) {
                    tl.fromTo(modalElement.current, {
                        opacity: 0,
                        x: -50
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.4
                    });
                } else {
                    tl.fromTo(modalElement.current, {
                        opacity: 1,
                        y: 0
                    }, {
                        opacity: 0,
                        y: -50,
                        duration: 0.4
                    });
                }
            }
        },
        [isVisible, tl]);

    const modalStyle = {
        padding,
    };

    return (isVisible && (
        <>
            <div ref={modalElement} className={`${styles.modal} ${className}`} style={modalStyle}>
                <div className={styles.modal_children} onMouseLeave={onClose} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    ))
};

export default Modal;
