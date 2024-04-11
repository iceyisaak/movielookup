import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export function MainLayout() {

    return (
        <main className="w-screen bg-gray-950 pb-52">
            <Navbar />
            <Outlet />
        </main>
    )
}
