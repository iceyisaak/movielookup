import { useState } from "react"
import { getSearchCinema } from "../../apis/movie-api"
import { SearchSuggestionMenu } from "./search-suggestion-menu/search-suggestion-menu"

export const SearchBar = () => {

    const [searchTerm, SET_SEARCH_TERM] = useState('')

    const { data: SearchResult } = getSearchCinema(searchTerm)


    return (
        <form className="w-full flex flex-col">
            <input
                type="text"
                className="
                            bg-gray-300
                            px-2
                            h-14
                            text-2xl
                        "
            />
            {/* <SearchSuggestionMenu /> */}
            <button className="bg-orange-500 py-4 text-2xl my-3">
                Look it up
            </button>
        </form>
    )
}
