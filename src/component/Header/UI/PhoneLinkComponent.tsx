import React from "react";
import styles from "../styles/PhoneLink.module.scss"
import {Phone} from "@/component/svg";

const PhoneLinkComponent = () => {
    return (
        <div className={styles['phone-link-wrapper']}>
            <a href="tel:+380123456789" className={styles["phone-top-bar"]}>
                <Phone/>
                <span> [0800 50 51 13]</span>
            </a>
            <button
                className={styles["get-call"]}>
              <span>Замовити дзвінок</span>
            </button>

        </div>
    )
}
export default PhoneLinkComponent;