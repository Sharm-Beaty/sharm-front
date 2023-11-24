'use client';
import {motion, MotionStyle, Variants} from 'framer-motion'
import React, {FC} from "react";
export interface PulseComponentProps {
    className?: string;
    isHovered:boolean;
    delay: number
    duration: number
    children?: React.ReactNode
}
const animationVariants: Variants = {
    onHover: {
        scale: [0.9, 1.2],
        zIndex: -1,
        opacity: [1, 0,],
    },
    onHoverEnd: {
        scale: [0],
        zIndex: 100,
        opacity: [0,],
    },

}
const PulseComponentStyle: MotionStyle = {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    border: '3px solid #828282',
    position: 'absolute',
    top: '50%',
    left: '50%',
    translateY: '-50%',
    translateX: '-50%',
}

const PulseComponent: FC<PulseComponentProps> = ({isHovered, delay, duration, children}) => {
    return (
        <motion.div
            className="pulse-component"
            variants={animationVariants}
            animate={isHovered ? 'onHover' : 'onHoverEnd'}
            style={{
                ...PulseComponentStyle,
                zIndex: -1,
            }}
            transition={{
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: 'loop',
                delay: delay,
                duration: duration,
            }}
        >
            {children}
        </motion.div>
    );
};

export default PulseComponent;