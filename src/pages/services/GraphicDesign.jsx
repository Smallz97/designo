import { Component } from 'react'
import Header from '../../components/Headers/service-pages/ServicePageHeader'
import ProjectCard from '../../components/Cards/project-card/ProjectCard'
import FirstImage from '../../assets/images/project-card-images/graphics/firstImage.png'
import SecondImage from '../../assets/images/project-card-images/graphics/secondImage.png'
import ThirdImage from '../../assets/images/project-card-images/graphics/thirdImage.png'
import ServicesList from '../../components/Cards/service-card/ServicesList'

import styles from './ServicePages.module.css'

export const GraphicDesign = () => {
    const headerContent = {
        title: "graphic design",
        description: "We deliver eye-catching branding materials that are tailored to meet your business objectives."
    };

    const projectsArray = [
        {
            name: "tim brown",
            image: FirstImage,
            description: "A book cover designed for Tim Brown's new release, 'Change'",
        },
        {
            name: "boxed water",
            image: SecondImage,
            description: "A simple packaging concept made for Boxed Water",
        },
        {
            name: "science!",
            image: ThirdImage,
            description: "A poster made in collaboration with the Federal Art Project",
        },
    ]

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
                <ServicesList excludeService={`graphic design`} />
            </section>
        </div>
    );
}

Component.displayName = "App Design";
