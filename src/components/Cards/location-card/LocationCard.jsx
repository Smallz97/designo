import { APIProvider, Map } from '@vis.gl/react-google-maps';
import styles from './LocationCard.module.css'

const LocationCard = ({ location, reversed }) => {
    const { country, address, contact, coordinates } = location;
    const addressParagraphs = address.split('\n');
    const contactParagraphs = contact.split('\n');

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const locationCardClassName = `${styles.locationCard} ${reversed ? styles.reversed : ''}`;

    return (
        <div className={locationCardClassName}>
            <div className={styles.map}>
                <APIProvider apiKey={apiKey}>
                    <Map
                        defaultZoom={13}
                        disableDefaultUI={true}
                        gestureHandling={'greedy'}
                        defaultCenter={coordinates}
                    />
                </APIProvider>
            </div>
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