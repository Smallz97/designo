import styles from './LocationCard.module.css'

const LocationCard = ({ image, title, text }) => {

    return (
        <div className={styles.locationCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt='Image' />
            </div>
            <div className={styles.textWrapper}>
                <div className={styles.loation}>{location}</div>
                <div className={styles.text}></div>
            </div>
        </div>
    )
}

export default LocationCard