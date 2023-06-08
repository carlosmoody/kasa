import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./root.module.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className={styles.rootWrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
