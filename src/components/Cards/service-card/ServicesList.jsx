import { services } from '../../../assets/data/data';
import ServiceCard from './ServiceCard';

import styles from './ServicesList.module.css'

const ServicesList = () => {
    return (
        <div className={styles.services}>
            {
                services.map((service, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            name={services[index].name}
                            link={services[index].link}
                            imageLink={services[index].imageLink}
                        />
                    );
                })
            }
        </div>
    )
}

export default ServicesList;