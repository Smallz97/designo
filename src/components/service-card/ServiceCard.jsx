import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ image, name, link }) => {
    return (
        <div className={styles.service}>
            <img src={image} alt="service image" />
            <div className={styles.serviceName}>{name}</div>
            <div className={styles.serviceLink}><Link to={link} className={styles.link}>View Projects</Link></div>
        </div>
    );
}

export default ServiceCard;