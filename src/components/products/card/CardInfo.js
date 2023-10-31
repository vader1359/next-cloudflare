import { CldImage } from "next-cloudinary"
import { formatVND } from "@/utilities/formatCurrency"
import { useCart } from "react-use-cart"

const CardInfo = ({ className, variant, isSale }) => {
  const { id, name, price, discounted_price, discount_percentage } =
    variant.fields
  const brandLogo = variant.fields.brand_cldr_id_logo.find(Boolean)
  const brandLogoSize = variant.fields.brand_logo_size.find(Boolean)
  const { addItem, inCart } = useCart()

  const handleAddToCart = () => {
    const fields = { ...variant.fields }

    if (!isSale) {
      delete fields.discounted_price
      delete fields.discount_percentage
    }

    addItem(fields)
  }

  return (
    <S.CardInfo className={className}>
      <S.NameAndCTA>
        <S.Name>{name}</S.Name>
        <S.CTA
          onClick={handleAddToCart}
          type="button"
          css={inCart(id) ? tw`bg-orange-500 hover:bg-orange-600` : tw`bg-green-600`}
        >
          <div tw="whitespace-nowrap">Buy</div>
        </S.CTA>
      </S.NameAndCTA>
      <S.BrandAndPrice>
        <S.BrandIcon
          src={brandLogo}
          width={128}
          height={48}
          css={brandLogoSize == 1.5 ? tw`w-12 h-6` : tw`w-24 h-6`}
        />

        <S.Price css={isSale && tw`line-through`}>
          {price === 0 ? "Contact Us" : formatVND(price)}
        </S.Price>
      </S.BrandAndPrice>

      {isSale && (
        <S.Discount>
          <S.Percentage>
            {discount_percentage ? discount_percentage * 100 : "_"}%
          </S.Percentage>
          <S.DiscountedPrice>{formatVND(discounted_price)}</S.DiscountedPrice>
        </S.Discount>
      )}
      <S.MobileCTA
        onClick={handleAddToCart}
        type="button"
        css={inCart(id) ? tw`bg-orange-500 hover:bg-orange-600` : tw`bg-green-600`}
      >
        <div>Buy</div>
      </S.MobileCTA>
    </S.CardInfo>
  )
}

const S = {}

S.CardInfo = tw.div`w-full max-w-sm pt-6 mx-auto md:pt-8`
S.Name = tw.div`mb-2 text-xs text-center md:mb-6 md:text-left text-ellipsis col-span-full line-clamp-2 md:text-sm`
S.BrandAndPrice = tw.div`flex flex-col items-center justify-between h-auto m-auto space-y-2 md:space-y-0 md:flex-row md:items-center`
S.BrandIcon = tw(CldImage)`object-contain`
S.Price = tw.div`text-xs font-semibold md:text-sm`
S.Discount = tw.div`flex flex-col items-center justify-between h-auto m-auto mt-2 space-y-2 md:space-y-0 md:flex-row md:items-center`
S.Percentage = tw.div`text-xl font-bold text-green-600 md:block`
S.DiscountedPrice = tw.div``
S.NameAndCTA = tw.div`flex justify-between space-x-16`
S.CTA = tw.button`items-center hidden h-6 px-3 py-4 text-xs font-medium text-center text-white bg-green-600 rounded-full mt-[1/2] md:inline-flex hover:bg-green-700 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-700`
S.MobileCTA = tw.button`flex justify-center px-3 py-1 m-auto mt-2 text-xs text-center text-white bg-green-600 rounded-full md:hidden`

export default CardInfo
