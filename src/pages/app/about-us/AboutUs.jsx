import { Component } from 'react'
import { imageText } from '../../../assets/data/data'
import AboutPageHeader from '../../../components/Headers/about-page/AboutPageHeader'
import ImageCard from '../../../components/Cards/image-card/ImageCard'
import FirstImage from '../../../assets/images/aboutpage-images/image1.png'
import SecondImage from '../../../assets/images/aboutpage-images/image2.png'
import LocationsIllustrationsList from '../../../components/Illustrations/locations-illustrations-list/LocationsIllustrationsList'

import styles from './AboutUs.module.css'

export const AboutUs = () => {
    return (
        <div className={styles.aboutUsPage}>
            <section id='header-section'>
                <AboutPageHeader />
            </section>
            <section id='image-section' className={styles.firstImageSection}>
                <ImageCard image={FirstImage} title={imageText[0].name} text={imageText[0].text} place={`first`} />
            </section>
            <section id='location-illustraions-section' className={styles.locationsIllustrationsSection}>
                <LocationsIllustrationsList />
            </section>
            <section id='image-section' className={styles.secondImageSection}>
                <ImageCard image={SecondImage} title={imageText[1].name} text={imageText[1].text} place={`second`} />
            </section>
        </div>
    )
}

Component.displayName = "About Us Page";