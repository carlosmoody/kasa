import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./error-page.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div className={styles.errorWrapper} id="error-page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link className={styles.returnToHome} to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}
