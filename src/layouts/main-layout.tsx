import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export function MainLayout() {

    return (
        <main className=" bg-gray-950 pb-52">
            <Navbar />
            <Outlet />
        </main>
    )
}
