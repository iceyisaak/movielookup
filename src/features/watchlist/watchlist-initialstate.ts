import { atom } from 'jotai'
import { atomWithStorage, splitAtom } from 'jotai/utils'

export const watchlistAtom = atomWithStorage<Cinema[]>('movielookup-watchlist', [])
export const watchlistSplitAtom = splitAtom(watchlistAtom)

export const cinemaInfoAtom = atom<Cinema | any>(null)

export const checkCinemaAddedAtom = atom('')
export const isCinemaAddedAtom = atom(false)