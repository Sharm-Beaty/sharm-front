import Link from "next/link";
import styles from "@/component/Header/UI/Cart/Cart.module.scss";
import {CartItem} from "@/mock/forCart";
import {FC} from "react";

interface ICartModalFooter {
    itemsList: CartItem[];
}

const CartModalFooter: FC<ICartModalFooter> = ({itemsList}) => {
    const totalPrice = itemsList.reduce((total, item) => total +(Number(item.price) * Number(item.quantity) ), 0);
    return (
      <div className={styles['cart-footer']}>
          <Link href={'/cart'}>До кошика</Link>
          <span>{`₴ ${totalPrice}`}</span>
          <Link href={'/cart'}>оформити замовлення</Link>
      </div>
    );
}
export default CartModalFooter;