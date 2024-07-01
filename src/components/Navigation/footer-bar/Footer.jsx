import { useLocation } from 'react-router-dom';
import GetInTouch from './GetInTouch';
import FooterBlock from './FooterBlock';
import styles from './Footer.module.css'

const Footer = () => {
    const location = useLocation();
    const footerClassName = `${styles.footer} ${location.pathname === '/contact' ? styles.contactpageFooter : ''}`;
    return (
        <div className={footerClassName}>
            {location.pathname === '/contact' ? null : <GetInTouch />}
            <FooterBlock />
        </div>
    )
}

export default Footer;