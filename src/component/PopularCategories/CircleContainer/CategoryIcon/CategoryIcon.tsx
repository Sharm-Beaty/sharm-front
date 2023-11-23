'use client';
import {FC, useState} from 'react';
import Image from "next/image";

export interface CategoryIconProps {
    className?: string;
    iconName?: string;
    isHovered: boolean
}

const CategoryIcon: FC<CategoryIconProps> = ({className, iconName = 'default_image', isHovered}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    const imagePath = `/images-for-categories/${iconName}.jpg`;


    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    const handleImageError = (e:any) => {
        setImageError(true);
        setIsLoading(false);

    };
    if (imageError) {
        return <Image
            className={className}
            src={`/images-for-categories/default_image.jpg`}
            alt={'Image loading error'}
            width={80}
            height={80}
        />;
    }

    return (
        <>
            {isLoading && <div className="loading-indicator">Loading...</div>}
            <Image
                className={className}
                src={imagePath}
                alt={iconName}
                width={80}
                height={80}
                onLoad={handleImageLoaded}
                onError={handleImageError}
            />
        </>
    );
};

export default CategoryIcon;