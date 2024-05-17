import { Component } from 'react'
import ServicesBanner from '../../components/service-page-banner/ServicePageBanner'
import FirstImage from '../../assets/images/projects/web/firstImage.png'
import SecondImage from '../../assets/images/projects/web/secondImage.png'
import ThirdImage from '../../assets/images/projects/web/thirdImage.png'
import FourthImage from '../../assets/images/projects/web/fourthImage.png'
import FifthImage from '../../assets/images/projects/web/fifthImage.png'
import SixthImage from '../../assets/images/projects/web/sixthImage.png'
import ProjectCard from '../../components/project-card/ProjectCard'
import AppDesign from '../../assets/images/services/appDesign.png'
import GraphicDesign from '../../assets/images/services/graphicDesign.png'
import ServiceCard from '../../components/service-card/ServiceCard'

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

    const otherServicesArray = [
        {
            name: "App Design",
            image: AppDesign,
            link: "/app-design",

        },
        {
            name: "Graphic Design",
            image: GraphicDesign,
            link: "/graphic-design",
        },
    ];
    return (
        <div className={styles.servicePage}>
            <section className={styles.bannerSection}>
                <ServicesBanner title={headerContent.title} description={headerContent.description} />
            </section>
            <section className={styles.portfolio}>
                {projectsArray.map((project, index) => (
                    <ProjectCard key={index} image={project.image} name={project.name} description={project.description} />
                ))}
            </section>
            <section className={styles.services}>
                {otherServicesArray.map((service, index) => (
                    <ServiceCard key={index} image={service.image} name={service.name} link={service.link} />
                ))}
            </section>
        </div>
    );
};

Component.displayName = "Web Design";