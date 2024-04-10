import { createBrowserRouter } from "react-router-dom";
import { Home } from '../pages/home';
import { ResultsLayout } from "./_layouts/_resultslayout";
import { ResultsPage } from "../pages/results-page";
// import { DetailPage } from "../pages/detail-page";

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/results',
    element: <ResultsLayout />,
    children: [
      {
        index: true,
        element: <ResultsPage />
      },
      // {
      //   path: '/:imdbID',
      //   element: <DetailPage />
      // }
    ]
  }
])