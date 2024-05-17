import { Component } from 'react'
import ServicesBanner from '../../components/service-page-banner/ServicePageBanner'
import ProjectCard from '../../components/project-card/ProjectCard'
import FirstImage from '../../assets/images/projects/app/firstImage.png'
import SecondImage from '../../assets/images/projects/app/secondImage.png'
import ThirdImage from '../../assets/images/projects/app/thirdImage.png'
import FourthImage from '../../assets/images/projects/app/fourthImage.png'
import FifthImage from '../../assets/images/projects/app/fifthImage.png'
import WebDesignImage from '../../assets/images/services/webDesign.png'
import GraphicDesignImage from '../../assets/images/services/graphicDesign.png'
import ServiceCard from '../../components/service-card/ServiceCard'

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
            <section className={styles.portfolio}>
                {projectsArray.map((project, index) => (
                    <ProjectCard key={index} image={project.image} name={project.name} description={project.description} />
                ))}
            </section>
            <section className={styles.services}>
                {servicesArray.map((service, index) => (
                    <ServiceCard key={index} image={service.image} name={service.name} link={service.link} />
                ))}
            </section>
        </div>
    );
}

Component.displayName = "App Design";
