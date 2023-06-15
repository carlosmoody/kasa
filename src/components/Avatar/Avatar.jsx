import styles from "./Avatar.module.css";

export default function Avatar(props) {
  return (
    <div className={styles.avatarWrapper}>
      <p className={styles.avatarName}>{props.name}</p>
      <img
        className={styles.avatarImage}
        src={props.url}
        alt="Propriétaire du logement"
      />
    </div>
  );
}
