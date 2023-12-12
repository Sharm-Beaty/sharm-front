"use client"
import React, {useContext, useState} from 'react';
import "./MobileMenu.scss"
import {menuData} from "@/component/Header/menuData";
import {ActiveLink} from "@/component/UI/ActiveLink/ActivLink";
import {HeaderContext} from "@/component/Header/HeaderProvider/HeaderContext";


export const MobileMenu = () => {
    const { state, dispatch } = useContext(HeaderContext);

    const toggleBurger = () => {
        dispatch({ type: 'TOGGLE_BURGER', payload: true });
    };
    const [isActive, setIsActive] = useState(false);


    const handleToggle = () => {
        toggleBurger();
        setIsActive(prev => !prev);
    };

    return (
        <>
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
                        {
                            menuData.map((item: any) =>
                                <li key={item.id}>
                                    {!state.isBurgerOpen && <p>TestTestTestTestTest</p>}
                                    {state.isBurgerOpen && <p>false</p>}
                                    <ActiveLink rout={item.path}>
                                        {item.name}
                                    </ActiveLink>
                                </li>
                            )
                        }
                    </ul>
                </nav>}
            </div>
        </>
    );
};
