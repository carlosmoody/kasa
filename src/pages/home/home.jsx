import React, { useEffect } from "react";
import styles from "./home.module.css";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import homePicture from "../../assets/homePicture.png";
import mockData from "../../assets/data.json";

export default function Home() {
  useEffect(() => {
    document.title = "Kasa - Accueil";
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <Banner
        title="Chez vous, partout et ailleurs"
        altText="Falaises et océan"
        picture={homePicture}
        location="home"
      />
      <div className={styles.list}>
        {mockData.map((location) => (
          <Card
            key={location.id}
            id={location.id}
            title={location.title}
            cover={location.cover}
          />
        ))}
      </div>
    </div>
  );
}
