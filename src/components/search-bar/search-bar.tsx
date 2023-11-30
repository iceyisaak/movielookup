import { ChangeEvent, SyntheticEvent, useState } from "react"
import { getSearchCinema } from "../../apis/movie-api"
// import { SearchSuggestionMenu } from "./search-suggestion-menu/search-suggestion-menu"

export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')

    const { data: SearchResult } = getSearchCinema(searchInput)



    const searchCinemaHandler = (e: SyntheticEvent) => {
        e.preventDefault()

        console.log('searchCinemaHandler(): ', searchInput)
        // console.log('searchCinemaHandler()')
        console.log('SearchResult', SearchResult)
    }

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchTerm = e.target.value
        console.log('searchTerm: ', searchTerm)
        setSearchInput(searchTerm)
    }



    return (
        <form onSubmit={searchCinemaHandler} className="w-full flex flex-col">
            <input
                type="text"
                className="
                    bg-gray-300
                    px-2
                    h-14
                    text-2xl
                "
                placeholder="e.g. Star Wars"
                onChange={searchInputHandler}
                value={searchInput}
            />
            {/* <SearchSuggestionMenu /> */}
            <button className="bg-orange-500 py-4 text-2xl my-3">
                Look it up
            </button>
        </form>
    )
}
