import styles from "./Avatar.module.css";

export default function Avatar(props) {
  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.avatarName}>
        <p>{props.fname}</p>
        <p>{props.lname}</p>
      </div>
      <img src={props.url} alt="Propriétaire du logement" />
    </div>
  );
}
