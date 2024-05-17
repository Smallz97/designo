import Phone from '../../../assets/images/pages/hero/phone.png'
import WebDesignImage from '../../../assets/images/services/webDesign.png'
import AppDesignImage from '../../../assets/images/services/appDesign.png'
import GraphicDesignImage from '../../../assets/images/services/graphicDesign.png'
import ServiceCard from '../../../components/service-card/ServiceCard'
import IllustrationsList from '../../../components/illustrations/illustrations-list/IllustrationsList'
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
                <h1 className={styles.heroHeading}>
                    Award-winning custom designs and digital branding solutions
                </h1>
                <p className={styles.heroText}>
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <button className={`${styles.ctaButton} ${styles.heroButton}`} >Learn More</button>
                <div className={styles.heroImageContainer}>
                    <img src={Phone} alt="mobile phone" />
                </div>
            </section>
            <section id="services-section" className={styles.servicesSection}>
                <div className={styles.services}>
                    {servicesArray.map((service, index) => (
                        <ServiceCard key={index} image={service.image} name={service.name} link={service.link} />
                    ))}
                </div>
            </section>
            <section id="illustrations-section" className={styles.illustrationsSection}>
                <IllustrationsList />
            </section>
        </div>
    )
}

export default Home;
