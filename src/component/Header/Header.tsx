'use client'
import React, {useEffect, useReducer, useRef, useState} from 'react';
import Image from "next/image";
import {useAnimate, useCycle, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {headerReducer, initialState} from "@/component/Header/HeaderProvider/HeaderContext";
import AllCategories from "@/component/Header/UI/AllCategories";
import MobileMenuRefactor from "@/component/Header/MobileMenuRefactor/MobileMenuRefactor";
import {useResizeObserver} from "@/component/Header/hooks/useResizeObserver";
import TopBarHeader from "@/component/Header/UI/TopBarHeader";
import MainHeader from "@/component/Header/UI/MainHeader";
import {Navigation} from "@/component/Header/UI/Navigation";
import styles from "./DesktopStyles.module.scss";
import {allCategories} from "@/mock/mockForHeader";
import {MenuItem} from "@/component/Header/UI/MenuItem";
import CategoryItems from "@/component/Header/UI/CategoryItems";

const offsetYS = [50, 400];
const topHeaderOpacityValues = [1, 0];
const topHeaderHeightValues = [60, 0];
const imageHeightValues = [100, 60];
const mainHeaderHeightDesktop = [150, 60];
const mainHeaderHeightMobile = [60, 50];
const borderColorsValues = ['#fff', '#B8B8B8'];
const hideBorderColorsValues = ['#B8B8B8', '#fff'];
const moveElementX = [0, 150];
const moveElementToRight = [0, 150];
const moveElementToLeft = [0, -150];

export const getStyleProps = (scrollY: any, state: any) => {
    const height = useTransform(scrollY, offsetYS, topHeaderHeightValues);
    const imageHeightTransform = useTransform(scrollY, offsetYS, imageHeightValues);
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

type StylePropsType = {
    mainHeaderHeightDesktop: any,
    imageHeightTransform: any,
    // other fields if any
};
export const Logo = ({styleProps}) => {
    const [scope, animate] = useAnimate();
    const ref = useRef(null);

    useEffect(() => {
        const {current} = ref;
        if (current) {
            const image = current.querySelector('img');
            animate(image, {
                height: styleProps.imageHeightTransform.current,
                width: styleProps.mainHeaderHeightDesktop.current * 2,
                transition: {duration: 0.1},
            });
        }
    }, [styleProps.imageHeightTransform, styleProps.mainHeaderHeightDesktop]);

    return (
        <div ref={ref} className={styles["logo-top-bar-header"]}>
            <Image
                className={styles.logoTopBarHeader}
                // className="logo-top-bar-header"
                src="/logo.png"
                alt="logo"
                width={200}
                height={styleProps.imageHeightTransform.current}
            />
        </div>
    );
};

export const Header = () => {
    const [state] = useReducer(headerReducer, initialState);
    const {scrollY} = useScroll();
    const styleProps = getStyleProps(scrollY, state);
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
