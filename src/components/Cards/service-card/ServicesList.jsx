import { services } from '../../../assets/data/data';
import ServiceCard from './ServiceCard';

import styles from './ServicesList.module.css'

const ServicesList = ({ excludeService }) => {
    const filteredServices = services.filter(service => service.name !== excludeService);
    return (
        <div className={`${styles.servicesList} ${filteredServices.length === 2 ? styles.twoItems : ''}`}>
            {
                filteredServices.map((service, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            name={filteredServices[index].name}
                            link={filteredServices[index].link}
                            imageLink={filteredServices[index].imageLink}
                        />
                    );
                })
            }
        </div>
    )
}

export default ServicesList;