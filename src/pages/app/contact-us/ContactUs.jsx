import { Component } from "react";
import ContactForm from "../../../components/Headers/contact-page/ContactForm";
import LocationsIllustrationsList from '../../../components/Illustrations/locations-illustrations-list/LocationsIllustrationsList'

import styles from './ContactUs.module.css'

export const ContactUs = () => {
    return <div className={styles.contactUsPage}>
        <section id='header-section'>
            <ContactForm />
        </section>
        <section id='location-illustraions-section' className={styles.locationsIllustrationsSection}>
            <LocationsIllustrationsList />
        </section>
    </div>;
};

Component.displayName = "Contact Us";