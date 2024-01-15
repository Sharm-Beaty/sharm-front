import React, {forwardRef, ReactNode, RefObject, useCallback, useEffect, useRef} from "react";
import styles from "./ModalWindow.module.scss";
import {gsap} from 'gsap';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    padding?: string;
    className: string;
}


const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({
         className,
         isVisible,
         onClose,
         children,
         padding = "1rem 90px",
     }, ref) => {
        const modalElement = ref as RefObject<HTMLDivElement>;
        const targetRef = useRef(null);
        const modalStyle = {
            padding,
        };

        let tl = gsap.timeline();

        const hideModalWindow = useCallback(() => {
            if (modalElement?.current) {
                gsap.fromTo(modalElement?.current, {
                    opacity: 1,
                    y: 0,
                }, {
                    opacity: 0,
                    y: 100,
                    duration: 0.4
                });
            }
            setTimeout(() => {
                setTimeout(() => {
                    onClose();
                }, 400);
            });
        }, [modalElement, onClose])

        useEffect(() => {
                if (modalElement?.current) {
                    if (isVisible) {
                        tl.fromTo(modalElement?.current, {
                            opacity: 0,
                            x: -50
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 0.4
                        });
                    } else {
                        tl.fromTo(modalElement?.current, {
                            opacity: 1,
                            y: 0
                        }, {
                            opacity: 0,
                            y: -50,
                            duration: 0.4
                        });
                    }
                }
                const handleOutsideClick = (event: MouseEvent) => {
                    if (modalElement?.current && !modalElement?.current.contains(event.target as Node)) {
                        hideModalWindow();
                    }
                };

                document?.addEventListener("mousedown", handleOutsideClick);

                return () => {
                    document.removeEventListener("mousedown", handleOutsideClick);
                }
            },
            [isVisible, tl, onClose, modalElement, hideModalWindow]);

        const mouseDownAnimate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            event.stopPropagation();
            if (targetRef.current) {
                gsap.fromTo(targetRef.current, {
                    opacity: 1,
                    scale: 1.1
                }, {
                    opacity: 0.8,
                    scale: 0.7,
                    duration: 0.1
                })
            }
        }


        const mouseUpAnimate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            event.stopPropagation();
            if (targetRef.current) {
                gsap.fromTo(targetRef.current, {
                    opacity: 0.8,
                    scale: 0.7
                }, {
                    opacity: 1,
                    scale: 1.1,
                    duration: 0.1
                }).then(() => {
                    hideModalWindow();
                })
            } else {
                hideModalWindow();
            }
        }

        return (isVisible && (
            <>
                <div
                    ref={modalElement}
                    className={`${styles.modal} ${className}`}
                    style={modalStyle}>
                    <div
                        className={styles.modal_children}
                        onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                    <button
                        ref={targetRef}
                        onMouseDown={mouseDownAnimate}
                        onMouseUp={mouseUpAnimate}
                        className={styles["cross-stand-alone"]}>
                    </button>
                </div>
            </>
        ))
    }
);

Modal.displayName = 'Modal';
export default Modal;
