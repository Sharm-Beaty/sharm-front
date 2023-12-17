'use client'
import {motion, useTransform} from "framer-motion";
import styles from "@/component/Header/styles/Logo.module.scss";
import Link from "next/link";
import React, {FC} from "react";
import {StylePropsType} from "@/component/Header/Header";

const offsetY = [50, 400];

interface LogoProps {
    styleProps: any,
    imageHeightValues: number[],
    imageWidthValues: number[]
}

export const Logo:FC<LogoProps> = ({styleProps, imageHeightValues, imageWidthValues}) => {
    const height = useTransform(styleProps.scrollY, offsetY, imageHeightValues);
    const width = useTransform(styleProps.scrollY, offsetY, imageWidthValues);

    return (
            <Link className={styles["logo-top-bar-header"]}
                  href={'/'}>
                <motion.img
                    style={{
                        height: height,
                        width: width
                    }}
                    transition={{duration: 0.01}}
                    className={styles.logoTopBarHeader}
                    src="/logo.png"
                    alt="logo"
                />
            </Link>
    );
};