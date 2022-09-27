import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "../../../styles/Logout.module.scss";
import { SignOut } from "../../features/loginSlice";

const Logout = ({ setOpenLogout }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const SignOutHandler = () => {
    dispatch(SignOut(null));
    router.push("/login");
  };

  return (
    <div className={styles.logout}>
      <p onClick={SignOutHandler} className={styles.Logoutborder}>
        Logout
      </p>
      <div className={styles.logoutBorder}></div>
      <p onClick={() => setOpenLogout(false)}>cancel</p>
    </div>
  );
};

export default Logout;
