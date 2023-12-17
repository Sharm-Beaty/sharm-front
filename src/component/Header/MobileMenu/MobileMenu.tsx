"use client"
import React, {useContext, useState} from 'react';
import "./MobileMenu.scss"
// import {menuData} from "@/component/Header/menuData";
import {ActiveLink} from "@/component/UI/ActiveLink/ActivLink";
import {HeaderContext} from "@/component/Header/HeaderProvider/HeaderContext";
import {Navigation} from "@/component/Header/UI/Navigation (mobile)/Navigation";
import {motion} from "framer-motion";
// import {MenuToggle} from "@/component/Header/UI/MenuToggle";

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
            // delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
export const MobileMenu = ({toggleOpen}: { toggleOpen: any }) => {
    const { state, dispatch } = useContext(HeaderContext);
    const toggleBurger = () => {
        dispatch({ type: 'TOGGLE_BURGER', payload: true });
    };
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        toggleBurger();
        setIsActive(prev => !prev);
    };

    //
// ...
//     const [isOpen, toggleOpen] = useCycle(false, true);
//     const containerRef = useRef(null);
//     const { height } = useDimensions(containerRef);
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


// ...


    return (
        <>
            {/*<motion.nav*/}
            {/*    initial={false}*/}
            {/*    animate={isOpen ? "open" : "closed"}*/}
            {/*    custom={height}*/}
            {/*    ref={containerRef}*/}
            {/*>*/}
                <motion.div className="background" variants={sidebar}/>
                {/*<MenuToggle toggle={() => toggleOpen()}/>*/}
            {/*</motion.nav>*/}

            <div className={`burger-menu ${isActive ? 'active' : ''}`} onClick={handleToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>


            <div
                className={`container-open-mobile-menu ${isActive ? 'active' : ''}`}
            >
                <input type="text"/>
                {isActive && <nav>
                    <ul >
                        {/*{*/}
                        {/*    menuData.map((item: any) =>*/}
                        {/*        <li key={item.id}>*/}
                        {/*            <ActiveLink rout={item.path}>*/}
                        {/*                {item.name}*/}
                        {/*            </ActiveLink>*/}
                        {/*        </li>*/}
                        {/*    )*/}
                        {/*}*/}
                    </ul>
                </nav>}
            </div>
        </>
    );
};
