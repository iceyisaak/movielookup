import { ChangeEvent, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getSearchCinema } from "../../apis/movie-api";
import { SearchSuggestionMenu } from "./search-suggestion-menu";

import { GrClose } from "react-icons/gr";
import { SearchResult } from "../../types";



export const SearchForm = () => {

    // const inputRef = useRef(null)
    const [searchInput, setSearchInput] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)
    const navigate = useNavigate()

    const { data: SearchResult } = getSearchCinema(searchInput)


    const searchFormAction = async (formData: FormData) => {

        // console.log('formData: ', formData.get('searchTerm'))
        // const searchTerm = formData.get('searchTerm');

        return navigate({
            pathname: '/results',
            search: createSearchParams({
                title: searchInput,
                page: '1'
            }).toString()
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

    // const searchCinemaHandler = (e: SyntheticEvent) => {
    // e.preventDefault()
    // inputRef.current?.blur()
    // }

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
