import styles from "./DropdownLarge.module.css";
import dropdownArrow from "../../assets/dropdownArrow.png";
import { useState } from "react";

export default function DropdownLarge(props) {
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive(!active);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={toggleDropdown}>
        <h3 className={styles.dropdownLargeTitle}>{props.title}</h3>
        <img
          src={dropdownArrow}
          alt="flêche"
          className={active ? `${styles.icon} ${styles.rotate}` : styles.icon}
        />
      </button>
      <div
        className={
          active
            ? `${styles.answerWrapper} ${styles.showAnswer}`
            : styles.answerWrapper
        }
      >
        <p className={styles.dropdownLargeText}>{props.content}</p>
      </div>
    </div>
  );
}
