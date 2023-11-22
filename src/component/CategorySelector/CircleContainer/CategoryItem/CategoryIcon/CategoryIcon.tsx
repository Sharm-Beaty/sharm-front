'use client';
import {FC, useState} from 'react';
import Image from "next/image";
import {motion, LayoutGroup } from "framer-motion";
import {iconWrapperInitial} from "@/component/CategorySelector/src/animate-variants";
import {CategoryIconProps} from "@/component/CategorySelector/src/interface";


const CategoryIcon: FC<CategoryIconProps> = ({iconName = 'default_image', isHovered}) => {

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    return (
            <>
                <motion.div
                    layout
                    className={'image-shadow'}
                    variants={iconWrapperInitial}
                    initial={{borderRadius: 50,}}
                    animate={isHovered ? 'hover' : 'initial'}
                    // whileHover={{scale: 1}}
                    whileTap={{scale: 1}}
                >
                    {/*{isLoading && <Spinner />} /!* Отображение спиннера во время загрузки *!/*/}
                    {/*{isLoading && 'Loading ...'}*/}

                    <Image
                        className={'category-item-img'}
                        src={`/images-for-categories/${iconName}.jpg`}
                        alt={iconName}
                        width={50}
                        height={50}
                        onLoad={handleImageLoaded}
                    />
                </motion.div>
            </>
    );
};

export default CategoryIcon;