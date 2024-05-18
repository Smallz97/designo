import { Component } from 'react'
import Banner from '../../../components/Banners/about-page/AboutPageBanner'
import LocationsIllustrationsList from '../../../components/Illustrations/locations-illustrations-list/LocationsIllustrationsList'
import styles from './AboutUs.module.css'

export const AboutUs = () => {
    return (
        <div className={styles.aboutUsPage}>
            <section className={styles.banner}>
                <Banner />
            </section>
            <section className={styles.locationsSection}>
                <LocationsIllustrationsList />
            </section>
        </div>
    )
}

Component.displayName = "About Us Page";