import { locationsIllustrations } from '../../../assets/data/data';
import { Link } from 'react-router-dom';
import Button from '../../Buttons/Button';
import Illustration from '../illustration/Illustration';


import styles from './LocationsIllustrationsList.module.css'

const LocationsIllustrationsList = () => {
    return (
        <div className={styles.locationsList}>
            {
                locationsIllustrations.map((illustration, index) => {
                    return (
                        <div key={index} className={styles.locationsIllustrationWrapper}>
                            <Illustration
                                type={`locations`}
                                name={locationsIllustrations[index].name}
                                imageLink={locationsIllustrations[index].imageLink}
                            />
                            <Link>
                                <Button text={`see location`} textColor={`#FFFFFF`} backgroundColor={`#E7816B`} />
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default LocationsIllustrationsList;