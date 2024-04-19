import { atom } from "jotai"
import { cinemaInfoAtom, isCinemaAddedAtom, watchlistAtom } from "./watchlist-initialstate"


export const getCinemaInfoAtom = atom(
    null,
    (get, set, newCinema: Cinema) => {
        set(cinemaInfoAtom, newCinema)
        set(watchlistAtom, saveToWatchList(
            get(watchlistAtom), get(cinemaInfoAtom)
        ))
    }
)

export const isCinemaAdded = atom(
    null,
    (get, set, imdbID: string) => {

        // isCinemaAdded(imdbID)
        const storedCinema = get(watchlistAtom)
        // // const cinema = JSON.parse(storedCinema)
        const filterMatchedItem = storedCinema.filter((c: Cinema) => { return imdbID === c.imdbID })

        if (filterMatchedItem.length > 0) {
            return set(isCinemaAddedAtom, true)
        } else {
            return set(isCinemaAddedAtom, false)
        }
    }
)

export const removeFromWatchlistAtom = () => {

}

const saveToWatchList = (savedCinema: Cinema[], newSavedCinema: Cinema) => {
    return [
        ...savedCinema,
        newSavedCinema
    ]
}


// const isCinemaAdded = (imdbID: string) => {

// const storedCinema = localStorage.getItem('movielookup_watchlist') || '[]'
// const cinema = JSON.parse(storedCinema)
// const filterMatchedItem = storedCinema.filter((c: Cinema) => { return imdbID === c.imdbID })

// if (filterMatchedItem.length > 0) {
//     return true
// } else {
//     return false
// }
// }