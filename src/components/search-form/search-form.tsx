import { ChangeEvent, SyntheticEvent, useRef, useState } from "react"
import { getSearchCinema } from "../../apis/movie-api"
import { SearchResult } from "../../types"
import { SearchSuggestionMenu } from "./search-suggestion-menu/search-suggestion-menu"

import { GrClose } from "react-icons/gr";

export const SearchForm = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [searchInput, setSearchInput] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)

    const { data: SearchResult } = getSearchCinema(searchInput)

    const inputFocusHandler = () => {
        setInputFocus(true)
        showSuggestionMenuHandler()
    }

    const inputBlurHandler = () => {
        setInputFocus(false)
        showSuggestionMenuHandler()
    }

    const showSuggestionMenuHandler = () => {
        setShowSuggestionMenu(!showSuggestionMenu)
    }

    const clearInputHandler = () => {
        setSearchInput('')
    }

    const itemClickHandler = (urlPath: string) => () => {
        // navigate(urlPath)
        console.log('itemClickHandler(): ', urlPath)
    }


    const searchCinemaHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        if (searchInput === '') return
        console.log('searchCinemaHandler(): ', searchInput)
        // console.log('searchCinemaHandler()')
        // console.log('SearchResult', SearchResult)
    }

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchTerm = e.target.value
        console.log('searchTerm: ', searchTerm)
        setSearchInput(searchTerm)
    }

    console.log('SearchResult', SearchResult)


    return (
        <form onSubmit={searchCinemaHandler} className="w-full flex flex-col relative">
            <div>
                <input
                    ref={inputRef}
                    type="text"
                    className="
                    w-full
                    bg-gray-300
                    px-2
                    h-14
                    text-2xl
                    "
                    placeholder="e.g. Star Wars"
                    onChange={searchInputHandler}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    value={searchInput}
                />
                {
                    searchInput !== ''
                    &&
                    <GrClose
                        className={`
                        w-12 h-12 absolute
                        `}
                        onClick={clearInputHandler}
                    />
                }
            </div>
            {
                searchInput !== '' &&
                inputFocus &&
                <SearchSuggestionMenu
                    data={SearchResult as SearchResult}
                    itemClickHandler={itemClickHandler}
                />
            }

            <button className="bg-orange-500 py-4 text-2xl my-3">
                Look it up
            </button>

        </form>
    )
}
