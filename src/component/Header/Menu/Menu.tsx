"use client"
import React, {useState} from 'react';
import "./menu.scss"
import {ActiveLink} from "../../UI/ActiveLink/ActivLink";
import {getInfo} from "@/app/acrions/getInfo";

export async function generateStaticParams() {
    const menuList = await getInfo("")
    console.log(menuList)

    return menuList.results
}


const menu = [
    {
        id: Math.random(),
        name: "Люкс",
        path: "lux"
    },
    {
        id: Math.random(),
        name: "Бренди",
        path: "brend"
    },
    {
        id: Math.random(),
        name: "Парфумерія",
        path: "parfum"
    },
    {
        id: Math.random(),
        name: "Макіяж",
        path: "parfum"
    },
    {
        id: Math.random(),
        name: "Волосся",
        path: "parfum"
    },
    {
        id: Math.random(),
        name: "Обличчя",
        path: "parfum"
    },
    {
        id: Math.random(),
        name: "Чоловікам",
        path: "parfum"
    },
    {
        id: Math.random(),
        name: "Догляд за собою",
        path: "parfum"
    },
    {
        id: Math.random(),
        name: "Товари для дому",
        path: "parfum"
    }
]

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);


    return (
        <>

            <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
            </button>
            {isMenuOpen && <nav className="container-menu">
                <ul>
                    {
                        menu.map((item: any) =>
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
