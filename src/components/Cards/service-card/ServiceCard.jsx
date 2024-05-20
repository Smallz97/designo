import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ imageLink, name, link }) => {
    return (
        <div className={styles.serviceCard}>
            <img src={`/${imageLink}`} alt={`${name} services image`} />
            <div className={styles.serviceName}>{name}</div>
            <div className={styles.serviceLink}><Link to={link} className={styles.link}>View Projects &gt;</Link></div>
        </div>
    );
}

export default ServiceCard;