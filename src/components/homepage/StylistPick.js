import Link from "next/link"
import { CldImage } from "next-cloudinary"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"

const StylistPick = ({ className, item }) => {
  return (
    <S.StylistPick className={className}>
      <Link href={`/products/${item.id}/${item.fields.slug}`}>
        <S.PackshotLink>
          <S.Packshot
            src={item.fields.cldr_id_packshot}
            alt={`${item.fields.product_line} of ${item.fields.brand_name} from ${item.fields.brand_origin}`}
            width={400}
            height={400}
            placeholder={shimmerImage()}
            seoSuffix={slugify(
              `${item.fields.product_line} of ${item.fields.brand_name} from ${item.fields.brand_origin}`
            )}
            sizes="
                    (min-width: 728px) 33vw,
                    (min-width: 976px) 25vw,
                    100vw
                  "
          />
        </S.PackshotLink>
      </Link>
      <S.Name>{item.fields.product_line.find(Boolean)}</S.Name>
      <S.Origin>{`${item.fields.brand_name} from ${item.fields.brand_origin}`}</S.Origin>
    </S.StylistPick>
  )
}

export default StylistPick

const S = {}

S.StylistPick = tw.div`flex flex-col items-center w-full h-full `

S.PackshotLink = tw.div`relative w-full h-full mb-8 `

S.Packshot = tw(CldImage)`object-contain object-bottom w-full h-48`

S.Name = tw.div`mb-2 font-sans font-bold uppercase `
S.Origin = tw.div`font-serif text-xs italic `
