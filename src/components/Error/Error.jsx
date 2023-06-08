import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.errorWrapper} id="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className={styles.returnToHome} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
