import {motion} from "framer-motion";
import PhoneLinkComponent from "@/component/Header/UI/PhoneLinkComponent/PhoneLinkComponent";
import TopBarListComponent from "@/component/Header/UI/TopBarListComponent/TopBarListComponent";
import LanguageToggleComponent from "@/component/Header/UI/LanguageToggleComponent/LanguageToggleComponent";
import React from "react";
import styles from "./TopBarHeader.module.scss"


const TopBarHeader = ({styleProps}: { styleProps: any }) => (
    <motion.div
        className={styles["top-bar-header"]}
        transition={{type: 'spring'}}
        style={{
            borderBottomColor: styleProps.borderBottomColorHide,
            borderBottom: '1px solid',
        }}
    >
        <div className={`${styles['top-header-item']} ${styles['phone']}`}>
            <PhoneLinkComponent />
        </div>
        <div className={`${styles['top-header-item']} ${styles['links']}`}>
            <TopBarListComponent/>
        </div>
        <div className={`${styles['top-header-item']} ${styles['lang-toggle']}`}>
            <LanguageToggleComponent/>
        </div>
    </motion.div>
);

export default TopBarHeader;
