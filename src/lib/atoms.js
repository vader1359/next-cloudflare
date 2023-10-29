import initialSearchResults from "@/files/bestSelling.json"

// const initialSearchResults = []

import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const isMenuCollapsedAtom = atom(false)
const isMenuProductsHiddenAtom = atom(false)
const tabActiveAtom = atom("")
const isSearchOpenAtom = atom(false)
const searchResultsAtom = atom(initialSearchResults)
const searchPageResultsAtom = atom(initialSearchResults)
const guestAtom = atomWithStorage("guest", {})
const isMessengerAtom = atom(false)
const isCartOpenAtom = atom(false)
const roomsAtom = atom(new Set())
const brandsAtom = atom(new Set(["usm"]))

export {
  isMenuCollapsedAtom,
  isMenuProductsHiddenAtom,
  tabActiveAtom,
  isSearchOpenAtom,
  searchResultsAtom,
  searchPageResultsAtom,
  guestAtom,
  isMessengerAtom,
  isCartOpenAtom,
  roomsAtom,
  brandsAtom,
}
