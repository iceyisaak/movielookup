import { createRootRoute } from "@tanstack/react-router";
import { Home } from "../pages";

export const Route = createRootRoute({
    component: Home
})

// function RootComponent() {
//     return (
//         <>
//             <Link to='/'>Home</Link>
//         </>
//     )
// }



