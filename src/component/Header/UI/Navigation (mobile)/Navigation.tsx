import * as React from "react";
import {ReactNode} from "react";
import {motion, Variants} from "framer-motion";
import {MenuItem} from "../MenuItem (mobile)/MenuItem";
import {allCategories} from "@/mock/mockForHeader";
import PhoneLinkComponent from "@/component/Header/UI/PhoneLinkComponent/PhoneLinkComponent";
import {Love} from "@/component/svg/Love";
import {Cart} from "@/component/svg/Cart";
import {Person} from "@/component/svg/Person";
import SearchBox from "@/component/Header/UI/SearchBox/SearchBox";
import styles from "../../MobileMenuRefactor/MobileMenuRefactor.module.scss";
import LocaleSwitcher from "@/component/Header/UI/LanguageToggleComponent/LocaleSwitcher";
import CartIcon from "@/component/Header/UI/Cart/CartIcon";
import Link from "next/link";
import {forCart} from "@/mock/forCart";

const variants: Variants = {
    open: {
        width: '100%',
        overflowY: 'auto',
        padding: '1rem',
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        width: '0%',
        overflowY: 'hidden',
        padding: '0rem',
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
export const Navigation = ({isOpen}: { isOpen: boolean }) => (
    <motion.ul
        className={styles['mobile-nav-items']}
        initial={'closed'}
        animate={isOpen ? 'open' : ''}
        variants={variants}
    >
        <AnimatedNavItem>
            <SearchBox styleProps={{}}/>
        </AnimatedNavItem>
        <AnimatedNavItem className={styles['categories-container']}>
            {allCategories.map((item) => (
                <MenuItem className={''} item={item} key={item.id}/>
            ))}
        </AnimatedNavItem>

        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={`${styles['user-cart']} ${styles['user-action']}`}>
                <CartIcon addModal={false} cartItems={forCart}/>
        </AnimatedNavItem>
        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={`${styles['user-account']} ${styles['user-action']}`}>
            <Person/>
        </AnimatedNavItem>
        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={`${styles['user-wish-list']} ${styles['user-action']}`}>
            <Love/>
        </AnimatedNavItem>
        <AnimatedNavItem
            interactionSettings={interactionUserActions}
            className={styles['user-action']}>
            <PhoneLinkComponent/>
        </AnimatedNavItem>
        <AnimatedNavItem>
            {/*<LanguageToggleComponent/>*/}
            <LocaleSwitcher/>
        </AnimatedNavItem>
    </motion.ul>
);
