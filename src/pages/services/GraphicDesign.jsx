import { Component } from 'react'
import ServicesHeader from '../../components/Banners/service-pages/ServicePageBanner'
import ProjectCard from '../../components/Cards/project-card/ProjectCard'
import FirstImage from '../../assets/images/project-images/graphics/firstImage.png'
import SecondImage from '../../assets/images/project-images/graphics/secondImage.png'
import ThirdImage from '../../assets/images/project-images/graphics/thirdImage.png'
import ServiceCard from '../../components/Cards/service-card/ServiceCard'
import WebDesign from '../../assets/images/service-images/webDesign.png'
import AppDesign from '../../assets/images/service-images/appDesign.png'

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

    const otherServicesArray = [
        {
            name: "app Design",
            image: AppDesign,
            link: "/app-design",
        },
        {
            name: "Web Design",
            image: WebDesign,
            link: "/web-design",
        },
    ];

    return (
        <div className={styles.servicePage}>
            <section className={styles.bannerSection}>
                <ServicesHeader title={headerContent.title} description={headerContent.description} />
            </section>
            <section className={styles.portfolioSection}>
                {projectsArray.map((project, index) => (
                    <ProjectCard key={index} image={project.image} name={project.name} description={project.description} />
                ))}
            </section>
            <section className={styles.servicesSection}>
                {otherServicesArray.map((service, index) => (
                    <ServiceCard key={index} image={service.image} name={service.name} link={service.link} />
                ))}
            </section>
        </div>
    );
}

Component.displayName = "App Design";
