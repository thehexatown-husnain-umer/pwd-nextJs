import Header from "../src/components/Header";
import { useRouter } from "next/router";
import SideNav from "../src/components/sideNav/SideNav";
import Category from "../src/components/categories/Category";
import Order from "../src/components/order";
import axios from "axios";
import url from "../src/config/url";
import styles from "../styles/DashBoard.module.scss";
import Cart from "../src/components/cartModal";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ProtectedRoute from "../src/context/auth-context";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
function DashBoard() {
  const router = useRouter();
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);
  const organization = useSelector((state) => state.login.organization);
  const [modalVisibility, setModalVisibility] = useState(false);
  // const [organization, setOrganization] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentCategory, setCurrentCategory] = useState({});
  useEffect(() => {
    token ? router.push("/dashboard") : router.push("/login");
  }, []);
  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, [token, user, organization]);

  useEffect(() => {
    if (currentCategory?.id) {
      getAllProductsByCategory();
    } else {
      getAllProducts();
    }
  }, [currentCategory]);

  const getAllProducts = async () => {
    console.log("id===", organization.id);
    await axios
      .get(url + `/api/products/organization/${organization?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("products", res.data);
        setProducts(res.data);
      });
  };
  const getAllProductsByCategory = async () => {
    await axios
      .get(url + `/api/products/category/${currentCategory?.id}`)
      .then((res) => {
        setProducts(res.data.products);
      });
  };
  const getAllCategories = async () => {
    await axios
      .get(url + `/api/categories/organization/${organization?.id}`)
      .then((res) => {
        setCategories(res.data);
      });
  };

  return (
    <>
      <div className={styles.Home}>
        <Header
          Name={user?.username}
          setProducts={setProducts}
          getAllProducts={getAllProducts}
        />
        <div className={styles.HomeBody}>
          <SideNav
            currentCategory={currentCategory}
            categories={categories}
            setCurrentCategory={setCurrentCategory}
          />
          <Category
            setCurrentProduct={setCurrentProduct}
            openModal={setModalVisibility}
            currentCategory={currentCategory}
            categories={categories}
            products={products}
            setCurrentCategory={setCurrentCategory}
          />
          <Order />
        </div>
        {modalVisibility && (
          <div className={styles.CartModal}>
            <Cart
              product={currentProduct}
              modalVisibility={setModalVisibility}
            />
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default DashBoard;
