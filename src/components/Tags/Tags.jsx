import styles from "./Tags.module.css";

export default function Tags(props) {
  return (
    <div className={styles.tag}>
      <p className={styles.tagContent}>{props.content}</p>
    </div>
  );
}
