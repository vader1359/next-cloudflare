import { tabActiveAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect } from "react"
import BottomNavItem from "./BottomNavItem"

const BottomNav = ({ className }) => {
  const router = useRouter()

  const [tabActive, setTabActive] = useAtom(tabActiveAtom)

  useEffect(() => {
    setTabActive(router.asPath)
  }, [router.asPath, setTabActive])



  return (
    <>
      <S.BottomNav className={className}>
        <ul tw="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
          <BottomNavItem
            href="/products/category/furniture"
            icon="https://res.cloudinary.com/nanohome-web/image/upload/v1697404688/website-fixed/icons/icon-furniture.svg"
            name="Furniture"
            active={tabActive && tabActive === "/products/category/furniture"}
          />
          <BottomNavItem
            href="/products/category/lighting"
            icon="https://res.cloudinary.com/nanohome-web/image/upload/v1697404688/website-fixed/icons/icon-lighting.svg"
            name="Lighting"
            active={tabActive && tabActive === "/products/category/lighting"}
          />
          <BottomNavItem
            href="/products/category/usm"
            icon="https://res.cloudinary.com/nanohome-web/image/upload/v1697404689/website-fixed/icons/icon-usm.png"
            name="USM"
            active={tabActive && tabActive === "/products/category/usm"}
          />

          <BottomNavItem
            href="/products/category/accessories"
            icon="https://res.cloudinary.com/nanohome-web/image/upload/v1697404688/website-fixed/icons/icon-decor.svg"
            name="Decors"
            active={tabActive && tabActive === "/products/category/accessories"}
          />

          <BottomNavItem
            href="/promotion"
            icon="https://res.cloudinary.com/nanohome-web/image/upload/v1697404688/website-fixed/icons/icon-sale.png"
            name="SALE"
            active={tabActive && tabActive === "/promotion"}
            colorful
          />
        </ul>
      </S.BottomNav>
    </>
  )
}

const S = {}

S.BottomNav = tw.div`w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600`

export default BottomNav
