import { useEffect, useState } from "react"
import { MdPlaylistAdd, MdPlaylistRemove } from "react-icons/md"
import { Link } from "react-router-dom"

export function WatchlistPage() {

    const [cinema, setCinema] = useState<Cinema[]>([])

    const saveToLocalStorage = (cinema: Cinema[]) => {
        localStorage.setItem('movielookup_watchlist', JSON.stringify(cinema))
    }

    const fetchedSavedCinema = () => {
        const savedCinema = localStorage.getItem("movielookup_watchlist")
        if (savedCinema) {
            setCinema(JSON.parse(savedCinema))
        }
    }

    const addCinema = (cinemaToAdd: Cinema) => {
        const updatedWatchlist = [...cinema, cinemaToAdd]
        setCinema(updatedWatchlist)
        saveToLocalStorage(updatedWatchlist)
    }

    const removeCinema = (cinemaToRemove: Cinema) => {
        const filterOutDeletedCinema = cinema.filter(
            (c) => {
                return c.imdbID !== cinemaToRemove.imdbID
            }
        )
        setCinema(filterOutDeletedCinema)
        localStorage.setItem("movielookup_watchlist", JSON.stringify(filterOutDeletedCinema))
    }


    const isCinemaAdded = (imdbID: string): boolean => {

        const storedCinema = localStorage.getItem('movielookup_watchlist') || '[]'
        const cinema = JSON.parse(storedCinema)

        // console.log('cinema: ', cinema)
        const filterMatchedItem = cinema.filter((c: Cinema) => { return imdbID === c.imdbID })

        if (filterMatchedItem.length > 0) {
            return true
        } else {
            return false
        }
    }


    useEffect(() => {
        fetchedSavedCinema()
    }, [])


    return (
        <section className="w-screen pt-32 pb-52">
            <article className="mb-5 px-5">
                <h2 className="text-4xl text-gray-300 mb-1">
                    Watchlist
                </h2>
                <p className="text-gray-300 mb-20">
                    Total: {cinema.length} Cinema(s)
                </p>
            </article>
            <article className="flex justify-center">
                <div className='flex flex-wrap justify-center
                w-[auto]
                sm:w-[120rem]
                '>

                    {
                        cinema.length > 0 ?

                            cinema?.map(
                                (cinema) => (
                                    <div
                                        key={cinema.imdbID}
                                        className="mx-2 my-2 bg-gray-900 w-80 relative rounded-lg"
                                    >

                                        <Link
                                            to={`/detail/${cinema.imdbID}`}
                                            className="inline-flex"
                                        >
                                            <img
                                                src={
                                                    cinema.Poster === 'N/A' ?
                                                        `https://placehold.co/90x135?text=N/A` :
                                                        cinema.Poster
                                                }
                                                alt={cinema.Title}
                                                className='w-80 h-full'
                                            />
                                        </Link>
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
                                            {
                                                isCinemaAdded(cinema.imdbID) ?
                                                    <MdPlaylistRemove
                                                        size={20}
                                                        onClick={() => removeCinema(cinema)}
                                                        className="text-gray-300"
                                                    /> :
                                                    <MdPlaylistAdd
                                                        size={20}
                                                        onClick={() => addCinema(cinema)}
                                                        className="text-gray-300"
                                                    />
                                            }
                                        </span>

                                    </div>
                                ))

                            :

                            <h3 className="text-2xl text-center">
                                Your Watchlist is Empty :/
                            </h3>
                    }
                </div>
            </article>
        </section>
    )
}
