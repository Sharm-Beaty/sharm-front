import React from 'react';
import "./menu.scss"
import {getInfo} from "@/app/acrions/getInfo";

export async function generateStaticParams() {
    const menuList = await getInfo("")
    // console.log(menuList)

    return menuList.results
}


export const Menu = () => {

    return (
        <>
            <nav className="container-menu">
                <ul>
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
            </nav>
        </>
    );
};
