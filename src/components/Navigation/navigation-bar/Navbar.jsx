import Logo from '../../../assets/logo/logo.png'
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../assets/data/data'

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <img src={Logo} alt="brand logo" className={styles.logo} />
                <div className={styles.brandName}>
                    <NavLink to="/" className={styles.navlink}>designo</NavLink>
                </div>
            </div>
            <div className={styles.hamburger}></div>
            <div className={styles.navLinksWrapper}>
                {navLinks.map((navlink, index) => (
                    <div key={index} className={styles.navbarLink}>
                        <NavLink to={navlink === 'our company' ? '/about-us' : `/${navlink}`} className={styles.navlink}>{navlink}</NavLink>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;