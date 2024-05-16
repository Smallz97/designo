import styles from './ServicePageBanner.module.css'

const ServicesBanner = ({ title, description }) => {
    return (
        <>
            <h1 className={styles.serviceTitle}>{title}</h1>
            <p className={styles.serviceDescription}>{description}</p>
        </>
    )
}

export default ServicesBanner
