import { useEffect } from "react";
import aboutPicture from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import styles from "./about.module.css";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import aboutData from "../../assets/about.json";

export default function About() {
  useEffect(() => {
    document.title = "Kasa - A propos";
  }, []);

  return (
    <div className={styles.aboutWrapper}>
      <Banner picture={aboutPicture} altText="Montages" title="" />
      <div className={styles.aboutContentWrapper}>
        {aboutData.map((question, index) => (
          <Dropdown
            key={index}
            location="about"
            title={question.title}
            content={question.content}
          />
        ))}
      </div>
    </div>
  );
}
