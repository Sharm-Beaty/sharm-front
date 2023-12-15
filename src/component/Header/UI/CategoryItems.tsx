import {MenuItem} from "@/component/Header/UI/MenuItem";
import React from "react";
import styles from "../styles/CategoryItems.module.scss";
import {allCategories} from "@/mock/mockForHeader";

type MenuItemsProps = {
    items: any[];
};

const CategoryItems: React.FC<MenuItemsProps> = ({ items }) => (
    <>
        <div className={styles['categories-container']}>
            {allCategories.map((item) => (
                <MenuItem className={''} item={item} key={item.id}/>
            ))}
        </div>
        {/*{items.map((item) => (*/}
        {/*    <MenuItem className={''} item={item} key={item.id} />*/}
        {/*))}*/}
    </>
);
export default CategoryItems;