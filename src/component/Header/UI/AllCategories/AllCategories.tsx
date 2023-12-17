import React, {FC, useCallback, useState} from "react";
import {allCategories, ICategory} from "@/mock/mockForHeader";
import {AnimatePresence, motion, Variants} from "framer-motion";
import styles from './AllCategoriesDesktop.module.scss';

const dropDownCategory: Variants = {
    open: {
        display: 'flex',
        opacity: [0, 1],
        height: ['min-content', 'fit-content'],
        flexDirection: 'column',
        transition: {
            delay: 0.2
        }
    },
    close: {
        opacity: [1, 0],
        height: 0,
    },
    hover: {
        display: 'flex',
        columnCount: 4,
    },
    listItemOpen: {
        opacity: [0, 1],
        y: [10, 0]
    },
    listItemClose: {
        opacity: [0, 1],
        y: [0, 10]
    },
    static: {
        x: [0, 0],
        display: "none",
    },
    sticky: {
        left: 0,
        display: 'flex',
    },
    openUnderline: {
        width: ['0%', '100%'],
    },
    closeUnderline: {
        width: ['100%', '0%',],
    },
    initialUnderline: {
        width: 0,
    },
    displaySelectedCategory: {
        zIndex: 9999,
        opacity: 1,
        height:[0, 225],
    },
    hideSelectedCategory: {
        zIndex: -1,
        height:[255, 0],
        opacity: [1, 0],
    },

};

const AllCategories: FC<{ className: string, styleProps: any }> = ({className, styleProps}) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [showedCategory, setShowedCategory] = useState<any | null>(null);
    const [isCategoryOpen, setCategoryOpen] = useState(false);

    const btnClass = `category ${isCategoryOpen ? "active" : ""}`;
    const arrowClass = `arrow-svg ${isCategoryOpen ? "" : "rotate"}`;
    const toggleAccordion = useCallback(() => {
        setCategoryOpen((isOpen) => !isOpen);
    }, []);
    const renderContentItems = (item:ICategory) => item.children.map((child: any, index: number) => (
        <motion.li
            className={styles['sub-category']}
            exit={{opacity: 0}}
            transition={{delay: 0.3 + index / 50}}
            animate={hoveredItem ? 'listItemOpen' : 'listItemClose'}
            key={child.id}
            variants={dropDownCategory}
        >
            {child.name}
        </motion.li>
    ));


    const showCategory = (item:ICategory) => {
        setHoveredItem(item.id)
        setShowedCategory(renderContentItems(item))
    }
    return (
        <>
            <AnimatePresence>
                <motion.ul
                    className={`${styles['categories-container']} ${className}`}
                    transition={{type: 'spring'}}
                    style={{
                        opacity: styleProps.opacity,
                        height: styleProps.height,
                        display: (styleProps.height <= 5 ? 'none' : 'flex' )
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {allCategories.map((item) => (
                        <motion.li
                            className={styles['category-item']}
                            key={item.id}
                            whileHover={{scale: 1.1}}
                            transition={{type: 'spring', bounce: 0.2}}
                            onMouseEnter={() => showCategory(item)}
                        >
                            <motion.div className={styles["category__section"]}>
                                <p className={styles["category__title"]}>{item.name}</p>
                            </motion.div>
                        </motion.li>
                    ))}
                    {<motion.div
                        animate={hoveredItem ? 'displaySelectedCategory' : ''}
                        exit={{
                            opacity: [1, 0],
                            zIndex:-1,
                        }}
                        initial={{
                            opacity: 0,
                            zIndex:-1,
                        }}
                        variants={dropDownCategory}
                        className={styles["display-hovered-category"]}>
                        {hoveredItem && showedCategory}
                    </motion.div>}
                </motion.ul>
            </AnimatePresence>
        </>
    );
};

export default AllCategories;