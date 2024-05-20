import styles from './Button.module.css'

const Button = ({ text, textColor, backgroundColor }) => {
    const buttonStyle = {
        color: textColor,
        backgroundColor: backgroundColor
    };

    return (
        <button className={styles.button} style={buttonStyle}>
            {text}
        </button>
    )
}

export default Button
