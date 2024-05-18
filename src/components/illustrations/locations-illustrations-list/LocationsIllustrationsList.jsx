import { locationsIllustrations } from '../../../assets/data/data';
import Button from '../../Buttons/Button';
import Illustration from '../illustration/Illustration';


import styles from './LocationsIllustrationsList.module.css'

const LocationsIllustrationsList = () => {
    return (
        <>
            {
                locationsIllustrations.map((illustration, index) => {
                    return (
                        <div className={styles.locationsIllustrationWrapper}>
                            <Illustration
                                key={index}
                                type={`locations`}
                                name={locationsIllustrations[index].name}
                                imageLink={locationsIllustrations[index].imageLink}
                            />
                            <Button text={`see location`} />
                        </div>
                    );
                })
            }
        </>
    )
}

export default LocationsIllustrationsList;