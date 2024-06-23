import styles from './LocationCard.module.css'

const LocationCard = ({ location }) => {
    const { country, address, contact } = location;
    const addressParagraphs = address.split('\n');
    const contactParagraphs = contact.split('\n');

    return (
        <div className={styles.locationCard}>
            <div className={styles.map}></div>
            <div className={styles.textWrapper}>
                <div className={styles.country}>{country}</div>
                <div className={styles.locationDetails}>
                    <div className={styles.address}>
                        {addressParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className={styles.contact}>
                        {contactParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationCard