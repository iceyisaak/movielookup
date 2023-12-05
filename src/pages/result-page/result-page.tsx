// import { SearchBar } from "../../components/search-form"

import { useSearchParams } from "react-router-dom";
import { getSearchCinema } from "../../apis/movie-api";

import { MdPlaylistAdd } from "react-icons/md";
import { PiCheckCircleThin } from "react-icons/pi";


export const ResultPage = () => {


    const [searchParams, setSearchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()
    const { data: SearchResult } = getSearchCinema(searchParamsString)


    return (
        <section className="w-screen bg-green-400 pt-32 pb-52">
            <article className="flex justify-center bg-blue-600 mb-10">
                <div className="w-8/12 bg-red-400 flex">
                    <input
                        value={'Search Bar'}
                        className="w-10/12 h-16 px-2 rounded-md text-xl"
                    />
                    <button className="bg-gray-300 w-2/12 mx-2 rounded-md text-xl">
                        LookUp
                    </button>
                </div>
            </article>

            <article className="mb-5 px-5">
                <h2 className="text-4xl">
                    Search Results for: {searchParamsString}
                </h2>
                <p>
                    Found: {SearchResult?.totalResults} Cinema(s)
                </p>
            </article>

            <article className="">
                <div className='flex flex-wrap justify-center'>
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
                            <div className="px-1 pb-5">
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
                            <span className="absolute right-0 bottom-0 flex">
                                <MdPlaylistAdd size={20} />
                                {/* <PiCheckCircleThin size={20} /> */}
                            </span>

                        </div>
                    ))}
                </div>
            </article>

        </section>
    )
}
