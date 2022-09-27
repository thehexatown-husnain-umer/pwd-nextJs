import { useEffect } from "react";
import styles from "../../../styles/NavItem.module.scss";

const NavItem = ({ category, onClick, currentCategory }) => {
  return (
    <div
      className={
        category && category?.id == currentCategory?.id
          ? (styles.NavItem, styles.backgroundColor)
          : styles.NavItem
      }
      onClick={onClick}
    >
      <p>{category ? category.name : styles.All}</p>
    </div>
  );
};

export default NavItem;
