import styles from "./Tags.module.css";

export default function Tags(props) {
  return (
    <div className={styles.tag}>
      <p>{props.content}</p>
    </div>
  );
}
