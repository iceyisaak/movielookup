import { ChangeEvent, SyntheticEvent, useState } from "react";
import { getSearchCinema } from "../../apis/movie-api";
import { Route } from '../../routes/__root';
import { SearchResult } from "../../types";
import { SearchSuggestionMenu } from "./search-suggestion-menu";

import { useNavigate } from "@tanstack/react-router";
import { GrClose } from "react-icons/gr";
// import { createSearchParams, useNavigate } from "react-router-dom";

export const SearchForm = () => {

    // const inputRef = useRef(null)
    const [searchInput, setSearchInput] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)
    const navigate = useNavigate({
        from: Route.fullPath
    })

    const { data: SearchResult } = getSearchCinema(searchInput)


    const searchFormAction = async (formData: FormData) => {

        navigate({
            search: {
                title: formData.get('searchTerm'),
                page: 1
            },
            to: '/results'
        })
    }

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
        // inputRef.current?.blur()
    }

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchTerm = e.target.value
        console.log('searchTerm: ', searchTerm)
        setSearchInput(searchTerm)
    }

    console.log('SearchResult', SearchResult)


    return (
        <form
            // onSubmit={searchCinemaHandler}
            action={searchFormAction as unknown as string}
            // ref={inputRef}
            className="w-full flex flex-col relative"
        >
            <div className="flex relative">
                <input
                    name="searchTerm"
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
            </div>
            {
                searchInput !== ''
                &&
                <GrClose
                    className={`
                        w-12 h-12 absolute right-4 top-1
                        `}
                    onClick={clearInputHandler}
                />
            }
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
