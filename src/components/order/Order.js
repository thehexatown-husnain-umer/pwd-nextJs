import CheckoutItem from "../checkoutProduct";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../features/cartSlice";
import axios from "axios";
import url from "../../config/url";
import styles from "../../../styles/Order.module.scss";
import { clearCart } from "../../features/cartSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Order = () => {
  const token = useSelector((state) => state.login.token);
  const [tax, setTax] = useState(0);
  const notify = () => toast("Order Confirmed");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.auth.cartItems);
  const Total = useSelector((state) => state.auth.cartTotalAmount);
  const [GranTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  useEffect(() => {
    dispatch(getTotals());
    setGrandTotal(Total);
  }, [Total]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  const conFirmOrder = async () => {
    await axios
      .post(
        url + "/api/orders",
        {
          data: {
            cartItems: cartItems,
            Total: GranTotal + (Total / 100) * 15,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        dispatch(clearCart());
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.Order}>
      <div className={styles.Heading}>
        <p>Current Order</p>
      </div>

      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((Item, index) => {
              return <CheckoutItem Item={Item} key={index} />;
            })}
          </div>

          <div className={styles.subTotal}>
            <p>Subtotal</p>
            <h5>${Total}</h5>
          </div>
          <div className={styles.Salestax}>
            <p>Sales tax</p>
            <h5>${((Total / 100) * 15).toFixed(2)}</h5>
          </div>
          <div className={styles.dottedBorder}></div>
          <div className={styles.Total}>
            <p>Total</p>
            <h5>${(GranTotal + (Total / 100) * 15).toFixed(2)}</h5>
          </div>

          <button onClick={conFirmOrder}>Confirm Order</button>
        </>
      ) : (
        <div className={styles.cartEmpty}>cart is Empty Start Shopping</div>
      )}
    </div>
  );
};

export default Order;
