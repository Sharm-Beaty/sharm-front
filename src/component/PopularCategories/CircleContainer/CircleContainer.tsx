'use client';
import {motion, useAnimation, Variants} from 'framer-motion'
import React, {FC, useState} from 'react';
import PulseComponent from "@/component/PopularCategories/PulseComponent/PulseComponent";
import CategoryTitle from "@/component/PopularCategories/CircleContainer/CategoryTitle/CategoryTitle";
import CategoryIcon from "@/component/PopularCategories/CircleContainer/CategoryIcon/CategoryIcon";
import {Category} from "@/component/PopularCategories/PopularCategories";

export interface CircleContainerProps {
    className?: string;
    children?: React.ReactNode;
    category: Category;
}
const wrapperAnimationVariants: Variants  = {
    init: {
        scale: 0.9
    },
    hover: {
        scale: [1, 0.85, 1.1, 1 ],
        transition: {
            duration: 0.6,
            type: "tween",
            repeatType:'loop'
        }
    },
}

const CircleContainer: FC<CircleContainerProps> = ({className = '', category}) => {
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const hoverDivAnimationControls = useAnimation()

    const {icon, label} = category;
    if (!category || !icon || !label) {
        return <div className="error-message">Invalid category data</div>;
    }



    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <motion.div
            className={'category-item-container'}
        >
            <motion.div
                className={'wrapper-img'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={hoverDivAnimationControls}
                initial={{scale: 1}}
                onHoverStart={() => {
                    if (!isAnimationPlaying) {
                        setIsAnimationPlaying(true)
                        hoverDivAnimationControls.start(wrapperAnimationVariants.hover)
                    }
                }}
                onAnimationComplete={() => {
                    setIsAnimationPlaying(false)
                }}
                whileTap={{
                    scale: [1, 0.9, 0.8, ],
                    transition: {
                        duration: 0.19,
                        type: "spring",
                    }
                }}
            >
                <PulseComponent
                    isHovered={isHovered}
                    delay={0.05}
                    duration={0.9}
                />
                <CategoryIcon
                    className={'inner-img'}
                    iconName={icon}
                    isHovered={isHovered}/>
            </motion.div>
            <CategoryTitle
                className={'category-title'}
                isHovered={isHovered}
                title={label}/>
        </motion.div>
    );
};

export default CircleContainer;