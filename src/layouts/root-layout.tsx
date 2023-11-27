import { Outlet, ScrollRestoration } from "react-router-dom"

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