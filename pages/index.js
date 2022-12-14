import Head from "next/head";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import store from "../src/app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>pwd-restaurent</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {router.push("/login")}
          </PersistGate>
        </Provider>
      </main>
    </div>
  );
}
