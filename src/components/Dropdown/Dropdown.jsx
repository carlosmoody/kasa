import styles from "./Dropdown.module.css";
import dropdownArrow from "../../assets/dropdownArrow.png";
import { useState } from "react";

export default function Dropdown() {
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive(!active);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={toggleDropdown}>
        <h3>Description</h3>
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
        <p>
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
          l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec
          5 lignes de métro et de nombreux bus. Logement parfait pour les
          voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station
          de la gare de l'est (7 minutes à pied).
        </p>
      </div>
    </div>
  );
}
