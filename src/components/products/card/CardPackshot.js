import { CldImage } from "next-cloudinary"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"

const CardPackshot = ({ cldr_id_packshot, className, packshotSize, name }) => {
  return (
    <S.CardPackshot
      className={className}
      src={cldr_id_packshot}
      width={packshotSize == 2 ? 960 : 480}
      alt={`${name} packshot image with white background`}
      height={480}
      placeholder={shimmerImage()}
      seoSuffix={slugify(`${name} packshot image with white background`)}
      sizes={
        packshotSize == 2
          ? `
              (min-width: 728px) 67vw,
              (min-width: 976px) 50vw,
              100vw
            `
          : `
              (min-width: 728px) 33vw,
              (min-width: 976px) 25vw,
              50vw
            `
      }
    />
  )
}

const S = {}

S.CardPackshot = tw(CldImage)`object-contain max-h-72 px-4]`

export default CardPackshot
