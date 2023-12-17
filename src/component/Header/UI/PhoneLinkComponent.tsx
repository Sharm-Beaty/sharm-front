import React from "react";
import styles from "../styles/PhoneLink.module.scss"
import {Phone} from "@/component/svg";
import {motion} from 'framer-motion'

const PhoneLinkComponent = () => {
    return (
        <div className={`${styles['phone-link-wrapper']}`}>
            <a href="tel:+380123456789" className={`${styles["phone-top-bar"]} ${styles["active-link"]}`}>
                <Phone/>
                <span> [0800 50 51 13]</span>
            </a>
            <motion.button
                whileTap={{
                    scale: 0.90,
                }}
                transition={{
                    duration: 0.1
                }}
                className={styles["get-call"]}>
                <span>Замовити дзвінок</span>
            </motion.button>

        </div>
    )
}
export default PhoneLinkComponent;