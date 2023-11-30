import { SearchBar } from "../../components/search-bar";

import { RiMovie2Line } from "react-icons/ri";

export const Home = () => {



    return (
        <article className="flex w-screen h-screen bg-gray-900 justify-center pt-60">
            <div className="h-max w-10/12 flex flex-col items-center">
                <h1 className="text-8xl mb-5 text-yellow-300 flex">
                    Movie Lookup <RiMovie2Line />
                </h1>
                <RiMovie2Line />
                <SearchBar />
            </div>
        </article>
    )
}
