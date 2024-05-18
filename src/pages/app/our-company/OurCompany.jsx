import Banner from '../../../components/Banners/home-page/HomePageBanner'
import ServiceCard from '../../../components/Cards/service-card/ServiceCard'
import WebDesignImage from '../../../assets/images/service-images/webDesign.png'
import AppDesignImage from '../../../assets/images/service-images/appDesign.png'
import GraphicDesignImage from '../../../assets/images/service-images/graphicDesign.png'
import QualitiesIllustrationsList from '../../../components/Illustrations/qualities-illustrations-list/QualitiesIllustrationsList'

import styles from './OurCompany.module.css'

const Home = () => {
    const servicesArray = [
        {
            name: "Web Design",
            image: WebDesignImage,
            link: "/web-design",
        },
        {
            name: "App Design",
            image: AppDesignImage,
            link: "/app-design",
        },
        {
            name: "Graphic Design",
            image: GraphicDesignImage,
            link: "/graphic-design",
        },
    ];
    return (
        <div className={styles.homepage}>
            <section id="hero-section" className={styles.heroSection}>
                <Banner />
            </section>
            <section id="services-section" className={styles.servicesSection}>
                <div className={styles.services}>
                    {servicesArray.map((service, index) => (
                        <ServiceCard key={index} image={service.image} name={service.name} link={service.link} />
                    ))}
                </div>
            </section>
            <section id="illustrations-section" className={styles.qualitiesSection}>
                <QualitiesIllustrationsList />
            </section>
        </div>
    )
}

export default Home;
