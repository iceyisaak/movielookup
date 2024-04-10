import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import { AppRouter } from "../../routes/app-router"



export const App = () => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={AppRouter} />
        </QueryClientProvider>
    )
}