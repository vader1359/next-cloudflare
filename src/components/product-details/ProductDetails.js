import Accordion from "@/components/common/Accordion"
import MaxWidth from "@/components/layout/MaxWidth"
import Space from "@/components/layout/Space"
import { CldImage } from "next-cloudinary"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { formatVND } from "@/utilities/formatCurrency"
import { shimmerImage } from "@/utilities/shimmerImage"
import MediaGrid from "./MediaGrid"
import { useCart } from "react-use-cart"

const ProductDetails = ({ product }) => {
  const { addItem } = useCart()
  const [isReadMore, setIsReadMore] = useState(false)
  const isTextLong = (text) => text.length > 192
  const toggleIsReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  const handleAddToCart = () => {
    const fields = { ...product.fields }

    delete fields.discounted_price
    delete fields.discount_percentage

    addItem(fields)
  }

  const {
    name,
    product_name,
    sku,
    price,
    slug,
    brand_cldr_id_logo,
    cldr_id_packshot,
    cldr_id_media_long,
    cldr_id_media_closeup,
    cldr_id_media_lifestyle_1,
    cldr_id_media_lifestyle_2,
    description,
    designer_cldr_id_portrait,
    designer_description,
    designer_name,
  } = product.fields

  return (
    <MaxWidth>
      <Space size="small" />
      <S.Details>
        <S.Packshot
          src={cldr_id_packshot}
          width={720}
          height={640}
          priority
          tw="xl:max-h-[640px]"
          placeholder={shimmerImage()}
          // flags={['progressive']}
        />
        <S.Info>
          <S.Logo
            src={brand_cldr_id_logo.find(Boolean)}
            width={128}
            height={128}
            alt="brand logo"
            priority
          />
          <S.ProductName>{product_name}</S.ProductName>
          <S.Name>{name}</S.Name>
          <S.SKU>SKU: {sku}</S.SKU>

          <S.Description
            css={!isReadMore ? tw`line-clamp-3` : tw`line-clamp-none`}
            className="prose"
          >
            {description}
          </S.Description>
          {isTextLong(description) && (
            <S.ReadMore onClick={toggleIsReadMore}>
              {!isReadMore ? "Read more" : "See less"}
            </S.ReadMore>
          )}
          <S.Price>{price === 0 ? "Contact Us" : formatVND(price)}</S.Price>

          <S.CTAs>
            <S.CTA onClick={handleAddToCart} type="button">
              BUY NOW
            </S.CTA>
            {/* <S.ContactUsCTA onClick={handleAddToCart} type="button">
              BUY NOW
            </S.ContactUsCTA> */}
          </S.CTAs>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <Accordion />
        </S.Info>
      </S.Details>
      <Space size="medium" />
      <MediaGrid
        long={cldr_id_media_long}
        closeup={cldr_id_media_closeup}
        lifestyle1={cldr_id_media_lifestyle_1}
        lifestyle2={cldr_id_media_lifestyle_2}
        designerPortrait={designer_cldr_id_portrait.find(Boolean)}
        designerDescription={designer_description.find(Boolean)}
        designerName={designer_name.find(Boolean)}
      />
      {/* <pre>{JSON.stringify(product,null,2)}</pre> */}
    </MaxWidth>
  )
}

const S = {}

S.Details = tw.div`grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-y-16 lg:gap-x-32 lg:flex`
S.Packshot = tw(
  CldImage
)`object-contain w-full h-full xl:pt-12 lg:col-span-2 xl:grid-cols-3 max-h-[320px] lg:max-h-[400px]`
S.Info = tw.div`w-full h-full lg:col-span-2`
S.ProductName = tw.div`m-auto mt-4 text-3xl text-center uppercase md:text-4xl lg:text-left`
S.Name = tw.div`mt-4 text-base leading-relaxed text-center md:text-lg lg:text-left`
S.Price = tw.div`mt-6 text-3xl text-center lg:text-left`
S.SKU = tw.div`mt-4 text-base text-center md:text-lg lg:text-left`
S.Description = tw(
  ReactMarkdown
)`m-auto mt-6 text-base text-center lg:ml-0 md:text-lg lg:text-left`
S.ReadMore = tw.button`w-full m-auto mt-2 text-center text-green-600 lg:text-left`
S.Logo = tw(
  CldImage
)`object-contain w-auto h-6 m-auto max-w-[160px] lg:h-12 lg:m-0`

S.CTAs = tw.div`flex justify-center mt-4 lg:justify-start`

S.CTA = tw.button`px-5 py-2 pt-3 text-sm text-center text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-700`

S.ContactUsCTA = tw.button`items-center hidden h-6 py-4 mt-4 text-base font-medium text-center text-white rounded-full pt-[1rem] border-green-60 px-7 md:inline-flex hover:bg-green-700 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-700`

export default ProductDetails
