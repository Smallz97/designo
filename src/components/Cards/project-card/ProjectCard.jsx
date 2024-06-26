import styles from './ProjectCard.module.css'

const ProjectCard = ({ image, name, description, type }) => {
    return (
        <div className={`${styles.projectCard} ${type === 'app' ? styles.appProjectCard : ""}`}>
            <div className={styles.imageContainer}>
                <img src={image} alt={`${name}'s project image`} />
            </div>
            <div className={styles.projectDetails}>
                <div className={styles.projectName}>{name}</div>
                <div className={styles.projectDescription}>{description}</div>
            </div>
        </div>
    )
}

export default ProjectCard