import styles from "../../../styles/SideNav.module.scss";
import Menu from "../menu/Menu";

const SideNav = ({ categories, setCurrentCategory, currentCategory }) => {
  return (
    <div className={styles.SideNav}>
      {categories?.map((category, index) => {
        return (
          <Menu
            currentCategory={currentCategory}
            category={category}
            key={index}
            onClick={() => setCurrentCategory(category)}
          />
        );
      })}
    </div>
  );
};

export default SideNav;
