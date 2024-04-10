import { RiMovie2Line } from "react-icons/ri";
import { SearchForm } from "../../components/search-form";

export function Home() {
    return (
        <section>
            <article className="flex w-screen h-screen bg-gray-900 justify-center pt-60">
                <div className="h-max w-10/12 flex flex-col items-center">
                    <h1 className="text-8xl mb-5 text-yellow-300 flex">
                        Movie Lookup<RiMovie2Line />
                    </h1>
                    <RiMovie2Line />
                    <SearchForm />
                </div>
            </article>
        </section>
    )
}