import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { RootLayout } from "../layouts/root-layout";
import { Home, Page404 } from "../pages";


export const RootRouter = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={< RootLayout />}>
            <Route index element={< Home />} />
            <Route path="/results" element={< SearchResultsPage />} />
            <Route path="/movie" element={< MoviePage />} />
            <Route path="/marked/favourite" element={< FavouritePage />} />
            <Route path="/marked/watched" element={< WatchlistPage />} />
            <Route path="/watchlist" element={< WatchlistPage />} />



            <Route path="*" element={< Page404 />} />
        </Route>
    )
)