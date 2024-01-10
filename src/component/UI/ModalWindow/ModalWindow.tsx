import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./ModalWindow.module.scss";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  animationVariants?: Variants;
  size?: { width: string; height: string };
  targetElementSelector?: string; // ID or class selector
  withOverlay?: boolean;
  position?: { top: number; left: number };
  padding?: string;
}

const defaultVariants = {};

const Modal: FC<ModalProps> = ({
  isVisible,
  onClose,
  children,
  animationVariants,
  size,
  targetElementSelector,
  withOverlay,
  position,
  padding = "1rem 90px",
}) => {
  const [positionRelativeToTarget, setPositionRelativeToTarget] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (targetElementSelector) {
      const element = document.querySelector(targetElementSelector);
      if (element) {
        const rect = element.getBoundingClientRect();
        setPositionRelativeToTarget({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    } else {
      setPositionRelativeToTarget({
        top: position?.top || 0,
        left: position?.left || 0,
      });
    }
  }, [targetElementSelector, position]);

  const modalStyle = {
    width: size?.width || "auto",
    height: size?.height || "auto",
    top: `${positionRelativeToTarget.top}px`,
    left: `${positionRelativeToTarget.left}px`,
    padding,
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {withOverlay && (
            <div className={styles.overlay} onClick={onClose}></div>
          )}
          <motion.div
            className={styles.modal}
            style={modalStyle}
            variants={animationVariants || defaultVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseLeave={onClose}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modal_children}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
