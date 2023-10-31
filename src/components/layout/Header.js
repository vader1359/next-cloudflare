import FakeSearchInput from "@/components/header/FakeSearchInput"
import {
  isCartOpenAtom,
  isMenuCollapsedAtom,
  isMenuProductsHiddenAtom,
  isSearchOpenAtom,
} from "@/lib/atoms"
import { useAtom } from "jotai"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import MegaMenuProducts from "../header/MegaMenuProducts"
import MenuButtonsMobile from "../header/MenuButtonsMobile"
import MenuLinks from "../header/MenuLinks"
import SearchInput from "../header/SearchInput"
// import IconArrowLeft from "../icons/IconArrowLeft"
import dynamic from "next/dynamic"
import IconLogoNanoHome from "../icons/IconLogoNanoHome"

const DynamicIconCart = dynamic(() => import("../icons/IconCart"), {
  ssr: false,
})

const Header = () => {
  const [isMenuProductsHidden, setIsMenuProductsHidden] = useAtom(
    isMenuProductsHiddenAtom
  )

  const [isMenuCollapsed, setIsMenuCollapsed] = useAtom(isMenuCollapsedAtom)
  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom)
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom)

  const toggleDrawer = () => {
    setIsCartOpen(!isCartOpen)
    console.log("click")
  }

  const router = useRouter()

  const inputRef = useRef(null)

  const handleClickSearch = () => {
    setIsSearchOpen(true)
  }

  useEffect(() => {
    const handleRouteChange = () => {
      // Set isMenuProductsHidden to true after a router change
      setIsMenuProductsHidden(false)
      setIsMenuCollapsed(false)
      setIsSearchOpen(false)
      setIsCartOpen(false)
    }

    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
    // Add the event listener
    router.events.on("routeChangeComplete", handleRouteChange)

    // Clean up the event listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [
    isSearchOpen,
    inputRef,
    router.events,
    setIsMenuCollapsed,
    setIsMenuProductsHidden,
    setIsSearchOpen,
    setIsCartOpen,
  ])

  return (
    <S.Header>
      <div tw="fixed z-20 w-full bg-white">
        <S.MaxWidth>
          <S.Logo
            href="/"
            css={isSearchOpen ? tw`hidden lg:block` : tw`block w-15`}
          >
            <IconLogoNanoHome tw="h-4" />
          </S.Logo>
          <MenuButtonsMobile />
          <S.MenuLinks />
          <div tw="hidden lg:flex lg:mr-4">
            <DynamicIconCart onClick={toggleDrawer} />
          </div>
          {isSearchOpen ? (
            <SearchInput ref={inputRef} className="hidden lg:flex" />
          ) : (
            <FakeSearchInput onClick={handleClickSearch} tw="hidden lg:flex" />
          )}
        </S.MaxWidth>
        <hr tw="w-full bg-green-500 border-0 rounded h-[2px]"></hr>
        {isMenuCollapsed && <S.MobileMenuLinks />}
      </div>

      {isMenuProductsHidden && (
        <S.Scroll>
          <MegaMenuProducts />
        </S.Scroll>
      )}
    </S.Header>
  )
}

const S = {}

S.Header = tw.header`fixed z-50 w-full overflow-y-hidden bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900`
S.MaxWidth = tw.div`flex flex-wrap items-center justify-between w-full max-w-xs py-4 m-auto mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl`
S.MobileMenuLinks = tw(MenuLinks)`lg:hidden`
S.MenuLinks = tw(MenuLinks)`hidden lg:flex`
S.Logo = tw(Link)`w-[136px] h-7`

S.Scroll = tw.div`fixed bottom-0 left-0 right-0 mb-16 overflow-y-auto bg-white top-24 md:top-0`

export default Header
