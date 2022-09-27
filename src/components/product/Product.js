import ProductImage from "../../assets/icons/product.svg";
import checkout from "../../assets/icons/add_to_checkout.svg";
import Image from "next/image";
import styles from "../../../styles/Product.module.scss";
import { useEffect, useState } from "react";

const Product = ({ product, openModal, setCurrentProduct }) => {
  const openCartModal = () => {
    openModal(true);
    setCurrentProduct(product);
  };

  return (
    <>
      <div className={styles.Product}>
        <Image src={ProductImage} />
        <div className={styles.productDetails}>
          <p>
            {product?.attributes ? product?.attributes.title : product.title}
            <br />
            <span>
              $
              {product?.attributes
                ? product?.attributes.mediumPrice
                : product.mediumPrice}
            </span>
          </p>

          <Image src={checkout} onClick={openCartModal} />
        </div>
      </div>
    </>
  );
};

export default Product;
