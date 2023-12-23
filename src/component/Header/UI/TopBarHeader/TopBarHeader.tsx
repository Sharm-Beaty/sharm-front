import {motion} from "framer-motion";
import PhoneLinkComponent from "@/component/Header/UI/PhoneLinkComponent/PhoneLinkComponent";
import TopBarListComponent from "@/component/Header/UI/TopBarListComponent/TopBarListComponent";
import LanguageToggleComponent from "@/component/Header/UI/LanguageToggleComponent/LanguageToggleComponent";
import React from "react";
import styles from "./TopBarHeader.module.scss"
import LocaleSwitcher from "@/component/Header/UI/LanguageToggleComponent/LocaleSwitcher";


const TopBarHeader = ({ styleProps, locale }: { styleProps: any, locale: string }) => {
    if (!styleProps) {
        console.error("TopBarHeader: Missing styleProps");
        return null;
    }

    const topBarHeaderStyles = {
        opacity: styleProps.opacity,
        height: styleProps.height,
        borderBottomColor: styleProps.borderBottomColorHide,
        borderBottom: '1px solid',
    };

    return (
        <motion.div
            className={styles["top-bar-header"]}
            transition={{ type: 'spring' }}
            style={topBarHeaderStyles}
        >
            <div className={`${styles['top-header-item']} ${styles['phone']}`}>
                <PhoneLinkComponent />
            </div>
            <div className={`${styles['top-header-item']} ${styles['links']}`}>
                <TopBarListComponent locale={locale} />
            </div>
            <div className={`${styles['top-header-item']} ${styles['lang-toggle']}`}>
                {/*<LanguageToggleComponent />*/}
                <LocaleSwitcher />
            </div>
        </motion.div>
    );
};
export default TopBarHeader;
