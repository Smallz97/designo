import { Component } from 'react'
import ServicesHeader from '../../components/service-page-banner/ServicePageBanner'
import ProjectCard from '../../components/project-card/ProjectCard'
import WebDesign from "../../assets/images/services/webDesign.png"
import GraphicDesign from "../../assets/images/services/graphicDesign.png"
import ServiceCard from "../../components/service-card/ServiceCard";
export const AppDesign = () => {
    const headerContent = {
        title: "app design",
        description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
    }
    const servicesArray = [
        {
            name: "Web Design",
            image: WebDesign,
        },
        {
            name: "Graphic Design",
            image: GraphicDesign,
        },
    ];

    return (
        <div className={styles.servicePage}>
            <section className={styles.bannerSection}>
                <ServicesHeader title={headerContent.title} description={headerContent.description} />
            </section>
            <section className={styles.portfolio}>
                {projectsArray.map((project, index) => (
                    <ProjectCard key={index} image={project.image} name={project.name} description={project.description} />
                ))}
            </section>
            <section className={styles.services}>
                {servicesArray.map((service, index) => (
                    <ServiceCard key={index} image={service.image} name={service.name} />
                ))}
            </section>
        </div>
    );
}

Component.displayName = "App Design";
