'use client'
import React, {useEffect, useRef} from 'react';
import {motion, useCycle, useDragControls, useMotionValue, useScroll} from "framer-motion";
import {useDimensions} from "@/hooks/useDimensions";
import {Navigation} from "@/component/Header/UI/Navigation";
import {MenuToggle} from "@/component/Header/UI/MenuToggle";
import styles from "../MobileMenuRefactor/MobileMenuRefactor.module.scss";
import {Logo} from "@/component/Header/UI/Logo";
import {useGetStyleProps} from "@/component/Header/Header";
import {Cart} from "@/component/svg/Cart";
import {Search} from "@/component/svg";

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
    const closeBurgerMenu = (event: React.PointerEvent<HTMLDivElement>) => {
        y.set(0)
    }
    const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        controls.start(event)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        return () => {
            if (typeof window !== 'undefined') {
                document.body.style.overflow = 'auto';
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
                onClick={() => toggleOpen()}
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
                <MenuToggle toggle={() => toggleOpen()}/>
                <Logo
                    styleProps={styleProps}
                    imageWidthValues={[110, 110]}
                    imageHeightValues={[55, 55]}
                />
                <motion.div
                    animate={isOpen ? {x:100,opacity:0 } : {}}
                    className={`${styles['nav-actions']}`}>
                    <Search styleProps={{}} className={''}/>
                    <Cart/>
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
                onDragEnd={(e, {offset, velocity}) => {
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
