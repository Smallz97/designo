import Navbar from '../Navigation/navigation-bar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Navigation/footer/Footer'

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
