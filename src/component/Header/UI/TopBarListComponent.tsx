import React from "react";
import {ActiveLink} from "@/component/UI/ActiveLink/ActivLink";
import styles from "../styles/TopBarList.module.scss";

const TopBarListComponent = () => {
    return (
        <div className={styles["list-top-bar-header"]}>
            <ul>
                <li><ActiveLink rout="/promotional-offers">Акційні пропозиції</ActiveLink></li>
                <li><ActiveLink rout="/delivery-payment">Доставка і Оплата</ActiveLink></li>
                <li><ActiveLink rout="/articles">Статті</ActiveLink></li>
                <li><ActiveLink rout="/our-team">Наша команда</ActiveLink></li>
                <li><ActiveLink rout="/about">Про магазин</ActiveLink></li>
            </ul>
        </div>
    )
}
export default TopBarListComponent;