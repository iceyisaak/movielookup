
export const Home = () => {
    return (
        <article className="flex w-screen h-screen bg-gray-900 justify-center pt-60">
            <div className="h-max w-10/12 flex flex-col items-center">
                <h1 className="text-8xl mb-5 text-yellow-300">
                    Movie Lookup
                </h1>
                <form className=" w-full flex flex-col">
                    <input
                        type="text"
                        className="
                            bg-gray-300
                            px-2
                            h-14
                            text-2xl
                        "
                    />
                    <button className="bg-gray-500 py-4 text-2xl my-3">
                        Look it up
                    </button>
                </form>
            </div>

        </article>
    )
}
