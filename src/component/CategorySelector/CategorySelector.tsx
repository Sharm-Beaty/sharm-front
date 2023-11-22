'use client';
import React, {FC} from 'react';
import './CategorySelector.scss';
import {CategorySelectorProps} from "@/component/CategorySelector/src/interface";
import CircleContainer from "@/component/CategorySelector/CircleContainer/CircleContainer";


const CategorySelector: FC<CategorySelectorProps> = ({className = '', categories}) => {
    return (
        <>
            <div
                className={className}>
                {categories.map((category) => (
                    <CircleContainer key={category.id} category={category}/>
                ))}
            </div>
        </>
    );
};

export default CategorySelector;