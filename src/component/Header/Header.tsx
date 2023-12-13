'use client'
import React, {useEffect, useReducer, useRef} from 'react';
import Image from "next/image";
import "./Header.scss"
import "./refactor.scss"
import "./sandboxStyles.scss"
import {ActiveLink} from "../UI/ActiveLink/ActivLink";
import {Search} from "@/component/svg/Search";
import {Menu} from "@/component/Header/Menu/Menu";
import {MobileMenu} from "@/component/Header/MobileMenu/MobileMenu";
import {Line} from "@/component/UI/Line/Line";
import PhoneLinkComponent from "@/component/Header/UI/PhoneLinkComponent";
import TopBarListComponent from "@/component/Header/UI/TopBarListComponent";
import LanguageToggleComponent from "@/component/Header/UI/LanguageToggleComponent";
import {motion, useAnimate, useCycle, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {headerReducer, initialState} from "@/component/Header/HeaderProvider/HeaderContext";
import AllCategories from "@/component/Header/UI/AllCategories";
import {Navigation} from "@/component/Header/UI/Navigation";
import {useDimensions} from "@/component/Header/hooks/useDimensions";

// Animation values
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

const TopBarHeader = ({styleProps}: { styleProps: any }) => (
    <motion.div
        className="top-bar-header"
        transition={{type: 'spring'}}
        style={{
            opacity: styleProps.opacity,
            height: styleProps.height,
        }}
    >
        <PhoneLinkComponent/>
        <TopBarListComponent/>
        <LanguageToggleComponent/>
    </motion.div>
);
export const Logo = ({styleProps}: { styleProps: any }) => {
    const [scope, animate] = useAnimate()
    const ref = useRef(null)
    let width = styleProps.mainHeaderHeightDesktop.current
    let height = styleProps.imageHeightTransform.current
    useEffect(() => {


    }, [height, width])

    useMotionValueEvent(styleProps.imageHeightTransform, "change", (latest) => {

        // console.log(ref)

        const {current} = ref;
        if (current) {
            const image = current.querySelector('img');
            image.height = latest;
            image.width = styleProps.mainHeaderHeightDesktop.current;
            animate(image, {
                height: latest,
                width: Math.floor(latest * 2),
                transition: {
                    duration: 0.1
                }
            })
        }
        height = latest;
    })
    // useMotionValueEvent(styleProps.mainHeaderHeightDesktop, "change", (latest) => {
    //     console.log(width)
    //     width = latest
    // })
    return (<div ref={ref} className={'logo-wrapper'}>
        <Image className="logo-top-bar-header"
               src={"/logo.png"}
               alt={"logo"}
               width={200}
               height={height}

        />
    </div>)


}

const SearchBox = ({styleProps}: { styleProps: any }) => (
    <motion.div
        className="search"
        style={{
            x: styleProps.moveElementToRightX,
        }}
    >
        <Search styleProps={styleProps}/>
        <motion.input
            style={{
                borderBottom: '1px solid',
                borderBottomColor: styleProps.borderBottomColorHide
            }}
            type="test"
            placeholder="Search"
        />
    </motion.div>
);

const MainHeader = ({state, styleProps, toggleOpen}: { styleProps: any, state: any, toggleOpen: any }) => {
    console.log(state)
        return (<motion.div
            className="main-header"
            style={{
                height: styleProps.mainHeaderHeight,
                borderBottomColor: styleProps.borderBottomColor,
                borderBottom: '1px solid',
            }}
        >
            <MobileMenu toggleOpen={toggleOpen}/>

            <SearchBox styleProps={styleProps}/>
            <Logo styleProps={styleProps}/>

            <motion.div
                style={{
                    // state.currentScreen === 'DESKTOP' ?  x:styleProps.moveElementToLeftX : x: 0,
                    x: styleProps.moveElementToLeftX,
                }}
                className="user-actions-header"
            >
                <Search styleProps={styleProps}/>
                <Image className="person" src={"/person.fill.png"} alt={"logo"} width={19} height={19}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                        d="M6.54686 15.5968C6.92466 15.5968 7.23093 15.2905 7.23093 14.9127C7.23093 14.5349 6.92466 14.2286 6.54686 14.2286C6.16906 14.2286 5.86279 14.5349 5.86279 14.9127C5.86279 15.2905 6.16906 15.5968 6.54686 15.5968Z"
                        stroke="#363636" strokeWidth="1.58416" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M14.0716 15.5968C14.4494 15.5968 14.7557 15.2905 14.7557 14.9127C14.7557 14.5349 14.4494 14.2286 14.0716 14.2286C13.6938 14.2286 13.3876 14.5349 13.3876 14.9127C13.3876 15.2905 13.6938 15.5968 14.0716 15.5968Z"
                        stroke="#363636" strokeWidth="1.58416" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M1.07422 1.23132H3.81049L5.6438 10.391C5.70635 10.7059 5.87768 10.9888 6.12781 11.1902C6.37793 11.3915 6.6909 11.4985 7.01193 11.4923H13.6611C13.9821 11.4985 14.2951 11.3915 14.5452 11.1902C14.7953 10.9888 14.9667 10.7059 15.0292 10.391L16.1237 4.65166H4.49456"
                        stroke="#363636" strokeWidth="1.58416" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.div>
        </motion.div>)
    }
;

export const Header = () => {
    const [state] = useReducer(headerReducer, initialState);
    const {scrollY} = useScroll();
    const styleProps = getStyleProps(scrollY, state);
    // const [isOpen, toggleOpen] = useCycle(false, true);
    // const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {  // this check is here for server side rendering
    //         if (isOpen) {
    //             // disable scrolling when the nav is open
    //             document.body.style.overflow = 'hidden';
    //         } else {
    //             // re-enable scrolling when the nav is closed
    //             document.body.style.overflow = 'auto';
    //         }
    //     }
    //
    //     // clean up function
    //     return () => {
    //         if (typeof window !== 'undefined') {
    //             document.body.style.overflow = 'auto';
    //         }
    //     };
    // }, [isOpen]);
    return (
        <header>
            <div className="header-wrap">
                <TopBarHeader styleProps={styleProps}/>
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                >
                    <MainHeader toggleOpen={toggleOpen} state={state} styleProps={styleProps}/>
                    <AllCategories styleProps={styleProps} className={'test'}/>
                </motion.nav>
            </div>
        </header>
);
};
