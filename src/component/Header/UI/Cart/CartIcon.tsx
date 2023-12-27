'use client'
import {motion} from "framer-motion";
import styles from "@/component/Header/UI/Cart/Cart.module.scss";
import React, {FC, useEffect, useState} from "react";
import CartModal from "@/component/Header/UI/Cart/CartModal";
import {CartItem} from "@/mock/forCart";

interface CartIconProps {
    addModal?: boolean;
    cartItems: CartItem[];
}

const CartIcon: FC<CartIconProps> = ({cartItems = [], addModal = false}) => {
    const [count, setCount] = useState(
        cartItems.reduce((total, {quantity}) => total + Number(quantity), 0)
    );
    const [isModalShow, setIsModalShow] = useState(false);

    useEffect(() => {
    }, [count])

    const handleIconClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isModalShow) {
            setIsModalShow(!isModalShow);
        }
    }

    return (
        <>
            <motion.div className={styles["cart-icon-container"]}
                        onClick={handleIconClick}

            >
                <small className={count > 0 ? styles['show-cart-indicator'] : ''}>
                    {count > 0 && count}
                </small>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="8" cy="21" r="1"/>
                    <circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                {
                    addModal && <CartModal
                        isModalShowCallback={setIsModalShow}
                        isModalShow={isModalShow}
                        itemsList={cartItems}/>
                }

            </motion.div>
        </>
    )
}

export default CartIcon;