import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {allCategories} from "@/mock/mockForHeader";
import {Search} from "@/component/svg";
import PhoneLinkComponent from "@/component/Header/UI/PhoneLinkComponent";
import LanguageToggleComponent from "@/component/Header/UI/LanguageToggleComponent";
import Image from "next/image";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
const variantsItems = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};
export const Navigation = () => (
    <motion.ul
        className={'mobile-nav-items'}
        variants={variants}>
        <motion.li
            className={'mobile-nav-item'}
            variants={variantsItems}
            whileHover={{scale: 1.1, transformOrigin: 0}}
            whileTap={{scale: 0.95}}
        >
            <Search styleProps={{}}/>
            {/*<div className="icon-placeholder" style={style} />*/}
            {/*<div className="text-placeholder" style={style} />*/}
        </motion.li>
        {allCategories.map((item) => (
            <MenuItem item={item} key={item.id}/>
        ))}
        <motion.li
            className={'mobile-nav-item'}
            variants={variantsItems}
            whileHover={{scale: 1.1, transformOrigin: 0}}
            whileTap={{scale: 0.95}}
        >
            <motion.div
                className="user-actions-header"
            >
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
        </motion.li>
        <motion.li
            className={'mobile-nav-item'}
            variants={variantsItems}
            whileHover={{scale: 1.1, transformOrigin: 0}}
            whileTap={{scale: 0.95}}
        >
            <PhoneLinkComponent/>
        </motion.li>
        <motion.li
            className={'mobile-nav-item'}
            variants={variantsItems}
            whileHover={{scale: 1.1, transformOrigin: 0}}
            whileTap={{scale: 0.95}}
        >
            <LanguageToggleComponent/>
        </motion.li>
    </motion.ul>
);

