import HomePageHeader from '../../../components/Headers/home-page/HomePageHeader'
import ServicesList from '../../../components/Cards/service-card/ServicesList'
import QualitiesIllustrationsList from '../../../components/Illustrations/qualities-illustrations-list/QualitiesIllustrationsList'

import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.homepage}>
            <section id='header-section'>
                <HomePageHeader />
            </section>
            <section id='services-section' className={styles.servicesSection}>
                <ServicesList />
            </section>
            <section id='qualities-illustrations-section' className={styles.qualitiesIllustrationsSection}>
                <QualitiesIllustrationsList />
            </section>
        </div>
    )
}

export default Home;
