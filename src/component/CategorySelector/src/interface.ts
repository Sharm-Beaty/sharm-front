import React from "react";

export interface CategorySelectorProps {
    className?: string;
    categories:Category[]
}

export interface CircleContainerProps {
    className?: string;
    children?: React.ReactNode;
    category: Category;
}

export interface CategoryItemProps {
    className?: string;
    id: number;
    icon: string;
    label: string;
    onHoverChange: (isHovered: boolean, key: string) => void
}

export interface CategoryIconProps {
    className?: string;
    iconName?: string;
    isHovered: boolean
}

export interface CategoryIconProps {
    className?: string;
    title?: string;
    children?: React.ReactNode;
    isHovered:boolean
}

export type Category = {
    id:number;
    icon:string;
    label:string;
}

export interface TestProps {
    className?: string;
    category: Category
}
export interface PulseComponentProps {
    className?: string;
    isHovered:boolean;
    delay: number
    duration: number
}