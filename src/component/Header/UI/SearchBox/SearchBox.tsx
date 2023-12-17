import {motion} from "framer-motion";
import {Search} from "@/component/svg";
import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = ({styleProps}: { styleProps: any }) => (
    <motion.div
        className={styles["search"]}
        animate={{
            transition:{
                duration: 0.2
            },
        }}
        style={{
            borderBottomColor: styleProps.borderBottomColorHide,
            borderBottom: '1px solid',
            x: styleProps.moveElementToRightX,
        }}
    >
        <motion.input
            className={styles['search-input']}
            style={{
                // borderBottom: styleProps.moveElementToRightX.current >= 70 ? "0px" : '1px solid #B8B8B8'
            }}
            type="text"
            placeholder="Пошук"
        />
        <Search className={styles['search-svg']} styleProps={styleProps}/>
    </motion.div>
);
export default SearchBox;