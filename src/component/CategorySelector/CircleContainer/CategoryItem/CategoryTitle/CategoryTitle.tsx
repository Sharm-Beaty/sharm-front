'use client';
import React, {FC} from 'react';
import { motion } from "framer-motion";
import {variantsCategoryTitle} from "@/component/CategorySelector/src/animate-variants";
import {initialCategoryTitle} from "@/component/CategorySelector/src/animations-initials";
import {CategoryIconProps} from "@/component/CategorySelector/src/interface";


const CategoryTitle: FC<CategoryIconProps> = ({title = ' ', isHovered}) => {
    return (
        <>
            <motion.h5
                initial={initialCategoryTitle()}
                animate={variantsCategoryTitle(isHovered)}
            >
                {title}
            </motion.h5>
        </>
    );
};

export default CategoryTitle;