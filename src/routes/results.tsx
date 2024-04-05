import { createFileRoute } from '@tanstack/react-router'
import { ResultPage } from '../pages'

export const Route = createFileRoute('/results')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      // Search: [
      //   {
      title: search.title as string,
      year: search.year as string,
      imdbID: search.imdbID as string,
      type: search.type as string,
      poster: search.poster as string
      //   }
      // ]
      // ,
      // totalResults: results.totalResults as string,
      // Response: results.Response as string
    }
  },
  component: ResultPage
})