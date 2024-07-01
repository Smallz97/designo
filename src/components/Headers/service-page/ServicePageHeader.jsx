import styles from './ServicePageHeader.module.css'

const ServicesHeader = ({ title, description }) => {
    return (
        <div className={styles.servicespageHeader}>
            <h1 className={styles.heading}>{title}</h1>
            <p className={styles.text}>{description}</p>
        </div>
    )
}

export default ServicesHeader
