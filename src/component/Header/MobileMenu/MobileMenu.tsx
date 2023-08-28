"use client"
import React, {useState} from 'react';
import "./MobileMenu.scss"
import {menuData} from "@/component/Header/menuData";
import {ActiveLink} from "@/component/UI/ActiveLink/ActivLink";


export const MobileMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
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
