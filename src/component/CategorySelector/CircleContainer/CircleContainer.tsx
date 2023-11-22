'use client';
import {motion, Variants} from 'framer-motion'
import React, {FC, useState} from 'react';
import {TestProps} from "@/component/CategorySelector/src/interface";
import Image from "next/image";
import PulseComponent from "@/component/CategorySelector/PulseComponent/PulseComponent";
import CategoryTitle from "@/component/CategorySelector/CircleContainer/CategoryItem/CategoryTitle/CategoryTitle";

const wrapperVariants: Variants = {
    hover: {
        scale: 1.2,
        y: 12,
        transition: {
            type:'spring',
            duration: 0.3,
        }
    },
    tap: {
        scale: 1,
        transition: {duration: 0.1}
    }
}

const CircleContainer: FC<TestProps> = ({className = '', category}) => {

    const [isHovered, setIsHovered] = useState(false);

    const {icon, label} = category;
    if (!category || !icon || !label) {
        return <div>Category data is empty</div>;
    }

    const imagePath = `/images-for-categories/${icon}.jpg`;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={'hover'}
            whileTap={'tap'}
            variants={wrapperVariants}
            className={'category-item-container'}
        >
            <motion.div
                transition={{
                    type:'spring',
                    duration:0.3
                }}
                className={'wrapper-img'}
            >

                <PulseComponent isHovered={isHovered} delay={0.1} duration={0.9}/>
                <Image
                    className={'inner-img'}
                    src={imagePath}
                    alt={category.icon}
                    width={96}
                    height={96}
                    onError={(e) => {
                        if (e.currentTarget.src.endsWith('/images-for-categories/default_image.png')) {
                            // Если уже установлено изображение по умолчанию, не делаем ничего
                            return;
                        }
                        e.currentTarget.src = '/images-for-categories/default_image.png';
                    }}
                />
            </motion.div>
            <CategoryTitle isHovered={isHovered} title={category.label}/>
        </motion.div>
    );
};

export default CircleContainer;