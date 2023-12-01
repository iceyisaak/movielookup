import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

export const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}