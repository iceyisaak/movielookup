import { createFileRoute } from '@tanstack/react-router'
import { ResultPage } from '../pages'

export const Route = createFileRoute('/results')({
  validateSearch: (results: Record<string, unknown>) => {
    return {
      // Search: [
      //   {
      Title: results.Title as string,
      Year: results.Year as string,
      imdbID: results.imdbID as string,
      Type: results.Type as string,
      Poster: results.Poster as string
      //   }
      // ]
      // ,
      // totalResults: results.totalResults as string,
      // Response: results.Response as string
    }
  },
  component: ResultPage
})