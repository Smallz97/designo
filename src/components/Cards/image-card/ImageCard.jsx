import styles from './ImageCard.module.css'

const ImageCard = ({ image, title, text, place }) => {
    const textParagraphs = text.split('\n');

    return (
        <div className={`${styles.imageCard} ${place === 'second' ? styles.secondImageCard : ''}`}>
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
