import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Hotoffers from "../components/Hotoffers"
import Mycart from "../components/Mycart"

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Hotoffers />
            <Mycart />
        </>
    )
}

export default Layout