'use client'
import React, {useRef} from 'react';
import {MotionValue, useScroll, useTransform} from "framer-motion";
import AllCategories from "@/component/Header/UI/AllCategories/AllCategories";
import MobileMenuRefactor from "@/component/Header/MobileMenuRefactor/MobileMenuRefactor";
import {useResizeObserver} from "@/hooks/useResizeObserver";
import TopBarHeader from "@/component/Header/UI/TopBarHeader/TopBarHeader";
import MainHeader from "@/component/Header/UI/MainHeader/MainHeader";
import styles from "./Header.module.scss";

const offsetYS = [50, 400];
const topHeaderOpacityValues = [1, 0];
const topHeaderHeightValues = [60, 0];
const imageHeightValues = [100, 50];
const imageWidthValues = [200, 100];
const mainHeaderHeightDesktop = [150, 60];
const mainHeaderHeightMobile = [60, 50];
const borderColorsValues = ['#fff', '#B8B8B8'];
const hideBorderColorsValues = ['#B8B8B8', '#fff'];
const moveElementX = [0, 150];
const moveElementToRight = [0, 75];
const moveElementToLeft = [0, -75];

export type StylePropsType = {
    height: MotionValue,
    imageHeightTransform: MotionValue,
    imageWidthTransform: any,
    mainHeaderHeightDesktop: any,
    scrollY: MotionValue,
    borderBottomColor:any,
    mainHeaderHeight:any,
    opacity:any,
    topHeaderOpacityValues:any,
    borderBottomColorHide:any,
    moveElementToRightX:any,
    moveElementToLeftX:any,
};
export const useGetStyleProps = (scrollY: MotionValue) => {
    const height = useTransform(scrollY, offsetYS, topHeaderHeightValues);
    const imageHeightTransform = useTransform(scrollY, offsetYS, imageHeightValues);
    const imageWidthTransform = useTransform(scrollY, offsetYS, imageHeightValues);
    const borderBottomColor = useTransform(scrollY, offsetYS, borderColorsValues);
    const borderBottomColorHide = useTransform(scrollY, offsetYS, hideBorderColorsValues);
    const moveElementToRightX = useTransform(scrollY, offsetYS, moveElementToRight);
    const moveElementToLeftX = useTransform(scrollY, offsetYS, moveElementToLeft);
    const mainHeaderHeight = useTransform(scrollY, offsetYS, mainHeaderHeightDesktop );
    const opacity = useTransform(scrollY, offsetYS, topHeaderOpacityValues);

    return {
        scrollY,
        height,
        borderBottomColor,
        mainHeaderHeight,
        opacity,
        imageHeightTransform,
        imageWidthTransform,
        mainHeaderHeightDesktop,
        topHeaderOpacityValues,
        borderBottomColorHide,
        moveElementToRightX,
        moveElementToLeftX,
    };
};


export const Header = () => {
    const { scrollY } = useScroll();
    const styleProps = useGetStyleProps(scrollY);
    const headerRef = useRef(null);
    const isMobile = useResizeObserver(headerRef)// || window?.innerWidth <= 768;

    return (
        <header id={styles['header']}>
            <div className={styles['header-wrap']} ref={headerRef}>
                {!isMobile && (
                    <>
                        <TopBarHeader styleProps={styleProps} />
                        <MainHeader styleProps={styleProps} />
                        <AllCategories styleProps={styleProps} className={''} />
                    </>
                )}
            </div>
            {isMobile && <MobileMenuRefactor />}
        </header>
    );
};
