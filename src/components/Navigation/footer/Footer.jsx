import Logo from '../../../assets/logo/logo.png'
import { navLinks } from '../../../assets/data/data'
import Button from '../../Buttons/Button';
import { NavLink } from 'react-router-dom';
import { FacebookIcon, YoutubeIcon, TwitterIcon, PinterestIcon, InstagramIcon } from '../../../assets/icons/Icons'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [<FacebookIcon />, <YoutubeIcon />, <TwitterIcon />, <PinterestIcon />, <InstagramIcon />];

    return (
        <div className={styles.footer}>
            <div id="getInTouch" className={styles.getInTouch}>
                <div className={styles.getInTouchTextWrapper}>
                    <div className={styles.heading}>Let's talk about your project</div>
                    <div className={styles.text}>
                        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                    </div>
                </div>
                <Link to='/contact-us'>
                    <Button text={`get in touch`} textColor={`#333136`} backgroundColor={`#FFFFFF`} />
                </Link>
            </div>
            <div className={styles.footerBar}>
                <div className={styles.footerNavlinks}>
                    <div className={styles.brand}>
                        <img src={Logo} alt="brand logo" className={styles.logo} />
                        <div className={styles.brandName}>
                            <NavLink to="/" className={styles.navlink}>designo</NavLink>
                        </div>
                    </div>
                    <hr className={`${styles.horizontalLine} ${styles.firstLine}`} />
                    <div className={styles.footerLinksWrapper}>
                        {navLinks.map((navlink, index) => (
                            <div key={index} className={styles.footerLink}>
                                <NavLink to={navlink === 'our company' ? '/' : `/${navlink}`} className={styles.navlink}>{navlink}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className={`${styles.horizontalLine} ${styles.secondLine}`} />
                <div className={styles.contactWrapper}>
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
        </div>
    )
}

export default Footer;