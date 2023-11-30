import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { CinemaDetail, SearchResult } from "../types"
import { APIKEY, BASEURL } from "./api-constant"


// type GetSearchCinema = {
//     SEARCH_TERM?: string | undefined,
//     SEARCH_YEAR?: number,
//     PAGE_NUMBER?: number,
// }

// export const getSearchCinema = ({ SEARCH_TERM, SEARCH_YEAR, PAGE_NUMBER }: GetSearchCinema) => {
export const getSearchCinema = (SEARCH_TERM?: string, SEARCH_YEAR?: number, PAGE_NUMBER?: number) => {

    console.log('SEARCH_TERM: ', typeof SEARCH_TERM, SEARCH_TERM)

    const searchTermQuery = `${!SEARCH_TERM === undefined ? null : `&s=${SEARCH_TERM}`}`
    const pageQuery = `${PAGE_NUMBER === undefined ? `&page=1` : `&page=${PAGE_NUMBER}`}`
    const searchYearQuery = `${SEARCH_YEAR === undefined ? null : `&y=${SEARCH_YEAR}`}`

    const APIURL = `${BASEURL}${APIKEY}${searchTermQuery}${searchYearQuery}${pageQuery}`

    console.log('APIURL: ', APIURL)

    return useQuery({
        queryKey: [SEARCH_TERM, PAGE_NUMBER, SEARCH_YEAR],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SearchResult
        },
        enabled: SEARCH_TERM !== undefined && SEARCH_TERM !== '' && SEARCH_TERM !== null
    })
}


type GetCinemaDetail = {
    CINEMA_ID?: number,
    PLOT_LENGTH?: 'short' | 'full'
}


export const getCinemaDetail = ({ CINEMA_ID, PLOT_LENGTH }: GetCinemaDetail) => {

    const cinemaQuery = `&t=${CINEMA_ID}`
    const plotLengthQuery = `&plot=${PLOT_LENGTH}`
    const APIURL = `${BASEURL}${APIKEY}${cinemaQuery}${plotLengthQuery}`

    return useQuery({
        queryKey: [CINEMA_ID],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as CinemaDetail
        },
        enabled: CINEMA_ID !== undefined
    })

}