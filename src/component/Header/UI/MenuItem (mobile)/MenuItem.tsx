import * as React from "react";
import {useState} from "react";
import {motion} from "framer-motion";
import {Arrow} from "@/component/svg";
import styles from "../../MobileMenuRefactor/MobileMenuRefactor.module.scss";
import {ICategory} from "@/mock/mockForHeader";
import {useTranslations} from "use-intl";
import {useLocale} from "next-intl";


const containerVariants = {
    open: {
        height: 'auto',
        transition: {
            staggerChildren: 0.05, // children will animate 0.1s one after another,
            delayChildren: 0.1 // delay the animation of children by 0.3s
        }
    },
    closed: { height: 0  }
};
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};


const SubCategory = ({category, isChildrenVisible}: {category: ICategory; isChildrenVisible: boolean}) => {
    const t = useTranslations(`categories.${category.localizationKey}.children`);
    const locale = useLocale();
    return (isChildrenVisible
        ? (<motion.ul
            variants={containerVariants}
            initial="closed"
            animate={isChildrenVisible ? 'open' : 'closed'}
        >
            {category.children.map((childItem) => (
                <p className={styles['sub-category']}
                          key={childItem.id}
                >
                    {t(childItem.localizationKey)}
                </p>
            ))}
        </motion.ul>)
        : null)
};

export const MenuItem = ({item, className} : {item:ICategory; className:string}) => {
    const t = useTranslations('categories');
    const [isChildrenVisible, setIsChildrenVisible] = useState(false);
    const [setRotate, setRotateState] = useState("");

    const handleButtonClick = () => {
        setIsChildrenVisible(!isChildrenVisible);
        setRotateState(
            isChildrenVisible ? styles["arrow-svg"] : styles["rotate"]
        );
    };

    return (
        <motion.div
            className={`${styles['category']} ${className}`}
            style={{
                paddingTop: className ? '0.3rem' : 'unset'
            }}
            variants={variants}
        >
            <motion.div className={styles["parent-category-row"]}
            >
                <motion.a
                    href={item.localizationKey}
                    whileHover={{ scale: 0.95,}}
                    whileTap={{scale: 0.9}}
                >
                    {item.localizationKey ? t(`${item.localizationKey}.name`) :  item.name}
                </motion.a>
                {item.children.length > 0 && (
                    <button onClick={handleButtonClick}>
                        <Arrow
                            width={'10'}
                            height={'10'}
                            className={`${setRotate}`} />
                    </button>
                )}
            </motion.div>
            {
                item.children && item.children.length > 0 && (
                    <SubCategory isChildrenVisible={isChildrenVisible}
                                 category={item}
                    />
                )
            }
        </motion.div>
    );
}