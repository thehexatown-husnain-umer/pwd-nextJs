import styles from "../../../styles/Category.module.scss";
import NavItem from "../navItem";
import Product from "../product";
import { useEffect } from "react";

const Category = ({
  openModal,
  setCurrentProduct,
  categories,
  products,
  setCurrentCategory,
  currentCategory,
}) => {
  return (
    <div className={styles.Category}>
      <div className={styles.categoryNav}>
        <NavItem onClick={() => setCurrentCategory(0)} />
        {categories?.map((category, index) => {
          return (
            <NavItem
              currentCategory={currentCategory}
              category={category}
              key={index}
              onClick={() => setCurrentCategory(category)}
            />
          );
        })}
      </div>

      <p className={styles.CategoryName}>All Categories</p>
      <div className={styles.CategroyBody}>
        {products.length > 0 ? (
          products?.map((product, index) => {
            return (
              <Product
                setCurrentProduct={setCurrentProduct}
                openModal={openModal}
                product={product}
                key={index}
              />
            );
          })
        ) : (
          <>
            <div>No products</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
