import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";
import { DetailPage } from "../pages";
import { Home } from '../pages/home';
import { ResultsPage } from "../pages/results-page";
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