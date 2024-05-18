import BannerImage from '../../../assets/images/banner-images/about.png'

import styles from './AboutPageBanner.module.css'

const AboutPageBanner = () => {
    return (
        <div className={styles.aboutpageBanner}>
            <div className={styles.aboutpageImageContainer}>
                <img src={BannerImage} alt='group' />
            </div>
            <div className={styles.aboutpageTextwrapper}>
                <h1 className={styles.aboutpageHeading}>About Us</h1>
                <p className={styles.aboutpageHerotext}>
                    Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.
                </p>
            </div>
        </div>
    )
}

export default AboutPageBanner