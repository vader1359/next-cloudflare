import FadeIn from "react-fade-in/lib/FadeIn"
import MaxWidth from "../layout/MaxWidth"
import MegaMenuItem from "./MegaMenuItem"
const MegaMenuProducts = ({ className, isHidden }) => {
  return (
    <S.MegaMenuProducts
      className={className}
      id="mega-menu-dropdown"
      tw="bg-white dark:bg-gray-800 "
      css={isHidden && tw`hidden`}
    >
      <FadeIn>
        <div
          id="mega-menu-full-dropdown"
          tw="bg-white md:border-0 dark:bg-gray-800 dark:border-gray-600"
          css={isHidden && tw`hidden`}
        >
          <div tw="grid py-5 mx-auto text-gray-900 divide-y md:grid-cols-3 md:divide-y-0 dark:text-white ">
            <ul aria-labelledby="mega-menu-full-dropdown-button border-2 border-solid border-black">
              <MegaMenuItem
                href="/products/sub-category/usm"
                icon="website-fixed/categories/usm-furniture"
                name="USM Furniture"
              />
              <MegaMenuItem
                href="/products/sub-category/lounge"
                icon="website-fixed/categories/lounge-chair"
                name="Lounge Chair"
              />

              <MegaMenuItem
                href="/products/sub-category/chair"
                icon="website-fixed/categories/chair"
                name="Chair"
              />
              <MegaMenuItem
                href="/products/sub-category/cabinet"
                icon="website-fixed/categories/cabinet"
                name="Cabinet"
              />
              <MegaMenuItem
                href="/products/sub-category/table"
                icon="website-fixed/categories/table"
                name="Table"
              />
              <MegaMenuItem
                href="/products/sub-category/sofa"
                icon="website-fixed/categories/sofa"
                name="Sofa"
              />
            </ul>
            <ul>
              <MegaMenuItem
                href="/products/sub-category/table-lamp"
                icon="website-fixed/categories/table-lamp"
                name="Table Lamp"
              />

              <MegaMenuItem
                href="/products/sub-category/pendant"
                icon="website-fixed/categories/pendant"
                name="Pendant"
              />

              <MegaMenuItem
                href="/products/sub-category/floor-lamp"
                icon="website-fixed/categories/floor-lamp"
                name="Floor Lamp"
              />

              <MegaMenuItem
                href="/products/sub-category/wall-lamp"
                icon="website-fixed/categories/wall-lamp.jpg"
                name="Wall Lamp"
              />
            </ul>
            <ul>
              <MegaMenuItem
                href="/products/sub-category/outdoor"
                icon="website-fixed/categories/outdoor"
                name="Outdoor"
              />

              <MegaMenuItem
                href="/products/sub-category/accessories"
                icon="website-fixed/categories/accessories"
                name="Accessories"
              />
              <MegaMenuItem
                href="/products/sub-category/other"
                icon="website-fixed/categories/other.jpg"
                name="Other products"
                css={tw`border-black border-solid border-b-1`}
              />
              <MegaMenuItem
                href="/products"
                name="▶&nbsp;&nbsp;&nbsp;&nbsp;Shop all products"
                css={tw`h-24 text-green-600 uppercase`}
              />
              <MegaMenuItem
                href="/shop-by-rooms"
                name="▶&nbsp;&nbsp;&nbsp;&nbsp;Shop by rooms"
                css={tw`h-24 text-green-600 uppercase`}
              />
              <MegaMenuItem
                href="/shop-by-brands"
                name="▶&nbsp;&nbsp;&nbsp;&nbsp;Shop by brands"
                css={tw`h-24 text-green-600 uppercase `}
              />
            </ul>
          </div>
        </div>
      </FadeIn>
    </S.MegaMenuProducts>
  )
}

const S = {}

S.MegaMenuProducts = tw(MaxWidth)`z-20 md:pt-32 lg:pt-16`

export default MegaMenuProducts
