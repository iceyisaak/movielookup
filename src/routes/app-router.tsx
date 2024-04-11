import { createBrowserRouter } from "react-router-dom";
import { Home } from '../pages/home';
import { ResultsPage } from "../pages/results-page";
import { MainLayout } from "../layouts/main-layout";
import { DetailPage } from "../pages";
import { WatchlistPage } from "../pages/watchlist-page";

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'results',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ResultsPage />
      }
      // {
      //   path: '/:imdbID',
      //   element: <DetailPage />
      // }
    ]
  },
  {
    path: 'detail/:imdbID',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DetailPage />
      }
    ]
  },
  {
    path: 'watchlist',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <WatchlistPage />
      }
    ]
  }
])