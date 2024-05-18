import { Component } from 'react'
import ServicesBanner from '../../components/Banners/service-pages/ServicePageBanner'
import ProjectCard from '../../components/Cards/project-card/ProjectCard'
import FirstImage from '../../assets/images/project-images/app/firstImage.png'
import SecondImage from '../../assets/images/project-images/app/secondImage.png'
import ThirdImage from '../../assets/images/project-images/app/thirdImage.png'
import FourthImage from '../../assets/images/project-images/app/fourthImage.png'
import FifthImage from '../../assets/images/project-images/app/fifthImage.png'
import ServiceCard from '../../components/Cards/service-card/ServiceCard'
import WebDesignImage from '../../assets/images/service-images/webDesign.png'
import GraphicDesignImage from '../../assets/images/service-images/graphicDesign.png'

import styles from './ServicePages.module.css'

export const AppDesign = () => {
    const headerContent = {
        title: "app design",
        description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
    }

    const projectsArray = [
        {
            name: "air filter",
            image: FirstImage,
            description: "Solving the problem of poor indoor air quality by filtering the air",
        },
        {
            name: "eyecam",
            image: SecondImage,
            description: "Product that lets you edit your favorite photos and videos at any time",
        },
        {
            name: "face it",
            image: ThirdImage,
            description: "Get to meet your favorite internet superstar with the faceit app",
        },
        {
            name: "todo",
            image: FourthImage,
            description: "A todo app that features cloud sync with light and dark mode",
        },
        {
            name: "loopstudios",
            image: FifthImage,
            description: "A VR experience app made for Loopstudios",
        },
    ]

    const servicesArray = [
        {
            name: "Web Design",
            image: WebDesignImage,
            link: "/web-design",
        },
        {
            name: "Graphic Design",
            image: GraphicDesignImage,
            link: "/graphic-design",
        },
    ];

    return (
        <div className={styles.servicePage}>
            <section className={styles.bannerSection}>
                <ServicesBanner title={headerContent.title} description={headerContent.description} />
            </section>
            <section className={styles.portfolioSection}>
                {projectsArray.map((project, index) => (
                    <ProjectCard key={index} image={project.image} name={project.name} description={project.description} />
                ))}
            </section>
            <section className={styles.servicesSection}>
                {servicesArray.map((service, index) => (
                    <ServiceCard key={index} image={service.image} name={service.name} link={service.link} />
                ))}
            </section>
        </div>
    );
}

Component.displayName = "App Design";
