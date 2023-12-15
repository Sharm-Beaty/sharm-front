import {motion} from "framer-motion";
import {Search} from "@/component/svg";
import React from "react";
import styles from "../styles/SearchBox.module.scss";
// import styles from "../MobileMenuRefactor/MobileMenuRefactor.module.scss";

const SearchBox = ({styleProps}: { styleProps: any }) => (
    <motion.div
        className={styles["search"]}
        style={{
        }}
    >
        <motion.input
            className={styles['search-input']}
            style={{

            }}
            type="text"
            placeholder="Пошук"
        />
        <Search className={styles['search-svg']} styleProps={styleProps}/>
    </motion.div>
);
export default SearchBox;