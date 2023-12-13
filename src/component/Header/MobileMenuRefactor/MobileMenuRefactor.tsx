'use client'
import React, {useEffect, useReducer, useRef} from 'react';
import {motion, useCycle, useDragControls, useMotionValue} from "framer-motion";
import {useDimensions} from "@/component/Header/hooks/useDimensions";
import {Navigation} from "@/component/Header/UI/Navigation";
import {MenuToggle} from "@/component/Header/UI/MenuToggle";
import {sidebar} from "@/component/Header/MobileMenu/MobileMenu";
import "../sandboxStyles.scss"

const MobileMenuRefactor = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const controls = useDragControls();
    const y = useMotionValue(0);

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
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >

            <motion.div className="background" variants={sidebar}/>
            <motion.div
                onClick={() => toggleOpen()}
                className="overlay"
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
            <Navigation/>
            <MenuToggle toggle={() => toggleOpen()}/>
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
                className={isOpen ? 'stripe' : 'stripe hidden'}
            />
        </motion.nav>
    )
}

export default MobileMenuRefactor;
