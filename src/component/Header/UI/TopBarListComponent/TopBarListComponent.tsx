import React, {FC} from "react";
import {ActiveLink} from "@/component/UI/ActiveLink/ActivLink";
import styles from "./TopBarList.module.scss";
import {useTranslations} from "use-intl";

interface TopBarListComponentProps {
    locale: string;
}

const TopBarListComponent:FC<TopBarListComponentProps> = ({locale}) => {
    const t = useTranslations('TopBarListComponent');
    return (
        <div className={styles["list-top-bar-header"]}>
            <ul>
                <li><ActiveLink rout={`/${locale}/promotional-offers`}>{t.raw('promotional-offers')}</ActiveLink></li>
                <li><ActiveLink rout={`/${locale}/delivery-payment`}>{t('delivery-payment')}</ActiveLink></li>
                <li><ActiveLink rout={`/${locale}/articles`}>{t('articles')}</ActiveLink></li>
                <li><ActiveLink rout={`/${locale}/our-team`}>{t('our-team')}</ActiveLink></li>
                <li><ActiveLink rout={`/${locale}/about`}>{t('about')}</ActiveLink></li>
            </ul>
        </div>
    )
}
export default TopBarListComponent;