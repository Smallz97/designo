import { Component } from 'react'
import Header from '../../components/Headers/service-pages/ServicePageHeader'
import { webDesignheaderContent } from '../../assets/data/data'
import ProjectsList from '../../components/Cards/project-card/ProjectsList'
import { webDesignProjects } from '../../assets/data/data'
import FirstImage from '../../assets/images/project-card-images/web/firstImage.png'
import SecondImage from '../../assets/images/project-card-images/web/secondImage.png'
import ThirdImage from '../../assets/images/project-card-images/web/thirdImage.png'
import FourthImage from '../../assets/images/project-card-images/web/fourthImage.png'
import FifthImage from '../../assets/images/project-card-images/web/fifthImage.png'
import SixthImage from '../../assets/images/project-card-images/web/sixthImage.png'
import ServicesList from '../../components/Cards/service-card/ServicesList'

import styles from './ServicePages.module.css'

export const WebDesign = () => {
    const imagesList = [
        FirstImage,
        SecondImage,
        ThirdImage,
        FourthImage,
        FifthImage,
        SixthImage
    ]

    return (
        <div className={styles.servicePage}>
            <section id='header-section'>
                <Header title={webDesignheaderContent.title} description={webDesignheaderContent.description} />
            </section>
            <section id='portfolio-section' className={styles.portfolioSection}>
                <ProjectsList projects={webDesignProjects} images={imagesList} />
            </section>
            <section id='other-services-section' className={styles.otherServicesSection}>
                <ServicesList excludeService={`web design`} />
            </section>
        </div>
    );
};

Component.displayName = "Web Design";