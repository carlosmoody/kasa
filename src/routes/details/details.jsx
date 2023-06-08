import { useParams } from "react-router-dom";
import styles from "./details.module.css";
import Avatar from "../../components/Avatar/Avatar";
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";
import Dropdown from "../../components/Dropdown/Dropdown";
import mockData from "../../assets/data.json";

export default function Details() {
  const { id } = useParams();

  const getDetails = (id) => {
    return mockData.find((entry) => entry.id === id);
  };

  const details = getDetails(id);

  const equipments = details.equipments.join("\n");
  console.log(equipments);

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsHeader}>
        <div>
          <h2 className={styles.detailsTitle}>{details.title}</h2>
          <p className={styles.detailsLocation}>{details.location}</p>
        </div>
        <Avatar name={details.host.name} url={details.host.picture} />
        <div>
          {details.tags.map((tag, index) => (
            <Tags key={index} content={tag} />
          ))}
        </div>
        <Stars rating={details.rating} />
      </div>
      <div className={styles.detailsDropdownsWrapper}>
        <Dropdown title="Description" content={details.description} />
        <Dropdown title="Équipements" content={equipments} />
      </div>
    </div>
  );
}
