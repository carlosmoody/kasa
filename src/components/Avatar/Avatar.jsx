import styles from "./Avatar.module.css";

export default function Avatar(props) {
  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.avatarName}>
        <p className={styles.avatarNameText}>{props.name}</p>
      </div>
      <img
        className={styles.avatarImage}
        src={props.url}
        alt="Propriétaire du logement"
      />
    </div>
  );
}
