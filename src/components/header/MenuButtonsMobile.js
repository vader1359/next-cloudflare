import SearchInput from "@/components/header/SearchInput"
import { isMenuCollapsedAtom, isMenuProductsHiddenAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { useEffect, useRef } from "react"
import IconMenu from "../icons/IconMenu"
import IconSearch from "../icons/IconSearch"
import dynamic from "next/dynamic"

import { isSearchOpenAtom, isCartOpenAtom } from "@/lib/atoms"

const DynamicIconCart = dynamic(() => import("../icons/IconCart"), {
  ssr: false,
})

const MenuButtonsMobile = ({ className }) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useAtom(isMenuCollapsedAtom)
  const [isMenuProductsHidden, setIsMenuProductsHidden] = useAtom(
    isMenuProductsHiddenAtom
  )

  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom)
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen, inputRef])

  const toggleMobileMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed)
    setIsMenuProductsHidden(false)
  }

  const toggleDrawer = () => {
    setIsCartOpen(!isCartOpen)
    setIsSearchOpen(false)
    
    console.log("click")
  }

  return (
    <S.MenuButtonsMobile
      className={className}
      css={isSearchOpen ? tw`w-full` : tw`w-auto`}
    >
      {isSearchOpen && <SearchInput ref={inputRef} tw="block w-full mr-4" />}
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        tw="inline-flex items-center justify-center w-10 h-10 p-2 mr-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span tw="sr-only">Open main menu</span>
        <DynamicIconCart onClick={toggleDrawer} />
      </button>

      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        tw="items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        css={isSearchOpen ? tw`hidden` : tw`block`}
        onClick={() => setIsSearchOpen(true)}
      >
        <IconSearch width={20} height={20} />
        <span tw="sr-only">Search</span>
      </button>

      <button
        data-collapse-toggle="navbar-search"
        type="button"
        tw="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
        onClick={toggleMobileMenu}
      >
        <span tw="sr-only">Open main menu</span>
        <IconMenu width={20} height={20} />
      </button>
    </S.MenuButtonsMobile>
  )
}

const S = {}

S.MenuButtonsMobile = tw.div`flex md:w-auto lg:hidden md:order-2`

export default MenuButtonsMobile
