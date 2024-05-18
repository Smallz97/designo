import Button from '../../Buttons/Button'
import BannerImage from '../../../assets/images/banner-images/phone.png'

import styles from './HomePageBanner.module.css'

const HomePageBanner = () => {
    return (
        <div className={styles.homepageBanner}>
            <div className={styles.homepageTextwrapper}>
                <h1 className={styles.homepageHeading}>
                    Award-winning custom designs and digital branding solutions
                </h1>
                <p className={styles.homepageHerotext}>
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <Button text={`Learn More`} />
            </div>
            <div className={styles.homepageImageContainer}>
                <img src={BannerImage} alt="mobile phone" />
            </div>
        </div>
    )
}

export default HomePageBanner
