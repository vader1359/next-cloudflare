import { isMenuProductsHiddenAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import Link from "next/link"
import MaxWidth from "../layout/MaxWidth"
const MenuLinks = ({ className }) => {
  const [isMenuProductsHidden, setIsMenuProductsHidden] = useAtom(
    isMenuProductsHiddenAtom
  )

  const toggleProductsMenu = () => {
    setIsMenuProductsHidden(!isMenuProductsHidden)
  }

  return (
    <S.MenuLinks className={className}>
      <ul tw="flex flex-col items-center justify-center md:mb-8 lg:mb-0 md:flex-row md:space-x-8">
        <li>
          <S.MegaMenuButton
            id="mega-menu-dropdown-button"
            data-collapse-toggle="mega-menu-dropdown"
            onClick={toggleProductsMenu}
          >
            <S.MaxWidth>
              Products
              <svg
                tw="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </S.MaxWidth>
          </S.MegaMenuButton>
        </li>
        <li css={isMenuProductsHidden && tw`hidden md:flex`}>
          <S.MenuLink href="/beautifulliving">
            <S.MaxWidth>#Beautifulliving</S.MaxWidth>
          </S.MenuLink>
        </li>
        <li css={isMenuProductsHidden && tw`hidden md:flex`}>
          <S.MenuLink href="/news">
            <S.MaxWidth>News</S.MaxWidth>
          </S.MenuLink>
        </li>
        <li css={isMenuProductsHidden && tw`hidden md:flex`}>
          <S.MenuLink href="/shop-by-rooms">
            <S.MaxWidth tw="justify-start"><span tw="md:hidden">▶&nbsp;&nbsp;&nbsp;&nbsp;</span>Shop by rooms</S.MaxWidth>
          </S.MenuLink>
        </li>

        <li css={isMenuProductsHidden && tw`flex md:hidden`} tw="md:hidden">
          <S.MenuLink href="/shop-by-brands">
            <S.MaxWidth>▶&nbsp;&nbsp;&nbsp;&nbsp;Shop by brands</S.MaxWidth>
          </S.MenuLink>
        </li>
        <li css={isMenuProductsHidden && tw`flex md:hidden`} tw="md:hidden">
          <S.MenuLink href="/products">
            <S.MaxWidth>▶&nbsp;&nbsp;&nbsp;&nbsp;Shop all products</S.MaxWidth>
          </S.MenuLink>
        </li>
        <li tw="rounded-full" css={isMenuProductsHidden && tw`hidden md:flex`}>
          <S.MenuLink href="/promotion">
            <S.MaxWidth>
              <div tw="px-3 mt-2 text-xs text-white bg-red-600 rounded-full py-[6px] animate-bounce">
                SALE
              </div>
            </S.MaxWidth>
          </S.MenuLink>
        </li>
      </ul>
    </S.MenuLinks>
  )
}

const S = {}

S.MenuLinks = tw.div`items-center justify-center flex-1 md:mt-4 lg:mt-0 md:justify-center`
S.MenuLink = tw(
  Link
)`block py-4 font-normal text-gray-900 uppercase border-b-2 rounded border-b-1 md:font-medium text-md md:text-sm md:border-0 md:py-0 md:capitalize hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`

S.MegaMenuButton = tw.button`flex items-center justify-between w-full py-4 font-normal text-gray-900 uppercase border-b-2 rounded border-b-1 md:font-medium text-md md:text-sm md:border-0 md:py-0 md:capitalize hover:bg-gray-100 md:w-auto md:hover:bg-transparent md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`

S.MaxWidth = tw.div`flex items-center justify-between w-screen max-w-xs m-auto md:w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl`

export default MenuLinks
