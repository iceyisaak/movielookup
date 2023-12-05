// import { SearchBar } from "../../components/search-form"

import { useSearchParams } from "react-router-dom"
import { getSearchCinema } from "../../apis/movie-api"



export const ResultPage = () => {


    const [searchParams, setSearchParams] = useSearchParams()
    const searchParamsString = searchParams.get('query')?.toString()
    const { data: SearchResult } = getSearchCinema(searchParamsString)


    return (
        <section className="w-screen bg-green-400 pt-32 pb-52">
            <div className="flex justify-center bg-blue-600 mb-10">
                <div className="w-8/12 bg-red-400 flex">
                    <input
                        value={'Search Bar'}
                        className="w-10/12 h-16 px-2 rounded-md"
                    />
                    <button className="bg-gray-300 w-2/12 mx-2 rounded-md">
                        LookUp
                    </button>
                </div>
            </div>

            <article>
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
                        <div key={cinema.imdbID} className="mx-2 my-2 bg-orange-300">
                            <img
                                src={
                                    cinema.Poster === 'N/A' ?
                                        `https://placehold.co/90x135?text=N/A` :
                                        cinema.Poster
                                }
                                alt={cinema.Title}
                                className='w-full h-96'
                            />
                            <h1 className="text-3xl font-bold">
                                {cinema.Title}
                            </h1>
                            <p className="uppercase text-l">
                                {cinema.Type}
                            </p>
                            <p>
                                {cinema.Year}
                            </p>
                        </div>
                    ))}
                </div>
            </article>

        </section>
    )
}
