import { Link, useSearchParams } from "react-router-dom";
import { getSearchCinema } from "../../apis/movie-api";

import { useEffect, useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { PiCheckCircleThin } from "react-icons/pi";
import { Pagination } from "../../components/pagination";




export const ResultsPage = () => {

    const [searchParams, _setSearchParams] = useSearchParams()
    const searchTitleString = searchParams.get('title')?.toString()
    const searchPageString = searchParams.get('page')
    const [currentPage, setCurrentPage] = useState(+searchPageString!)
    const { data: SearchResult } = getSearchCinema(searchTitleString, +currentPage)

    const onPageChangeHandler = (page: number) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [searchTitleString])


    return (
        <section className="w-screen pt-32 pb-52">
            <article className="mb-5 px-5">
                <h2 className="text-4xl text-gray-300 mb-1">
                    Search Results for: "{searchTitleString ? searchTitleString : null}"
                </h2>
                <p className="text-gray-300 mb-20">
                    Found: {SearchResult?.totalResults} Cinema(s)
                </p>
            </article>

            <article className="flex justify-center">
                <div className='flex flex-wrap justify-center
                w-[auto]
                sm:w-[120rem]
                '>
                    {SearchResult?.Search.map(
                        (cinema) => (
                            <Link
                                key={cinema.imdbID}
                                to={`/detail/${cinema.imdbID}`}
                                className="mx-2 my-2 bg-gray-900 w-80 relative rounded-lg"
                            >
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
                                        <h1 className="text-3xl font-bold break-words text-gray-100">
                                            {cinema.Title}
                                        </h1>
                                    </div>
                                    <p className="uppercase text-l text-gray-100">
                                        {cinema.Type}
                                    </p>
                                    <p className="text-gray-300">
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

            <Pagination
                currentPage={currentPage}
                total={+SearchResult?.totalResults!}
                limit={10}
                onPageChange={onPageChangeHandler}
            />

        </section >
    )
}


