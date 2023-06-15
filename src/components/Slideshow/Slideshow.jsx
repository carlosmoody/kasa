import styles from "./Slideshow.module.css";
import slideshowArrow from "../../assets/slideshowArrow.png";
import { useState } from "react";

export default function Slideshow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesList = props.images;

  const listLength = imagesList.length;

  const scrollImages = (direction) => {
    switch (direction) {
      case "next":
        if (currentIndex === listLength - 1) {
          return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
      case "previous":
        if (currentIndex === 0) {
          return setCurrentIndex(listLength - 1);
        }
        return setCurrentIndex(currentIndex - 1);
      default:
        return currentIndex;
    }
  };

  return (
    <div className={styles.slideshowWrapper}>
      <div
        className={
          listLength === 1
            ? `${styles.slideshowPrevious} ${styles.hide}`
            : styles.slideshowPrevious
        }
        onClick={() => scrollImages("previous")}
      >
        <img
          className={styles.slideshowArrowPrevious}
          src={slideshowArrow}
          alt="précédent"
        />
      </div>
      <div
        className={
          listLength === 1
            ? `${styles.slideshowNext} ${styles.hide}`
            : styles.slideshowNext
        }
        onClick={() => scrollImages("next")}
      >
        <img
          className={styles.slideshowArrowNext}
          src={slideshowArrow}
          alt="suivant"
        />
      </div>
      <div
        className={
          listLength === 1
            ? `${styles.slideshowPosition} ${styles.hide}`
            : styles.slideshowPosition
        }
      >
        <span className={styles.slideshowPositionText}>
          {currentIndex + 1}/{listLength}
        </span>
      </div>
      <img
        className={styles.slideshowPicture}
        src={imagesList[currentIndex]}
        alt="Logement"
      />
    </div>
  );
}
