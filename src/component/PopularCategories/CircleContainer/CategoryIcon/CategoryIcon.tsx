'use client';
import {FC, useState} from 'react';
import Image from "next/image";
import {CategoryIconProps} from "@/component/PopularCategories/src/interface";


const CategoryIcon: FC<CategoryIconProps> = ({className, iconName = 'default_image', isHovered}) => {

    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    return (
        <>
            <Image
                className={className}
                src={iconName}
                alt={iconName}
                width={96}
                height={96}
                onLoad={handleImageLoaded}
            />
        </>
    );
};

export default CategoryIcon;