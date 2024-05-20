import Image from '../../../assets/images/header-images/about.png'

import styles from './AboutPageHeader.module.css'

const AboutPageBanner = () => {
    return (
        <div className={styles.aboutpageHeader}>
            <div className={styles.imageContainer}>
                <img src={Image} alt='group' />
            </div>
            <div className={styles.textwrapper}>
                <h1 className={styles.heading}>About Us</h1>
                <p className={styles.text}>
                    Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.
                </p>
            </div>
        </div>
    )
}

export default AboutPageBanner