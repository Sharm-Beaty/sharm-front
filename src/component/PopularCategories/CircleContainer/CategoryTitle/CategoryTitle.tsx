'use client';
import React, {FC} from 'react';
import {motion, Variants} from "framer-motion";
import {CategoryTitleProps} from "@/component/PopularCategories/src/interface";

const textAnimationVariants: Variants = {
    init: {
        opacity: 1,
        y: 0,
        z: 100,
        rotateX: 0,
    },
    hover: {
        originX: 0,
        // x: [0, 5, 10,],
        textShadow: '0.5px 0.5px 4px black',
        transition: {
            delay: 0.2,
            duration: 0.3,
            repeatType: "reverse"
        }
    }
}

const CategoryTitle: FC<CategoryTitleProps> = ({className = '', title = ' ',link = '#', isHovered}) => {
    return (
        <>
            <motion.a
                className={className}
                style={{
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: '#828282'
                }}
                variants={textAnimationVariants}
                initial={'init'}
                animate={isHovered ? 'hover' : 'init'}
                href={link}
            >
                {title}
            </motion.a>
        </>
    );
};

export default CategoryTitle;