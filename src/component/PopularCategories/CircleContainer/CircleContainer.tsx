'use client';
import {motion, useAnimation, Variants} from 'framer-motion'
import React, {FC, useState} from 'react';
import {TestProps} from "@/component/PopularCategories/src/interface";
import PulseComponent from "@/component/PopularCategories/PulseComponent/PulseComponent";
import CategoryTitle from "@/component/PopularCategories/CircleContainer/CategoryTitle/CategoryTitle";
import CategoryIcon from "@/component/PopularCategories/CircleContainer/CategoryIcon/CategoryIcon";

const wrapperAnimationVariants: Variants  = {
    init: {
        scale: 0.9
    },
    hover: {
        scale: [1, 0.75, 1.25, 1 ],
        transition: {
            duration: 0.6,
            type: "tween",
            repeatType:'loop'
        }
    },
}

const CircleContainer: FC<TestProps> = ({className = '', category}) => {
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const hoverDivAnimationControls = useAnimation()

    const {icon, label} = category;
    if (!category || !icon || !label) {
        return <div>Category data is empty</div>;
    }

    const imagePath = `/images-for-categories/${icon}.jpg`;

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
                    iconName={imagePath}
                    isHovered={isHovered}/>
            </motion.div>
            <CategoryTitle
                isHovered={isHovered}
                title={label}/>
        </motion.div>
    );
};

export default CircleContainer;