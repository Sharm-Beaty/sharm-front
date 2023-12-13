import React, {FC, useCallback, useState} from "react";
import {allCategories} from "@/mock/mockForHeader";
import Category from "@/component/Header/UI/Category";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {Arrow} from "@/component/svg";

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
    initialUnderline: {
        width: 0,
    },
    displaySelectedCategory: {
        // background: 'pink',
        // width: '100%',
        // height: '200px',
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: '-100px',
        zIndex: -1,
        opacity: 1,
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
    const renderContentItems = (item) => item.children.map((child: any, index: number) => (
        <motion.li
            className={'sub-category'}
            exit={{opacity: 0}}
            transition={{delay: 0.3 + index / 50}}
            animate={hoveredItem ? 'listItemOpen' : 'listItemClose'}
            key={child.id}
            variants={dropDownCategory}
        >
            {child.name}
        </motion.li>
    ));


    const showCategory = (item) => {
        setHoveredItem(item.id)
        setShowedCategory(renderContentItems(item))
    }
    console.log(allCategories)
    return (
        <>
            <AnimatePresence>
            <motion.ul
                className={`categories-container ${className}`}
                transition={{type: 'spring'}}
                style={{
                    opacity: styleProps.opacity,
                    height: styleProps.height,
                }}
                onMouseLeave={() => setHoveredItem(null)}
            >
                {allCategories.map((item) => (
                    <motion.li
                        key={item.id}
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', bounce: 0.2}}
                        onMouseEnter={() => showCategory(item)}
                    >
                        <motion.div className="category__section">
                            <button
                                className={btnClass}
                                onClick={toggleAccordion}
                            >
                                <p className="category__title">{item.name}</p>
                                <motion.div
                                    initial={'initialUnderline'}
                                    exit={'closeUnderline'}
                                    animate={hoveredItem == item.id ? 'openUnderline' : ''}
                                    variants={dropDownCategory}
                                    className={'background-line'}>
                                </motion.div>
                                <Arrow className={arrowClass}/>
                            </button>
                        </motion.div>
                    </motion.li>
                ))}
                {<motion.div
                    animate={hoveredItem ? 'displaySelectedCategory' : ''}
                    initial={{
                        opacity: 0,
                        // height:'fit-content'
                    }}
                    variants={dropDownCategory}
                    className="test-block">
                    {hoveredItem && showedCategory}
                </motion.div>}
            </motion.ul>
            </AnimatePresence>
        </>
    );
};

export default AllCategories;