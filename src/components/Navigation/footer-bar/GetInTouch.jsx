import { Link } from "react-router-dom"
import Button from '../../Buttons/Button';
import styles from './GetInTouch.module.css'

const GetInTouch = () => {
    return (
        <div id="getInTouch" className={styles.getInTouch}>
            <div className={styles.getInTouchTextWrapper}>
                <div className={styles.heading}>Let's talk about your project</div>
                <div className={styles.text}>
                    Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </div>
            </div>
            <Link to='/contact' className={styles.getInTouchLink}>
                <Button text={`get in touch`} textColor={`#333136`} backgroundColor={`#FFFFFF`} />
            </Link>
        </div>
    )
}

export default GetInTouch
