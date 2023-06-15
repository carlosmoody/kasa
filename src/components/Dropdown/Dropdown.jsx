import styles from "./Dropdown.module.css";
import dropdownArrow from "../../assets/dropdownArrow.png";
import { useState } from "react";

export default function Dropdown(props) {
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive(!active);
  };

  return (
    <div
      className={
        props.location === "details"
          ? `${styles.dropdownWrapper} ${styles.dropdownSmallWrapper}`
          : `${styles.dropdownWrapper} ${styles.dropdownLargeWrapper}`
      }
    >
      <button
        className={
          props.location === "details"
            ? `${styles.titleContainer} ${styles.titleSmallContainer} ${styles.titleContainerRounded}`
            : `${styles.titleContainer} ${styles.titleLargeContainer}`
        }
        onClick={toggleDropdown}
      >
        <h3
          className={
            props.location === "details"
              ? `${styles.dropdownTitle} ${styles.dropdownSmallTitle}`
              : `${styles.dropdownTitle} ${styles.dropdownLargeTitle}`
          }
        >
          {props.title}
        </h3>
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
        <p
          className={
            props.location === "details"
              ? `${styles.answerText} ${styles.answerSmallText}`
              : `${styles.answerText} ${styles.answerLargeText}`
          }
        >
          {props.content}
        </p>
      </div>
    </div>
  );
}
