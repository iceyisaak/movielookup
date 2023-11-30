import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { CinemaDetail, SearchResult } from "../types"
import { APIKEY, BASEURL } from "./api-constant"


type GetSearchCinema = {
    SEARCH_TERM?: string,
    PAGE_NUMBER?: number
}

export const getSearchCinema = ({ SEARCH_TERM, PAGE_NUMBER }: GetSearchCinema) => {

    const searchQuery = `&s=${SEARCH_TERM}`
    const pageQuery = `&p=${PAGE_NUMBER}`

    const APINAME = 'search-movies'
    const APIURL = `${BASEURL}${APIKEY}${searchQuery}${pageQuery}`

    return useQuery({
        queryKey: [APINAME, PAGE_NUMBER],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SearchResult
        },
        enabled: SEARCH_TERM !== undefined && SEARCH_TERM !== ''
    })
}



export const getCinemaDetail = (CINEMA_ID?: number, plotLength?: 'short' | 'long') => {

    const cinemaQuery = `&t=${CINEMA_ID}`
    const plotLengthQuery = `&plot=${plotLength}`
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