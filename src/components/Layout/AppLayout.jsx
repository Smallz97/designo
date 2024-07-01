import { Outlet } from 'react-router-dom'
import Navbar from '../Navigation/navigation-bar/Navbar'
import Footer from '../Navigation/footer-bar/Footer'

const AppLayout = () => {
    return (
        <>
            <header><Navbar /></header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
        </>
    )
}

export default AppLayout;
