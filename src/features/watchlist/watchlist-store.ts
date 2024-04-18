import { atom } from "jotai"
import { watchlistAtom } from "./watchlist-initialstate"


export const saveToWatchlistAtom = atom(
    null,
    (get, set, cinema: Cinema) => {
        set(watchlistAtom, saveToWatchList(get(watchlistAtom), get(cinema))
    }
)

export const removeFromWatchlistAtom = () => {

}


const saveToWatchList = (cinema: Cinema[], newSavedCinema: Cinema) => {
    return [
        ...cinema,
        newSavedCinema
    ]
}