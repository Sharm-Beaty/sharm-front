import './globals.css'
import {Footer} from "@/component/Footer/Footer";
import {Header} from "@/component/Header/Header";
import {ReduxProvider} from "@/state/provider";
import React, {ReactNode} from "react";
import {headers} from "next/headers";

export const metadata = {
    title: 'Main Leyout',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {

    const initialViewport = headers().get('viewport')
    console.log(initialViewport);

    return (
        <html lang="en">
        <body>
        <ReduxProvider>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </ReduxProvider>
        </body>
        </html>
    )
}
