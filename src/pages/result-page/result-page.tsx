// import { SearchBar } from "../../components/search-form"

// import { Link } from "@tanstack/react-router";
// import { useNavigate } from "@tanstack/react-router";
import { getSearchCinema } from "../../apis/movie-api";
import { Route } from '../../routes/results'

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { IoSearchOutline } from "react-icons/io5";
import { MdPlaylistAdd } from "react-icons/md";
import { PiCheckCircleThin } from "react-icons/pi";
// import { Pagination } from '../../components/pagination';




export const ResultPage = () => {

    const { title, } = Route.useSearch()
    // const navigate = useNavigate({
    //     from: Route.fullPath
    // })
    // navigate({
    //     search: title
    // })
    console.log('title: ', title)



    // const { Search, totalResults, Response } = Route.useSearch()

    // console.log('Search', Search)
    // console.log('totalResults', totalResults)
    // console.log('Response', Response)


    // const [searchParams, setSearchParams] = useSearchParams()
    // const [resultPage, setResultPage] = useState(1)
    // const searchTitleString = searchParams.get('title')?.toString()
    const searchTitleString = title
    // const searchPageString = searchParams.get('page')
    // const [currentPage, setCurrentPage] = useState(+searchPageString!)
    // const { data: SearchResult } = getSearchCinema(searchTitleString, +currentPage)
    const { data: SearchResult } = getSearchCinema(searchTitleString, 1)

    console.log('SearchResult: ', SearchResult)


    // const onPageChangeHandler = (page: number) => {
    // setCurrentPage(page)
    // }

    // console.log('SearchResults: ', SearchResult)

    // type UseManageSearchParams = {
    //     key: string,
    //     value: string | null
    // }
    // const useManageSearchParams = ({ key, value }: UseManageSearchParams) => {
    // const sParams = new URLSearchParams(searchParams)
    // if (value === null) {
    //     sParams.delete(key)
    // } else {
    //     sParams.set(key, value)
    // }
    // return `?${sParams.toString()}`
    // }


    return (
        <section className="w-screen bg-green-400 pt-32 pb-52">
            <article className="flex justify-center bg-blue-600 mb-10">
                <div className="w-8/12 bg-red-400 flex">
                    <input
                        // value={'Search Bar'}
                        className="w-10/12 h-16 px-2 rounded-md text-xl"
                        placeholder="e.g. Titanic"
                    />
                    <button className="bg-gray-300 w-2/12 mx-2 rounded-md text-xl flex justify-center items-center">
                        <IoSearchOutline size={15} />
                    </button>
                </div>
            </article>

            <article className="mb-5 px-5">
                <h2 className="text-4xl">
                    Search Results for: "{title ? title : null}"
                </h2>
                <p>
                    Found: {SearchResult?.totalResults} Cinema(s)
                </p>
            </article>

            <article className="flex justify-center">
                <div className='flex flex-wrap justify-center bg-red-200
                w-[auto]
                sm:w-[120rem]
                '>
                    {SearchResult?.Search.map(
                        (cinema) => (
                            <Link
                                key={cinema.imdbID}
                                // to={useManageSearchParams({
                                //     key: 'imdbID',
                                //     value: `${cinema.imdbID}`
                                // })}
                                className="mx-2 my-2 bg-orange-300 w-80 relative">
                                <div className="inline-flex">
                                    <img
                                        src={
                                            cinema.Poster === 'N/A' ?
                                                `https://placehold.co/90x135?text=N/A` :
                                                cinema.Poster
                                        }
                                        alt={cinema.Title}
                                        className='w-80 h-full'
                                    />
                                </div>
                                <div className="px-1 pb-5 relative">
                                    <div className="flex flex-wrap">
                                        <h1 className="text-3xl font-bold break-words">
                                            {cinema.Title}
                                        </h1>
                                    </div>
                                    <p className="uppercase text-l">
                                        {cinema.Type}
                                    </p>
                                    <p>
                                        {cinema.Year}
                                    </p>
                                </div>
                                <span className="absolute right-1 bottom-0 flex">
                                    <MdPlaylistAdd size={20} />
                                    <PiCheckCircleThin size={20} />
                                </span>

                            </Link>
                        ))
                    }
                </div>
            </article>

            {/* <Pagination
                currentPage={currentPage}
                total={+SearchResult?.totalResults!}
                limit={10}
                onPageChange={onPageChangeHandler}
            /> */}

        </section >
    )
}


