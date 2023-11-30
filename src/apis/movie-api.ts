import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SearchResult } from "../types/search-result"
import { APIKEY, BASEURL } from "./api-constant"


type GetSearchCinema = {
    searchTerm: string
}


export const getSearchCinema = ({ searchTerm }: GetSearchCinema) => {

    const searchQuery = `&s=${searchTerm}`

    const APINAME = 'search-movies'
    const APIURL = `${BASEURL}${APIKEY}${searchQuery}`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = await response.data
            return data as SearchResult
        },
        enabled: searchTerm !== undefined && searchTerm !== ''
    })
}