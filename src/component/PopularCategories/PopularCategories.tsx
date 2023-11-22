'use client';
import React, {FC} from 'react';
import './PopularCategories.scss';
import {PopularCategoriesProps} from "@/component/PopularCategories/src/interface";
import CircleContainer from "@/component/PopularCategories/CircleContainer/CircleContainer";
import {motion} from 'framer-motion'


const PopularCategories: FC<PopularCategoriesProps> = ({className = '', categories}) => {
    return (
        <>
            <motion.section
                id={'popular-categories'}
                className={className}>
                {categories.map((category) => (
                    <motion.div
                        style={{
                            position: "relative"
                        }}
                        key={category.id}
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: [1, 1.1, 1.2, 1]}}
                    >
                        <CircleContainer
                            category={category}/>
                    </motion.div>
                ))}
            </motion.section>
        </>
    );
};

export default PopularCategories;