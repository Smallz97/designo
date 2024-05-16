import styles from './Illustration.module.css'

const Illustration = ({ name, text, imageLink }) => {
    return (
        <div className={styles.illustration}>
            <div className={styles.illustrationImage}>
                <img src={`/${imageLink}`} alt={`${name} illustration`} />
            </div>
            <div className={styles.illustrationName}>{name}</div>
            <div className={styles.illustrationText}>{text}</div>
        </div>
    );
}

export default Illustration;