import {motion} from "framer-motion";
import {Search} from "@/component/svg";
import React from "react";
import styles from "./SearchBox.module.scss";
import {useTranslations} from "use-intl";

const SearchBox = ({styleProps}: { styleProps: any }) => {
    const t = useTranslations('SearchBox');

    return <motion.div
        className={styles["search"]}
        animate={{
            transition: {
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
            type="text"
            placeholder={t('placeholder')}
        />
        <Search className={styles['search-svg']} styleProps={styleProps}/>
    </motion.div>
};
export default SearchBox;