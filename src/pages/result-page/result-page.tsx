// import { SearchBar } from "../../components/search-form"

import classNames from 'classnames';
import { useSearchParams } from "react-router-dom";
import { getSearchCinema } from "../../apis/movie-api";

import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";


export const ResultPage = () => {


    const [searchParams, setSearchParams] = useSearchParams()
    const [resultPage, setResultPage] = useState(1)
    const searchTitleString = searchParams.get('query')?.toString()
    const searchPageString = searchParams.set('page', resultPage.toString())
    const { data: SearchResult } = getSearchCinema(searchTitleString, +searchPageString)

    const [currentPage, setCurrentPage] = useState(24)



    const total = 480
    const limit = 20
    const onPageChange = (page: number) => setCurrentPage(page)



    const range = (start: number, end: number) => {
        return [...Array(end - start).keys()].map((el) => el + start);
    };

    type GetPagesCut = {
        pagesCount: number,
        pagesCutCount: number,
        currentPage: number
    }

    const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }: GetPagesCut) => {
        const ceiling = Math.ceil(pagesCutCount / 2);
        const floor = Math.floor(pagesCutCount / 2);
        console.log("ceiling", ceiling);
        console.log("floor", floor);

        if (pagesCount < pagesCutCount) {
            return { start: 1, end: pagesCount + 1 };
        } else if (currentPage >= 1 && currentPage <= ceiling) {
            return { start: 1, end: pagesCutCount + 1 };
        } else if (currentPage + floor >= pagesCount) {
            return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
        } else {
            return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
        }
    };

    type PaginationItem = {
        text?: string,
        page?: number,
        currentPage: number,
        onPageChange: (page: number) => void,
        isDisabled?: boolean
    }

    const PaginationItem = ({ page, currentPage, onPageChange, isDisabled, text }: PaginationItem) => {
        const liClasses = classNames({
            "page-item": true,
            active: page === currentPage,
            disabled: isDisabled,
        });
        return (
            <li className={liClasses} onClick={() => onPageChange(page!)}>
                <span className="page-link">{page ? page : text}</span>
            </li>
        );
    };


    const pagesCount = Math.ceil(total / limit);
    const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 10, currentPage });
    const pages = range(pagesCut.start, pagesCut.end);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;

    console.log('currentPage', currentPage)
    console.log('pages.length', pages.length)
    console.log('pagesCut.end', pagesCut.end)



    return (
        <section className="w-screen bg-green-400 pt-32 pb-52">
            <article className="flex justify-center bg-blue-600 mb-10">
                <div className="w-8/12 bg-red-400 flex">
                    <input
                        // value={'Search Bar'}
                        className="w-10/12 h-16 px-2 rounded-md text-xl"
                        placeholder="e.g. Titanic"
                    />
                    <button className="bg-gray-300 w-2/12 mx-2 rounded-md text-xl">
                        LookUp
                    </button>
                </div>
            </article>

            <article className="mb-5 px-5">
                <h2 className="text-4xl">
                    Search Results for: {searchTitleString}
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
                    {SearchResult?.Search.map((cinema) => (
                        <div key={cinema.imdbID} className="mx-2 my-2 bg-orange-300 w-80 relative">
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
                                {/* <PiCheckCircleThin size={20} /> */}
                            </span>

                        </div>
                    ))}
                </div>
            </article>

            <article className="flex justify-center mt-40">
                <ul className="flex">

                    <PaginationItem
                        text={'First'}
                        currentPage={currentPage}
                        onPageChange={() => onPageChange(1)}
                        isDisabled={isFirstPage}
                    />

                    <PaginationItem
                        text={'Prev'}
                        currentPage={currentPage}
                        onPageChange={() => onPageChange(currentPage - 1)}
                    />

                    {pages.map((page) => (
                        <PaginationItem
                            page={page}
                            key={page}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    ))}

                    <PaginationItem
                        text={'Next'}
                        currentPage={currentPage}
                        onPageChange={() => onPageChange(currentPage + 1)}
                        isDisabled={isLastPage}
                    />

                    <PaginationItem
                        text={'Last'}
                        currentPage={currentPage}
                        onPageChange={() => onPageChange(pagesCount)}
                        isDisabled={isLastPage}
                    />

                </ul>
            </article>

        </section>
    )
}
