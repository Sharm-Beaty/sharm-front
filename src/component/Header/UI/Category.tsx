'use client'
import React, {FC, useCallback, useState} from "react";
import {Arrow} from "@/component/svg";
import {AnimatePresence, motion, Variants} from "framer-motion";


interface ICategoryProps {
    categoryId: string;
    className: string;
    title: string;
    content: any[];
    footer?: boolean;
    isHovered: boolean ;
}

const dropDownCategory: Variants = {
    open: {
        display: 'flex',
        opacity: [0, 1],
        height: ['min-content', 'fit-content'],
        flexDirection: 'column',
        transition: {
            delay: 0.2
        }
        // display: "flex",
    },
    close: {
        // background: '#3E90F0',
        opacity: [1, 0],
        height: 0,
    },
    hover: {
        display: 'flex',
        columnCount: 4,
    },
    listItemOpen: {
        opacity: [0, 1],
        y: [-100, 0]
    },
    listItemClose: {
        opacity: [0, 1],
        y: [0, -100]
    },
    static: {
        x: [0, 0],
        display: "none",
    },
    sticky: {
        left: 0,
        display: 'flex',
        // position: 'sticky',
        // zIndex:1000,
    },
    openUnderline: {
        width: ['0%', '100%'],
    },
    closeUnderline: {
        width: ['100%', '0%',],
    },

};


const Category: FC<ICategoryProps> = ({isHovered, categoryId, title, content, footer, className}) => {
    const [isCategoryOpen, setCategoryOpen] = useState(false);

    const toggleAccordion = useCallback(() => {
        setCategoryOpen((isOpen) => !isOpen);
    }, []);
    console.log(isHovered)
    const renderContentItems = () => content.map((child: any, index: number) => (
        <motion.li
            exit={{ display: 'none' }}
            transition={{ delay: 0.3 + index / 50 }}
            animate={isHovered ? 'listItemOpen' : 'listItemClose'}
            key={child.id}
            variants={dropDownCategory}
        >
            {child.name}
        </motion.li>
    ));

    const btnClass = `category ${isCategoryOpen ? "active" : ""}`;
    const arrowClass = `arrow-svg ${isCategoryOpen ? "" : "rotate"}`;

    return (
        <motion.div className="category__section">
            <button
                className={btnClass}
                onClick={toggleAccordion}
            >
                <p className="category__title">{title}</p>
                <Arrow className={arrowClass}/>
            </button>
            <AnimatePresence>
                <motion.div className="category__content">
                    <ul>
                        {isHovered && renderContentItems()}
                    </ul>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Category;
