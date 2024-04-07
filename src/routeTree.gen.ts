/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResultsImport } from './routes/results'
import { Route as IndexImport } from './routes/index'
import { Route as DetailImdbIDImport } from './routes/detail/$imdbID'
import { Route as LayoutsWatchlistlayoutImport } from './routes/_layouts/watchlistlayout'
import { Route as LayoutsResultslayoutImport } from './routes/_layouts/resultslayout'

// Create/Update Routes

const ResultsRoute = ResultsImport.update({
  path: '/results',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DetailImdbIDRoute = DetailImdbIDImport.update({
  path: '/detail/$imdbID',
  getParentRoute: () => rootRoute,
} as any)

const LayoutsWatchlistlayoutRoute = LayoutsWatchlistlayoutImport.update({
  path: '/watchlistlayout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutsResultslayoutRoute = LayoutsResultslayoutImport.update({
  path: '/resultslayout',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/results': {
      preLoaderRoute: typeof ResultsImport
      parentRoute: typeof rootRoute
    }
    '/_layouts/resultslayout': {
      preLoaderRoute: typeof LayoutsResultslayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layouts/watchlistlayout': {
      preLoaderRoute: typeof LayoutsWatchlistlayoutImport
      parentRoute: typeof rootRoute
    }
    '/detail/$imdbID': {
      preLoaderRoute: typeof DetailImdbIDImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ResultsRoute,
  LayoutsResultslayoutRoute,
  LayoutsWatchlistlayoutRoute,
  DetailImdbIDRoute,
])

/* prettier-ignore-end */
