import styles from './ServicePageBanner.module.css'

const ServicesBanner = ({ title, description }) => {
    return (
        <div className={styles.servicespageBanner}>
            <h1 className={styles.serviceTitle}>{title}</h1>
            <p className={styles.serviceDescription}>{description}</p>
        </div>
    )
}

export default ServicesBanner
