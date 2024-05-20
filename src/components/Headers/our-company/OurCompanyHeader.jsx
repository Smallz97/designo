import Button from '../../Buttons/Button'
import { Link } from 'react-router-dom'
import Image from '../../../assets/images/header-images/phone.png'

import styles from './OurCompanyHeader.module.css'

const HomePageHeader = () => {
    return (
        <div className={styles.homepageHeader}>
            <div className={styles.textWrapper}>
                <h1 className={styles.heading}>
                    Award-winning custom designs and digital branding solutions
                </h1>
                <p className={styles.text}>
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <Link to='/about-us'>
                    <Button text={`Learn More`} textColor={`#333136`} backgroundColor={`#FFFFFF`} />
                </Link>
            </div>
            <div className={styles.imageContainer}>
                <img src={Image} alt="mobile phone" />
            </div>
        </div>
    )
}

export default HomePageHeader
