import { locationsArray } from "../../../assets/data/data"
import LocationCard from "./LocationCard"
import styles from './LocationsList.module.css'

const LocationsList = () => {
    return (
        <>
            {locationsArray.map((location, index) => (
                <div key={index} className={styles.locations}>
                    <LocationCard location={location} reversed={index == 1} />
                </div>
            ))}
        </>
    );
}

export default LocationsList;