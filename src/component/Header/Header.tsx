'use client'
import React, {useRef} from 'react';
import {MotionValue, useScroll, useTransform} from "framer-motion";
import AllCategories from "@/component/Header/UI/AllCategories/AllCategories";
import MobileMenuRefactor from "@/component/Header/MobileMenuRefactor/MobileMenuRefactor";
import TopBarHeader from "@/component/Header/UI/TopBarHeader/TopBarHeader";
import MainHeader from "@/component/Header/UI/MainHeader/MainHeader";
import styles from "./Header.module.scss";
import ModalWindow from "@/component/UI/ModalWindow/ModalWindow";

const offsetYS = [50, 400];
const topHeaderOpacityValues = [1, 0];
const topHeaderHeightValues = [72, 0];
const imageHeightValues = [100, 50];
const mainHeaderHeightDesktop = [100, 45];
const borderColorsValues = ['#fff', '#B8B8B8'];
const hideBorderColorsValues = ['#B8B8B8', '#fff'];
const moveElementToRight = [0, 75];
const moveElementToLeft = [0, -75];

export type StylePropsType = {
    height: MotionValue,
    imageHeightTransform: MotionValue,
    imageWidthTransform: MotionValue,
    mainHeaderHeightDesktop: number[],
    scrollY: MotionValue,
    borderBottomColor: MotionValue,
    mainHeaderHeight: MotionValue,
    opacity: MotionValue,
    topHeaderOpacityValues: number[],
    borderBottomColorHide: MotionValue,
    moveElementToRightX: MotionValue,
    moveElementToLeftX: MotionValue,
};
export const useGetStyleProps = (scrollY: MotionValue) => {
    const height = useTransform(scrollY, offsetYS, topHeaderHeightValues);
    const imageHeightTransform = useTransform(scrollY, offsetYS, imageHeightValues);
    const imageWidthTransform = useTransform(scrollY, offsetYS, imageHeightValues);
    const borderBottomColor = useTransform(scrollY, offsetYS, borderColorsValues);
    const borderBottomColorHide = useTransform(scrollY, offsetYS, hideBorderColorsValues);
    const moveElementToRightX = useTransform(scrollY, offsetYS, moveElementToRight);
    const moveElementToLeftX = useTransform(scrollY, offsetYS, moveElementToLeft);
    const mainHeaderHeight = useTransform(scrollY, offsetYS, mainHeaderHeightDesktop);
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


export const Header = ({locale}: { locale: string }) => {
    const {scrollY} = useScroll();
    const styleProps = useGetStyleProps(scrollY);
    const headerRef = useRef(null);

    return (
        <header id={styles['header']}>
            <div className={styles['header-wrap']} ref={headerRef}>
                <TopBarHeader locale={locale} styleProps={styleProps}/>
                <MainHeader styleProps={styleProps}/>
                <AllCategories styleProps={styleProps} className={''}/>
            </div>
            <MobileMenuRefactor/>
        </header>
    );
};
