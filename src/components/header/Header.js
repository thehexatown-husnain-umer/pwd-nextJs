import Image from "next/image";
import Logout from "../logoutModal";
import styles from "../../../styles/Header.module.scss";
import React, { useEffect, useState } from "react";
import brand from "../../../public/brand.svg";
import Search from "../../assets/icons/pwd_search.svg";
import Profile from "../../assets/icons/pwd_profile.svg";
import drop_Drown from "../../assets/icons/drop_Down.svg";
import axios from "axios";
import url from "../../config/url";
import { useSelector } from "react-redux";

const Header = ({ setProducts, getAllProducts, Name }) => {
  // const user = useSelector((state) => state.login.user);
  const organization = useSelector((state) => state.login.organization);
  const [openLogout, setOpenLogout] = useState(false);
  const token = useSelector((state) => state.login.token);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length) {
      searchProducts();
    } else {
      getAllProducts();
    }
  }, [search]);

  const searchProducts = async () => {
    await axios
      .get(url + `/api/products/search/${organization?.id}/${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProducts(res.data.products);
      });
  };

  return (
    <div className={styles.header}>
      <div className={styles.HeaderLeft}>
        <div className={styles.brandImage}>
          <Image src={brand} />
        </div>
        <div className={styles.restaurentDetails}>
          <p>{organization?.name}</p>
        </div>
      </div>
      <div className={styles.searchCenter}>
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.searchIcon}>
          <Image src={Search} />
        </div>
      </div>
      <div className={styles.HeaderRight}>
        <div className={styles.profileImage}>
          <Image onClick={() => setOpenLogout(true)} src={Profile} />
        </div>
        <Image onClick={() => setOpenLogout(true)} src={drop_Drown} />
      </div>
      {openLogout && <Logout setOpenLogout={setOpenLogout} />}
    </div>
  );
};

export default Header;
