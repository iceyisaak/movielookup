import { atomWithStorage, splitAtom } from 'jotai/utils'

export const watchlistAtom = atomWithStorage<Cinema[]>('movielookup-watchlist', [])
export const watchlistSplitAtom = splitAtom(watchlistAtom)