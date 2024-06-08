import Button from '../../Buttons/Button'
import styles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>
            <div className={styles.formTextWrapper}>
                <div className={styles.formHeading}>Contact Us</div>
                <div className={styles.formDescription}>
                    Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.
                </div>
            </div>
            <form className={styles.formWrapper}>
                <div className={styles.inputWrapper}>
                    <label htmlFor='name'></label>
                    <input
                        required
                        id="name"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        aria-required="true"
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor='email'></label>
                    <input
                        required
                        id="email"
                        type="email"
                        autoComplete="off"
                        aria-required="true"
                        placeholder="Email Address"
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor='phone'></label>
                    <input
                        required
                        id="phone"
                        type="phone"
                        autoComplete="off"
                        placeholder="Phone"
                        aria-required="true"
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor='message'></label>
                    <textarea
                        required
                        id="message"
                        autoComplete="off"
                        aria-required="true"
                        placeholder="Your Message"
                        className={`${styles.inputField} ${styles.textarea}`}
                    />
                </div>
                <div className={styles.formButton}>
                    <Button text={`submit`} textColor={`#333136`} backgroundColor={`#FFFFFF`} />
                </div>
            </form>
        </div>
    )
}

export default ContactForm