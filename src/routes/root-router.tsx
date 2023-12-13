import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HomeLayout, RootLayout } from "../layouts";
import { DetailPage, FavouritePage, Home, Page404, ResultPage, WatchedPage, WatchlistPage } from "../pages";
import { MarkedPage } from "../pages/marked-page";


export const RootRouter = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={< HomeLayout />}>
            <Route index element={< Home />} />

            <Route element={< RootLayout />} >
                <Route path="results" element={< ResultPage />} />
                <Route path="cinema">
                    <Route index path=":cinemaId" element={< DetailPage />} />
                </Route>

                <Route path="marked" element={<MarkedPage />}>
                    <Route index path="favourite" element={< FavouritePage />} />
                    <Route path="watched" element={< WatchedPage />} />
                    <Route path="watchlist" element={< WatchlistPage />} />
                </Route>


            </Route>

            < Route path="*" element={< Page404 />} />
        </Route >

    )
)