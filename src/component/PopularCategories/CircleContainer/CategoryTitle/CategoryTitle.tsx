'use client';
import React, {FC} from 'react';
import {motion, Variants} from "framer-motion";

export interface CategoryTitleProps {
    className?: string;
    title?: string;
    link?: string;
    children?: React.ReactNode;
    isHovered:boolean
}
const textAnimationVariants: Variants = {
    init: {
        opacity: 1,
        y: 0,
        z: 100,
        rotateX: 0,
    },
    hover: {
        originX: 0,
        x: [0, 5, 10,0],
        transition: {
            delay: 0.2,
            duration: 0.3,
            repeatType: "reverse"
        }
    }
}

const CategoryTitle: FC<CategoryTitleProps> = ({className = '', title = '', isHovered}) => {
    if (!title) {
        return <div className="error-message">No title provided</div>;
    }
    return (
        <>
            <motion.p
                className={className}
                variants={textAnimationVariants}
                initial={'init'}
            >
                {title}
            </motion.p>
        </>
    );
};

export default CategoryTitle;