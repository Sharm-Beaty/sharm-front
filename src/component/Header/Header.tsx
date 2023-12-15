'use client'
import React, {useReducer, useRef} from 'react';
import {motion, MotionValue, useCycle, useScroll, useTransform} from "framer-motion";
import {headerReducer, initialState} from "@/component/Header/HeaderProvider/HeaderContext";
import AllCategories from "@/component/Header/UI/AllCategories";
import MobileMenuRefactor from "@/component/Header/MobileMenuRefactor/MobileMenuRefactor";
import {useResizeObserver} from "@/component/Header/hooks/useResizeObserver";
import TopBarHeader from "@/component/Header/UI/TopBarHeader";
import MainHeader from "@/component/Header/UI/MainHeader";
import styles from "./DesktopStyles.module.scss";

const offsetYS = [50, 400];
const topHeaderOpacityValues = [1, 0];
const topHeaderHeightValues = [60, 0];
const imageHeightValues = [100, 60];
const imageWidthValues = [200, 100];
const mainHeaderHeightDesktop = [150, 60];
const mainHeaderHeightMobile = [60, 50];
const borderColorsValues = ['#fff', '#B8B8B8'];
const hideBorderColorsValues = ['#B8B8B8', '#fff'];
const moveElementX = [0, 150];
const moveElementToRight = [0, 150];
const moveElementToLeft = [0, -150];

type StylePropsType = {
    height: any,
    imageHeightTransform: any,
    imageWidthTransform: any,
    mainHeaderHeightDesktop: any,
    scrollY: any,
    // Add your other transformed values types here ...
};
export const useGetStyleProps = (scrollY: MotionValue) => {
    const height = useTransform(scrollY, offsetYS, topHeaderHeightValues);
    const imageHeightTransform = useTransform(scrollY, offsetYS, imageHeightValues);
    const imageWidthTransform = useTransform(scrollY, offsetYS, imageHeightValues);
    const borderBottomColor = useTransform(scrollY, offsetYS, borderColorsValues);
    const borderBottomColorHide = useTransform(scrollY, offsetYS, hideBorderColorsValues);
    const moveElementToRightX = useTransform(scrollY, offsetYS, moveElementToRight);
    const moveElementToLeftX = useTransform(scrollY, offsetYS, moveElementToLeft);
    const mainHeaderHeight = useTransform(
        scrollY,
        offsetYS,
        mainHeaderHeightDesktop
    );
    const opacity = useTransform(scrollY, offsetYS, topHeaderOpacityValues);

    return {
        scrollY,
        height,
        borderBottomColor,
        mainHeaderHeight,
        opacity,
        imageHeightTransform,
        mainHeaderHeightDesktop,
        topHeaderOpacityValues,
        borderBottomColorHide,
        moveElementToRightX,
        moveElementToLeftX,
    };
};

export const Logo = ({styleProps}:{ styleProps: StylePropsType }) => {
    const height = useTransform(styleProps.scrollY, offsetYS, imageHeightValues);
    const width = useTransform(styleProps.scrollY, offsetYS, imageWidthValues);

    return (
        <div className={styles["logo-top-bar-header"]}>
            <div className={styles["logo-top-bar-header"]}>
                <motion.img
                    style={{
                        height: height,
                        width: width
                    }}
                    transition={{duration: 0.01}}
                    className={styles.logoTopBarHeader}
                    src="/logo.png"
                    alt="logo"
                />
            </div>
        </div>
    );
};

export const Header = () => {
    const [state] = useReducer(headerReducer, initialState);
    const {scrollY} = useScroll();
    const styleProps = useGetStyleProps(scrollY);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const headerRef = useRef(null);
    const isMobile = useResizeObserver(headerRef) || window?.innerWidth <= 768;
    return (
        <header id={styles['header']}>
            <div
                className={styles["header-wrap"]}
                ref={headerRef}>
                {
                    !isMobile && <>
                    <TopBarHeader styleProps={styleProps}/>
                        <MainHeader toggleOpen={toggleOpen} state={state} styleProps={styleProps}/>
                        {/*<Navigation/>*/}
                        <AllCategories styleProps={styleProps} className={''}/>
                    </>
                }

            </div>
            {isMobile && <MobileMenuRefactor/>}
        </header>
    );
};
