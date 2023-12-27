import React, {FC} from "react";
import styles from "@/component/Header/UI/Cart/Cart.module.scss";
import CartModalFooter from "@/component/Header/UI/Cart/CartModalFooter";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import {CartItem} from "@/mock/forCart";

const modalVariants = {
    hidden: {opacity: 0, y: '-100vh'},
    visible: {opacity: 1, y: 0},
    exit: {opacity: 0, y: '100vh'}
};

interface ICartModalListItem {
    item: CartItem;
}
interface ICartModal {
    itemsList: CartItem[];
    isModalShow: boolean;
    isModalShowCallback: (param: boolean) => void;
}
const CartModalListItem:FC<ICartModalListItem> = ({item}) => {
    return (
        <div className={styles['cart-item-row']}>
            <img className={styles['item-icon']}
                 src={item.images[0]?.url || '/images-for-categories/default_image.jpg'}
                 alt={item.name}/>
            <div className={styles["item-description"]}>
                <Link href={item.name}>{item.name}</Link>
                <span>{item.category}</span>
            </div>
            <div className={styles["item-quantity"]}>
                <p>{item.quantity} шт.</p>
            </div>
            <div className={styles["item-price"]}>
                <p>{`₴ ${item.price}`}</p>
            </div>
        </div>
    );
}


const CartModal: FC<ICartModal> = ({itemsList, isModalShow, isModalShowCallback}) => {

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target instanceof HTMLAnchorElement) {
            isModalShowCallback(false);
        }
    }

    return (
        <AnimatePresence>
            <motion.div className={styles["cart-modal"]}
                        id={'modal'}
                        variants={modalVariants}
                        initial="hidden"
                        animate={isModalShow ? "visible" : "hidden"}
                        exit="exit"
                        onMouseLeave={() => isModalShowCallback(false)}
                        onClick={handleModalClick}
            >
                <h3 className={styles["cart-header"]}>Кошик</h3>
                <div className={styles["items-list"]}>
                    {
                        itemsList.map(item => <CartModalListItem key={item.id} item={item}/>)
                    }
                </div>
                <CartModalFooter itemsList={itemsList}/>
            </motion.div>
        </AnimatePresence>
    );
}

export default CartModal;