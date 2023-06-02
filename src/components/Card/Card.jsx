import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <Link to={`/${props.id}`}>
      <div className={styles.cardWrapper}>
        <img className={styles.cardCover} src={props.cover} alt={props.title} />
        <div className={styles.cardGradient}></div>
        <h2 className={styles.cardTitle}>{props.title}</h2>
      </div>
    </Link>
  );
}
