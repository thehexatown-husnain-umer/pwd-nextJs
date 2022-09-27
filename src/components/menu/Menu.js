import styles from "../../../styles/Menu.module.scss";
import Image from "next/image";
import SideBarImage from "../../assets/icons/Burger.svg";

const Menu = ({ category, onClick, currentCategory }) => {
  return (
    <div
      className={
        currentCategory.id == category.id
          ? `${styles.Menu} ${styles.backgoundColor}`
          : styles.Menu
      }
      onClick={onClick}
    >
      <Image src={SideBarImage} />
      <p>{category.name}</p>
    </div>
  );
};

export default Menu;
