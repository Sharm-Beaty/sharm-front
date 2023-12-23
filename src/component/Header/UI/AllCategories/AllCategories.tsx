import React, {FC, useState} from "react";
import {allCategories, ICategory, IChild} from "@/mock/mockForHeader";
import {AnimatePresence, motion, Variants} from "framer-motion";
import styles from './AllCategoriesDesktop.module.scss';
import {StylePropsType} from "@/component/Header/Header";
import {useTranslations} from "use-intl";

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
        display: 'flex',
        zIndex: 9999,
        opacity: 1,
        height: [0, 225],
    },
    hideSelectedCategory: {
        zIndex: -1,
        height: [255, 0],
        opacity: [1, 0],
    },

};

interface AllCategoriesProps {
    className: string;
    styleProps: StylePropsType;
}

const AllCategories: FC<AllCategoriesProps> = ({className, styleProps}) => {
    const t = useTranslations('categories');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [showedCategory, setShowedCategory] = useState<React.ReactNode | null>(null);
    const renderContentItems = (item: ICategory) => item.children.map((child: IChild, index: number) => (
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
    const showCategory = (item: ICategory) => {
        setHoveredItem(item.id)
        setShowedCategory(renderContentItems(item))
    }
    //TODO: hide 'categories-container when styleProps.height <= 1
    return (
        <>
            <AnimatePresence>
                <motion.ul
                    className={`${styles["categories-container"]} ${className}`}
                    transition={{type: "spring"}}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {allCategories.map((item) => (
                        <motion.li
                            className={styles["category-item"]}
                            key={item.id}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            transition={{type: "spring", bounce: 0.2}}
                            onMouseEnter={() => showCategory(item)}
                        >
                            <motion.div className={styles["category__section"]}>
                                <p className={styles["category__title"]}>{item.localizationKey ? t(item.localizationKey) : item.name }</p>
                            </motion.div>
                        </motion.li>
                    ))}
                    {
                        <motion.div
                            animate={hoveredItem ? "displaySelectedCategory" : ""}
                            exit={{
                                opacity: [1, 0],
                                zIndex: -1,
                            }}
                            initial={{
                                opacity: 0,
                                zIndex: -1,
                            }}
                            variants={dropDownCategory}
                            className={styles["display-hovered-category"]}
                        >
                            {
                                hoveredItem && (showedCategory && <div className={styles["shadow"]}></div>)
                            }

                        </motion.div>
                    }
                </motion.ul>

            </AnimatePresence>
        </>
    );
};

export default AllCategories;