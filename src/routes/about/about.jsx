import aboutPicture from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import styles from "./about.module.css";
import Banner from "../../components/Banner/Banner";
import DropdownLarge from "../../components/DropdownLarge/DropdownLarge";

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <Banner picture={aboutPicture} altText="Montages" title="" />
      <div className={styles.aboutContentWrapper}>
        <DropdownLarge title="Respect" content="Coucou" />
      </div>
    </div>
  );
}
