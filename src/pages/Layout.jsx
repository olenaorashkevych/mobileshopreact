import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Hotoffers from "../components/Hotoffers"
import Mycart from "../components/Mycart"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Hotoffers />
            <Gallery />
            <Footer />
            <Mycart />
        </>
    )
}

export default Layout