import * as React from "react";
import {motion} from "framer-motion";
import {useState} from "react";
import {Arrow} from "@/component/svg";
import styles from "../../MobileMenuRefactor/MobileMenuRefactor.module.scss";
import {ICategory} from "@/mock/mockForHeader";
import {useTranslations} from "use-intl";


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


export const MenuItem = ({item, className} : {item:ICategory; className:string}) => {
    const t = useTranslations('categories');
    const [isChildrenVisible, setIsChildrenVisible] = useState(false);
    const [setRotate, setRotateState] = useState("");

    const handleButtonClick = () => {
        setIsChildrenVisible(!isChildrenVisible);
        setRotateState(
            isChildrenVisible ? styles["arrow-svg"] : styles["rotate"]
        );
        console.log(setRotate)
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
                <motion.span
                    whileHover={{ scale: 0.95,}}
                    whileTap={{scale: 0.9}}
                >
                    {item.localizationKey ? t(item.localizationKey) :  item.name}
                </motion.span>
                {item.children.length > 0 && (
                    <button onClick={handleButtonClick}>
                        <Arrow
                            width={'10'}
                            height={'10'}
                            className={`${setRotate}`} />
                    </button>
                )}
            </motion.div>

            {item.children && item.children.length > 0 && (
                <>
                    {isChildrenVisible && (
                        <motion.ul
                            variants={containerVariants}
                            initial="closed"
                            animate={isChildrenVisible ? 'open' : 'closed'}
                        >
                            {item.children.map((childItem) => (
                                <MenuItem className={styles['sub-category']} key={childItem.id} item={childItem}/>
                            ))}
                        </motion.ul>
                    )}
                </>
            )}
        </motion.div>
    );
}