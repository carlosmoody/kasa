import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import homePicture from "../../assets/homePicture.png";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, ["data.json"]);

  const fetchData = () => {
    fetch("data.json", {
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .then(() => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.homeWrapper}>
      <Banner
        title="Chez vous, partout et ailleurs"
        altText="Falaises et océan"
        picture={homePicture}
      />
      <div className={styles.list}>
        {data.map((location) => (
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
