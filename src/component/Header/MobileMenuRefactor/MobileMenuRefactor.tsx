'use client'
import React, {useEffect, useRef} from 'react';
import {animate, motion, useCycle, useDragControls, useMotionValue, useScroll} from "framer-motion";
import {useDimensions} from "@/hooks/useDimensions";
import {Navigation} from "@/component/Header/UI/Navigation (mobile)/Navigation";
import {MenuToggle} from "@/component/Header/UI/MenuToggle/MenuToggle";
import styles from "../MobileMenuRefactor/MobileMenuRefactor.module.scss";
import {Logo} from "@/component/Header/UI/Logo/Logo";
import {useGetStyleProps} from "@/component/Header/Header";
import {Search} from "@/component/svg";
import {forCart} from "@/mock/forCart";
import CartIcon from "@/component/Header/UI/Cart/CartIcon";

export const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(10px at 20px 20px)",
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};



const MobileMenuRefactor = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const controls = useDragControls();
    const y = useMotionValue(0);
    const {scrollY} = useScroll();
    const styleProps = useGetStyleProps(scrollY);
    const closeBurgerMenu = () => {
        y.set(0)
    }
    const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        controls.start(event)
    }
    const actionOnToggleBurger = () => {
        if (containerRef.current ) {
            const navWrapperRefOffsetWidth = (containerRef.current as HTMLDivElement).offsetWidth;
            const background = (containerRef.current as HTMLDivElement).querySelector(`.${styles.background}`)!;
            const backgroundWidth = (background as HTMLDivElement).offsetWidth;
            const logoXTransform = (navWrapperRefOffsetWidth - backgroundWidth) / 2
            const logo = (containerRef.current as HTMLDivElement).querySelector('img')!;
            animate(logo, (isOpen ? {x:0} : {x:-logoXTransform}))
        }
        toggleOpen()
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100vh';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        return () => {
            if (typeof window !== 'undefined') {
                document.body.style.overflow = 'auto';
                document.body.style.height = 'fit-content';
            }
        };
    }, [isOpen]);

    return (
        <motion.nav
            id={styles.navbar}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >

            <motion.div className={styles.background} variants={sidebar}/>
            <motion.div
                onClick={actionOnToggleBurger}
                className={styles.overlay}
                initial={false}
                animate={isOpen ? {opacity: 0.5, pointerEvents: "auto"} : {opacity: 0, pointerEvents: "none"}}
                style={{
                    background: "#000",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    transition: "0.5s"
                }}
            />
            <div className={`${styles['nav-wrapper']}`}>
                <MenuToggle toggle={actionOnToggleBurger}/>
                <Logo
                    styleProps={styleProps}
                    imageWidthValues={[110, 110]}
                    imageHeightValues={[55, 55]}
                />
                <motion.div
                    animate={isOpen ? {y:-100,opacity:0,} : {}}
                    transition={{delay: 0.1}}
                    className={`${styles['nav-actions']}`}>
                    <Search styleProps={{}} className={''}/>
                    <CartIcon addModal={false} cartItems={forCart}/>
                </motion.div>

            </div>

            <Navigation isOpen={isOpen}/>
            <motion.div
                drag="y"
                dragConstraints={{top: 0, bottom: 0}}
                dragElastic={1}
                dragMomentum={false}
                onPointerUp={closeBurgerMenu}
                onPointerDown={startDrag}
                onDragEnd={(e, {offset}) => {
                    if (offset.y < -70) {
                        toggleOpen();
                    }
                }}
                style={{
                    y,
                }}
                className={isOpen ? styles.stripe : [styles.stripe, styles.hidden].join(' ')}
            />
        </motion.nav>
    )
}

export default MobileMenuRefactor;
