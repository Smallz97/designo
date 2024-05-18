// import Logo from './assets/logo/brandLogo.png'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                {/* <img src={Logo} alt="brand logo" className={styles.logo} /> */}
                <div className={styles.brandName}><NavLink to="/" className={styles.navlink}>designo</NavLink></div>
            </div>
            <div className={styles.navItems}></div>
        </nav>
    )
}

export default Navbar;