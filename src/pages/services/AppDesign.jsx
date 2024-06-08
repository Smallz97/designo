import { Component } from 'react'
import Header from '../../components/Headers/service-pages/ServicePageHeader'
import { appDesignheaderContent } from '../../assets/data/data'
import ProjectsList from '../../components/Cards/project-card/ProjectsList'
import { appDesignProjects } from '../../assets/data/data'
import FirstImage from '../../assets/images/project-card-images/app/firstImage.png'
import SecondImage from '../../assets/images/project-card-images/app/secondImage.png'
import ThirdImage from '../../assets/images/project-card-images/app/thirdImage.png'
import FourthImage from '../../assets/images/project-card-images/app/fourthImage.png'
import FifthImage from '../../assets/images/project-card-images/app/fifthImage.png'
import ServicesList from '../../components/Cards/service-card/ServicesList'

import styles from './ServicePages.module.css'

export const AppDesign = () => {
    const imagesList = [
        FirstImage,
        SecondImage,
        ThirdImage,
        FourthImage,
        FifthImage
    ]

    return (
        <div className={styles.servicePage}>
            <section id='header-section'>
                <Header title={appDesignheaderContent.title} description={appDesignheaderContent.description} />
            </section>
            <section id='portfolio-section' className={styles.portfolioSection}>
                <ProjectsList projects={appDesignProjects} images={imagesList} type={`app`} />
            </section>
            <section id='other-services-section' className={styles.otherServicesSection}>
                <ServicesList excludeService={`app design`} />
            </section>
        </div>
    );
}

Component.displayName = "App Design";
