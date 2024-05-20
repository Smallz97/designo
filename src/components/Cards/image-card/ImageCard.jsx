import styles from './ImageCard.module.css'

const ImageCard = ({ image, title, text }) => {
    const textParagraphs = text.split('\n');

    return (
        <div className={styles.imageCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt='Description Image' />
            </div>
            <div className={styles.textWrapper}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>
                    {textParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageCard
