import {motion} from "framer-motion";
import React from "react";
import SearchBox from "@/component/Header/UI/SearchBox/SearchBox";
import {Love} from "@/component/svg/Love";
import {Person} from "@/component/svg/Person";
import {Logo} from "@/component/Header/UI/Logo/Logo";
import styles from "./MainHeader.module.scss";
import CartIcon from "@/component/Header/UI/Cart/CartIcon";
import {forCart} from "@/mock/forCart";

const MainHeader = ({styleProps}: { styleProps: any }) => {
    const imageWidthValues = [190, 90];
    const imageHeightValues = [90, 45];
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
                <CartIcon addModal={true} cartItems={forCart}/>
            </motion.div>
        </motion.div>
    );
};

export default MainHeader;