'use client';
import {FC, useState} from 'react';
import CategoryIcon from "@/component/CategorySelector/CircleContainer/CategoryItem/CategoryIcon/CategoryIcon";
import {motion} from "framer-motion";
import CategoryTitle from "@/component/CategorySelector/CircleContainer/CategoryItem/CategoryTitle/CategoryTitle";
import {CategoryItemProps} from "@/component/CategorySelector/src/interface";

const CategoryItem: FC<CategoryItemProps> = ({
                                                 id,
                                                 icon,
                                                 label,
                                                 className = '',
                                                 onHoverChange
                                             }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        onHoverChange(true, label);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        onHoverChange(false, label);
    };

    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            whileTap={{
                scale: 0.9,
                transition: {}
            }}
            transition={{
                type: "spring",
            }}
            className={'category-item-container'}
        >
            <CategoryIcon
                isHovered={isHovered}
                iconName={icon}/>
            <CategoryTitle
                isHovered={isHovered}
                title={label}>
            </CategoryTitle>
        </motion.div>
    );
};

export default CategoryItem;