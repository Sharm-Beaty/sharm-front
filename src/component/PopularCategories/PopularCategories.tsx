'use client';
import React, {FC} from 'react';
import './PopularCategories.scss';
import CircleContainer from "@/component/PopularCategories/CircleContainer/CircleContainer";
import {motion} from 'framer-motion'

export type Category = {
    id:number;
    icon:string;
    label:string;
    link:string;
}
export interface PopularCategoriesProps {
    className?: string;
    categories:Category[]
}

const PopularCategories: FC<PopularCategoriesProps> = ({className = '', categories}) => {

    if (!Array.isArray(categories) || categories.length === 0) {
        return <div className="error-message">No categories available.</div>;
    }

    return (
        <>
            <motion.section
                id={'popular-categories'}
                className={className}>
                {categories.map((category) => (
                    <motion.a
                        href={category.link}
                        aria-label={category.label}
                        key={category.id}
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: [1, 1.1, 1.2, 1]}}
                    >
                        <CircleContainer
                            category={category}/>
                    </motion.a>
                ))}
            </motion.section>
        </>
    );
};

export default PopularCategories;