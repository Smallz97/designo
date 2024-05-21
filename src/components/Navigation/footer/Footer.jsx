import Logo from '../../../assets/logo/logo.png'
import { navLinks } from '../../../assets/data/data'
import Button from '../../Buttons/Button';
import { FacebookIcon, YoutubeIcon, TwitterIcon, PinterestIcon, InstagramIcon } from '../../../assets/icons/Icons'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [<FacebookIcon />, <YoutubeIcon />, <TwitterIcon />, <PinterestIcon />, <InstagramIcon />];

    return (
        <div className={styles.footer}>
            <div id="getInTouch" className={styles.getInTouch}>
                <div className={styles.sectionHeading}>Let's talk about your project</div>
                <div className={styles.smallText}>
                    Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </div>
                <Link to='/contact-us'>
                    <Button text={`get in touch`} textColor={`#333136`} backgroundColor={`#FFFFFF`} />
                </Link>
            </div>
            <div className={styles.footerBar}>
                <div className={styles.brand}>
                    <img src={Logo} alt="brand logo" className={styles.logo} />
                    <div className={styles.brandName}>designo</div>
                </div>
                <hr className={styles.horizontalLine} />
                <div className={styles.footerLinks}>
                    {navLinks.map((navlink, index) => (
                        <div key={index} className={styles.footerLink}>
                            {navlink}
                        </div>
                    ))}
                </div>
                <div className={styles.address}>
                    Designo Central Office<br />3886 Wellington Street<br />Toronto, Ontario M9C 3J5
                </div>
                <div className={styles.contact}>
                    Contact Us (Central Office)<br />P : +1 253-863-8967<br />M : contact@designo.co
                </div>
                <div className={styles.socialLinks}>
                    {socialLinks.map((socialIcon, index) => (
                        <div key={index} className={styles.socialLink}>
                            {socialIcon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;