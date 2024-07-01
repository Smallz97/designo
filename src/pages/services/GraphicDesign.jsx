import { Component } from 'react'
import Header from '../../components/Headers/service-page/ServicePageHeader'
import { graphicDesignheaderContent } from '../../assets/data/data'
import ProjectsList from '../../components/Cards/project-card/ProjectsList'
import { graphicDesignProjects } from '../../assets/data/data'
import FirstImage from '../../assets/images/project-card-images/graphics/firstImage.png'
import SecondImage from '../../assets/images/project-card-images/graphics/secondImage.png'
import ThirdImage from '../../assets/images/project-card-images/graphics/thirdImage.png'
import ServicesList from '../../components/Cards/service-card/ServicesList'

import styles from './ServicePages.module.css'

export const GraphicDesign = () => {
    const imagesList = [
        FirstImage,
        SecondImage,
        ThirdImage,
    ]

    return (
        <div className={styles.servicePage}>
            <section id='header-section'>
                <Header title={graphicDesignheaderContent.title} description={graphicDesignheaderContent.description} />
            </section>
            <section id='portfolio-section' className={styles.portfolioSection}>
                <ProjectsList projects={graphicDesignProjects} images={imagesList} type={`graphics`} />
            </section>
            <section id='other-services-section' className={styles.otherServicesSection}>
                <ServicesList excludeService={`graphic design`} />
            </section>
        </div>
    );
}

Component.displayName = "App Design";
