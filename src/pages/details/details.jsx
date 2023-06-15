import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import styles from "./details.module.css";
import Slideshow from "../../components/Slideshow/Slideshow";
import Avatar from "../../components/Avatar/Avatar";
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";
import Dropdown from "../../components/Dropdown/Dropdown";
import mockData from "../../assets/data.json";
import dropdownStyles from "../../components/Dropdown/Dropdown.module.css";

export default function Details() {
  useEffect(() => {
    document.title = `Kasa - Détails du logement`;
  }, []);

  const { id } = useParams();

  const getDetails = (id) => {
    const data = mockData.find((entry) => entry.id === id);
    return data;
  };

  const details = getDetails(id);

  if (!details) {
    return <Navigate to="/not-found" />;
  } else {
    const equipmentList = details.equipments.map((item, index) => (
      <li key={index} className={dropdownStyles.itemList}>
        {item}
      </li>
    ));

    return (
      <div className={styles.detailsWrapper}>
        <Slideshow images={details.pictures} />
        <div className={styles.detailsHeader}>
          <div>
            <h2 className={styles.detailsTitle}>{details.title}</h2>
            <p className={styles.detailsLocation}>{details.location}</p>
            <div>
              {details.tags.map((tag, index) => (
                <Tags key={index} content={tag} />
              ))}
            </div>
          </div>
          <div className={styles.avatarStarsWrapper}>
            <Avatar name={details.host.name} url={details.host.picture} />
            <Stars rating={details.rating} />
          </div>
        </div>
        <div className={styles.detailsDropdownsWrapper}>
          <Dropdown
            location="details"
            title="Description"
            content={details.description}
          />
          <Dropdown
            location="details"
            title="Équipements"
            content={equipmentList}
          />
        </div>
      </div>
    );
  }
}
