import styles from "../../../styles/CheckoutItem.module.scss";
import Image from "next/image";
import checkoutProductImage from "../../assets/icons/checkout_product.svg";
import checkoutAdd from "../../assets/icons/checkout_add.svg";
import checkoutSubtract from "../../assets/icons/checkout-.svg";
import { decreaseCart, add } from "../../features/cartSlice";

import { useDispatch } from "react-redux";

const CheckoutItem = ({ Item }) => {
  const dispatch = useDispatch();
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className={styles.CheckoutItemContainer}>
      <div className={styles.Item}>
        <div className={styles.CheckoutItemLeft}>
          <div className={styles.imgProduct}>
            <Image src={checkoutProductImage} />
          </div>
          <p>
            {Item.title}
            <br />
            <span>${Item.price}</span>
          </p>
        </div>
        <div className={styles.CheckoutItemRight}>
          <div className={styles.imgquantity}>
            <Image
              src={checkoutSubtract}
              onClick={() => handleDecreaseCart(Item)}
            />
          </div>
          <p>{Item.quantity}</p>
          <div className={styles.imgquantity}>
            <Image src={checkoutAdd} onClick={() => handleAddToCart(Item)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
