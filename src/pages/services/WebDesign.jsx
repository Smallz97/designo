import { Component } from 'react'
import Header from '../../components/Headers/service-pages/ServicePageHeader'
import ProjectCard from '../../components/Cards/project-card/ProjectCard'
import FirstImage from '../../assets/images/project-card-images/web/firstImage.png'
import SecondImage from '../../assets/images/project-card-images/web/secondImage.png'
import ThirdImage from '../../assets/images/project-card-images/web/thirdImage.png'
import FourthImage from '../../assets/images/project-card-images/web/fourthImage.png'
import FifthImage from '../../assets/images/project-card-images/web/fifthImage.png'
import SixthImage from '../../assets/images/project-card-images/web/sixthImage.png'
import ServicesList from '../../components/Cards/service-card/ServicesList'

import styles from './ServicePages.module.css'

export const WebDesign = () => {
    const headerContent = {
        title: "Web Design",
        description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    };

    const projectsArray = [
        {
            name: "express",
            image: FirstImage,
            description: "A multi-carrier shipping website for ecommerce businesses",
        },
        {
            name: "transfer",
            image: SecondImage,
            description: "Site for low-cost money transfers and sending money within seconds",
        },
        {
            name: "photon",
            image: ThirdImage,
            description: "A state-of-the-art music player with high-resolution audio and DSP effects",
        },
        {
            name: "builder",
            image: FourthImage,
            description: "Connects users with local contractors based on their location",
        },
        {
            name: "blogr",
            image: FifthImage,
            description: "Blogr is a platform for creating an online blog or publication",
        },
        {
            name: "camp",
            image: SixthImage,
            description: "Get expert training in coding, data, design, and digital marketing",
        },
    ];

    return (
        <div className={styles.servicePage}>
            <section id='header-section'>
                <Header title={headerContent.title} description={headerContent.description} />
            </section>
            <section id='portfolio-section' className={styles.portfolioSection}>
                {projectsArray.map((project, index) => (
                    <ProjectCard key={index} image={project.image} name={project.name} description={project.description} />
                ))}
            </section>
            <section id='other-services-section' className={styles.otherServicesSection}>
                <ServicesList excludeService={`web design`} />
            </section>
        </div>
    );
};

Component.displayName = "Web Design";