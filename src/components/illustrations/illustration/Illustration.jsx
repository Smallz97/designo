import styles from './Illustration.module.css'

const QualityIllustration = ({ name, text, imageLink, type }) => {
    return (
        <div className={`${styles.illustration} ${type === 'locations' ? styles.locationsIllustration : ''} ${type === 'qualities' ? styles.qualitiesIllustration : ''}`}>
            <div className={styles.illustrationImage}>
                <img src={`/${imageLink}`} alt={`${name} illustration`} />
            </div>
            <div className={styles.textWrapper}>
                <div className={styles.illustrationName}>{name}</div>
                {text && <div className={styles.illustrationText}>{text}</div>}
            </div>
        </div>
    );
}

export default QualityIllustration;