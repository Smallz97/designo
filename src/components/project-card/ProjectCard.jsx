import styles from './ProjectCard.module.css'

const ProjectCard = ({ image, name, description }) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}><img src={image} alt="project image" /></div>
            <div className={styles.projectDetails}>
                <div className={styles.projectTitle}>{name}</div>
                <div className={styles.projectDescription}>{description}</div>
            </div>
        </div>
    )
}

export default ProjectCard