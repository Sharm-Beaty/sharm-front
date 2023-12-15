import * as React from "react";
import {ReactNode} from "react";
import {motion} from "framer-motion";
import {MenuItem} from "./MenuItem";
import {allCategories} from "@/mock/mockForHeader";
import PhoneLinkComponent from "@/component/Header/UI/PhoneLinkComponent";
import LanguageToggleComponent from "@/component/Header/UI/LanguageToggleComponent";
import {Love} from "@/component/svg/Love";
import {Cart} from "@/component/svg/Cart";
import {Person} from "@/component/svg/Person";
import SearchBox from "@/component/Header/UI/SearchBox";
import styles from "../MobileMenuRefactor/MobileMenuRefactor.module.scss";

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};
const variantsItems = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const interactionUserActions = {
    whileHover: {scale: 0.95},
    whileTap: {scale: 0.9}
};
const interactionCategoryContainer = {
    whileHover: {scale: 1},
    whileTap: {scale: 1}
};
const interactionSettings = {
    whileHover: {scale: 1.1, transformOrigin: 0},
    whileTap: {scale: 0.95}
};

type InteractionSettings = {
    whileHover?: { scale: number; originX?: number; originY?: number | string },
    whileTap?: { scale: number }
};

type AnimatedNavItemProps = {
    className?: string;
    children: ReactNode;
    interactionSettings?: InteractionSettings;
};

const AnimatedNavItem: React.FC<AnimatedNavItemProps> = ({children, interactionSettings = {}, className}) => (
    <motion.li
        className={`${styles['mobile-nav-item']} ${className}`}
        variants={variantsItems}
        {...interactionSettings}
    >
        {children}
    </motion.li>
);
export const Navigation = () => (
    <motion.ul
        className={styles['mobile-nav-items']}
        variants={variants}
    >
        {/*SearchBox*/}
        <AnimatedNavItem>
            <SearchBox styleProps={{}}/>
        </AnimatedNavItem>
        {/*categories-container*/}
        <AnimatedNavItem className={styles['categories-container']}>
            {allCategories.map((item) => (
                <MenuItem className={''} item={item} key={item.id}/>
            ))}
        </AnimatedNavItem>

        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={`${styles['user-cart']} ${styles['user-action']}`}>
            <Cart/>
        </AnimatedNavItem>
        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={ `${styles['user-account']} ${styles['user-action']}`}>
            <Person/>
        </AnimatedNavItem>
        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={`${styles['user-wish-list']} ${styles['user-action']}`}>
            <Love/>
        </AnimatedNavItem>
        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={ styles['user-action']}>
            <PhoneLinkComponent/>
        </AnimatedNavItem>
        <AnimatedNavItem>
            <LanguageToggleComponent/>
        </AnimatedNavItem>
    </motion.ul>
);
