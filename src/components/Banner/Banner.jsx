import styles from "./Banner.module.css";

export default function Banner(props) {
  return (
    <div
      className={
        props.location === "home"
          ? `${styles.bannerWrapper} ${styles.smallerBannerOnMobile}`
          : `${styles.bannerWrapper}`
      }
    >
      <img
        className={styles.bannerPicture}
        src={props.picture}
        alt={props.altText}
      />
      <div className={styles.bannerOverlay}>
        <h1 className={styles.bannerTitle}>{props.title}</h1>
      </div>
    </div>
  );
}
