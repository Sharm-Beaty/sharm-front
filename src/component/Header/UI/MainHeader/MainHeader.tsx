import {motion, useScroll, useTransform} from "framer-motion";
import React from "react";
import SearchBox from "@/component/Header/UI/SearchBox/SearchBox";
import styles from "./MainHeader.module.scss";
import {Love} from "@/component/svg/Love";
import {Person} from "@/component/svg/Person";
import {Cart} from "@/component/svg/Cart";
import {Logo} from "@/component/Header/UI/Logo/Logo";

const MainHeader = ({styleProps}: { styleProps: any }) => {
    const {scrollY} = useScroll();
    const offsetY = [300, 400];
    const mainHeaderPositionVariants = ['relative','fixed']
    return (<motion.div
                className={styles["main-header"]}
                style={{
                    height: styleProps.mainHeaderHeight,
                    borderBottomColor: styleProps.borderBottomColor,
                    borderBottom: '1px solid',
                }}
            >

                <SearchBox styleProps={styleProps}/>
                <Logo
                    styleProps={styleProps}
                    imageWidthValues={[212, 106]}
                    imageHeightValues={[106, 53]}
                />

                <motion.div
                    style={{
                        x: styleProps.moveElementToLeftX,
                    }}
                    className={styles["user-actions-header"]}
                >
                    <Love/>
                    <Person/>
                    <Cart/>
                </motion.div>
            </motion.div>
        )
    }
;

export default MainHeader;