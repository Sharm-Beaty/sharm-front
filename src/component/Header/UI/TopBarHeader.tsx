import {motion} from "framer-motion";
import PhoneLinkComponent from "@/component/Header/UI/PhoneLinkComponent";
import TopBarListComponent from "@/component/Header/UI/TopBarListComponent";
import LanguageToggleComponent from "@/component/Header/UI/LanguageToggleComponent";
import React from "react";
import styles from "../styles/TopBarHeader.module.scss"


const TopBarHeader = ({styleProps}: { styleProps: any }) => (
    <motion.div
        className={styles["top-bar-header"]}
        transition={{type: 'spring'}}
        style={{
            opacity: styleProps.opacity,
            height: styleProps.height,
        }}
    >
        <PhoneLinkComponent/>
        <TopBarListComponent/>
        <LanguageToggleComponent/>
    </motion.div>
);

export default TopBarHeader;
