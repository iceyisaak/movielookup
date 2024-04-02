import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createRouter } from '@tanstack/react-router'
// import { router } from '../../routes/__root'

import { routeTree } from "../../routeTree.gen"

const router = createRouter({ routeTree })

export const App = () => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {/* <RouterProvider router={RootRouter} /> */}
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}