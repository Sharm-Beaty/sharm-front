"use client"
import React, {useState} from 'react';
import "./MobileMenu.scss"
import {menuData} from "@/component/Header/menuData";
import {ActiveLink} from "@/component/UI/ActiveLink/ActivLink";

export const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <>
            {isMenuOpen && <nav className="cotainer-mobile-menu">
                <ul>
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
            </nav>
            }
        </>
    );
};
