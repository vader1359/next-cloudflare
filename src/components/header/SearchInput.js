import { isSearchOpenAtom, searchResultsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { CldImage } from "next-cloudinary"
import { useState } from "react"
import { useDebounce } from "use-debounce"
import IconSearch from "../icons/IconSearch"
import IconSearchClose from "../icons/IconSearchClose"
import initialSearchResults from "@/files/bestSelling.json"
import { slugify } from "@/utilities/slugify"

import { useAllVariants } from "@/hooks/useVariants"
import { forwardRef } from "react"
import IconShare from "../icons/IconShare"

const searchOptions = {
  includeScore: true,
  keys: ["fields.name","fields.brand_name"],
  minMatchCharLength: 2,
  threshold: 0.2,
}

const SearchBox = forwardRef(({ className }, ref) => {
  const [isCopied, setIsCopied] = useState(false)
  const [text, setText] = useState("")
  const [debouncedText] = useDebounce(text, 200)
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom)

  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom)

  const { data, isLoading } = useAllVariants()

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `www.nanohome.vn/search?name=${slugify(ref.current.value)}`
    )
    setIsCopied(true)

    // Hide tooltip after 2 seconds
    setTimeout(() => {
      setIsCopied(false)
    }, 500)
  }

  // if (isLoading) return null

  const handleChange = async (e) => {
    const Fuse = (await import("fuse.js")).default
    const fuse = new Fuse(data, searchOptions)
    let searchResults = fuse.search(e.target.value)
    setSearchResults(searchResults)
    setText(debouncedText)
  }

  const openDrawer = () => {
    setIsSearchOpen(true)
  }

  const closeDrawer = () => {
    setIsSearchOpen(true)
    setText("")
  }

  return (
    <S.SearchBox className={className}>
      <div tw="relative">
        <div tw="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {ref.current && ref.current.value.length > 0 ? (
            <IconShare
              width={16}
              height={16}
              onClick={handleCopy}
              tw="cursor-pointer pointer-events-auto"
            />
          ) : (
            <IconSearch width={16} height={16} />
          )}
        </div>
        <div
          tw="absolute inset-y-0 right-0 items-center pr-3 cursor-pointer"
          onClick={() => setIsSearchOpen(false)}
          css={isSearchOpen ? tw`flex` : tw`hidden`}
        >
          <IconSearchClose width={16} height={16} />
        </div>
        {/* <IconSearchClose tw="absolute inset-y-0 right-0 flex pr-3" width={16} height={16}/> */}
        <S.SearchInput
          type="text"
          id="search-navbar"
          placeholder="Search..."
          onChange={handleChange}
          onFocus={openDrawer}
          onBlur={closeDrawer}
          ref={ref}
        />
      </div>
      {isCopied && <S.Tooltip>Copied</S.Tooltip>}
    </S.SearchBox>
  )
})

SearchBox.displayName = "SearchBox"

const S = {}

S.SearchBox = tw.div`relative items-center`
S.SearchInput = tw.input`block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400`

S.Tooltip = tw.div`absolute left-0 px-2 py-1 mt-4 ml-4 text-xs text-white bg-gray-700 rounded top-10`

export default SearchBox
