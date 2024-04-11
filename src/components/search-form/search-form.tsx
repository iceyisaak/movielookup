import { ChangeEvent, useEffect, useRef, useState } from "react";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getSearchCinema } from "../../apis/movie-api";
import { SearchSuggestionMenu } from "./search-suggestion-menu";

import { GrClose } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { SearchResult } from "../../types";



export const SearchForm = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [searchInput, setSearchInput] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const [showSuggestionMenu, setShowSuggestionMenu] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams, _setSearchParams] = useSearchParams()
    const pathname = location.pathname

    console.log('searchParams: ', searchParams.get('title'))

    const { data: SearchResult } = getSearchCinema(searchInput)


    const searchFormAction = async (formData: FormData) => {

        // console.log('formData: ', formData.get('searchTerm'))
        // const searchTerm = formData.get('searchTerm');

        inputBlurHandler()

        if (searchInput === '' || searchInput === null) return

        return navigate({
            pathname: '/results',
            search: createSearchParams({
                title: searchInput,
                page: '1'
            }).toString()
        })

    }
    console.log('inputFocus: ', inputFocus)

    const inputFocusHandler = () => {
        setInputFocus(true)
        showSuggestionMenuHandler()
    }

    const inputBlurHandler = () => {
        inputRef.current?.blur()
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
        navigate(urlPath)
        console.log('itemClickHandler(): ', urlPath)
    }

    // const searchCinemaHandler = (e: SyntheticEvent) => {
    // e.preventDefault()
    // inputRef.current?.blur()
    // }

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchTerm = e.target.value
        setSearchInput(searchTerm)
    }

    // console.log('SearchResult', SearchResult)

    useEffect(() => {
        const searchTitle = searchParams.get('title')
        if (searchTitle !== '') {
            setSearchInput(searchTitle!)
        }
    }, [])


    return (
        <>
            {pathname === '/' ?
                <form
                    action={searchFormAction as unknown as string}
                    className="w-full flex flex-col relative"
                >
                    <div className="flex relative">
                        <input
                            ref={inputRef}
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
                :
                <form
                    className="flex justify-center relative w-7/12 z-10"
                    action={searchFormAction as unknown as string}
                >
                    <div className="w-full flex relative">
                        <input
                            ref={inputRef}
                            name="searchTerm"
                            type="text"
                            onChange={searchInputHandler}
                            onFocus={inputFocusHandler}
                            onBlur={inputBlurHandler}
                            value={searchInput}
                            className="w-full h-14 px-3 rounded-md text-xl"
                            placeholder="e.g. Titanic"
                        />
                        {
                            searchInput !== ''
                            &&
                            <GrClose
                                className={`
                                    w-10
                                    h-10
                                    absolute
                                    right-4
                                    top-2
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
                    <button className="
                        bg-gray-300
                        w-2/12
                        mx-2
                        rounded-md
                        text-xl
                        flex
                        justify-center
                        items-center
                        bg-orange-500
                    ">
                        <IoSearchOutline size={15} />
                    </button>
                </form>
            }
        </>
    )
}
