import { Outlet, ScrollRestoration } from "react-router-dom"
import { Navbar } from '../components/navbar'
// import {Footer} from '../components/footer'

export const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}