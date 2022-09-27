// import Head from "next/head";
// import Image from "next/image";
import DashBoard from "./dashboard";
import { Provider } from "react-redux";
import store from "../src/app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DashBoard />
        </PersistGate>
      </Provider>
    </div>
  );
}
