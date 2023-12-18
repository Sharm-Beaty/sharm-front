import {motion} from "framer-motion";
import React from "react";
import SearchBox from "@/component/Header/UI/SearchBox/SearchBox";
import styles from "./MainHeader.module.scss";
import {Love} from "@/component/svg/Love";
import {Person} from "@/component/svg/Person";
import {Cart} from "@/component/svg/Cart";
import {Logo} from "@/component/Header/UI/Logo/Logo";

const MainHeader = ({styleProps}: { styleProps: any }) => {
    const imageWidthValues = [212, 106];
    const imageHeightValues = [106, 53];
    const mainHeaderStyles = {
        height: styleProps.mainHeaderHeight,
        borderBottomColor: styleProps.borderBottomColor,
        borderBottom: '1px solid',
    };
    const userActionsHeaderStyles = {
        x: styleProps.moveElementToLeftX,
    };

    if (!styleProps) {
        console.error("MainHeader: Missing styleProps");
        return null;
    }

    return (
        <motion.div className={styles["main-header"]} style={mainHeaderStyles}>
            <SearchBox styleProps={styleProps} />
            <Logo
                styleProps={styleProps}
                imageWidthValues={imageWidthValues}
                imageHeightValues={imageHeightValues}
            />
            <motion.div
                style={userActionsHeaderStyles}
                className={styles["user-actions-header"]}
            >
                <Love />
                <Person />
                <Cart />
            </motion.div>
        </motion.div>
    );
};

export default MainHeader;