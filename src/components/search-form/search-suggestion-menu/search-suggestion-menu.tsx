import { MouseEventHandler } from "react"
import { Link } from "react-router-dom"
import { SearchResult } from "../../../types"


type SearchSuggestionMenu = {
    data: SearchResult,
    itemClickHandler: (urlPath: string) => MouseEventHandler<HTMLAnchorElement> | undefined
}

export const SearchSuggestionMenu = ({ data, itemClickHandler }: SearchSuggestionMenu) => {
    return (
        <article className={`w-full absolute bg-gray-200 h-96 mt-14 overflow-y-scroll pt-1 pb-1 px-2`}>
            {
                data &&
                    'Search' in data &&
                    data.Search.length > 0 ?
                    data.Search.map((cinema) => (
                        <Link
                            key={cinema.imdbID}
                            onMouseDown={itemClickHandler(`${cinema.Title}`)}
                            to={`#`}
                            className="flex my-3"
                        >
                            <img
                                src={
                                    cinema.Poster === 'N/A' ?
                                        `https://placehold.co/90x135?text=N/A` :
                                        cinema.Poster
                                }
                                alt={cinema.Title}
                                className="w-36"
                            />
                            <div className="ml-2">
                                <p className="block text-2xl">
                                    {cinema.Title}
                                </p>
                                <p className="block text-xl">
                                    {cinema.Type}
                                </p>
                                <p className="block text-xl">
                                    {cinema.Year}
                                </p>
                            </div>

                        </Link>
                    )) :
                    <p>
                        No Matching Results
                    </p>
            }
        </article>
    )
}
