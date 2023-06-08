import aboutPicture from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import styles from "./about.module.css";
import Banner from "../../components/Banner/Banner";
import DropdownLarge from "../../components/DropdownLarge/DropdownLarge";
import aboutData from "../../assets/about.json";

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <Banner picture={aboutPicture} altText="Montages" title="" />
      <div className={styles.aboutContentWrapper}>
        {aboutData.map((question, index) => (
          <DropdownLarge
            key={index}
            title={question.title}
            content={question.content}
          />
        ))}
      </div>
    </div>
  );
}
