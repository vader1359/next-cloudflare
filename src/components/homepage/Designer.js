import { CldImage } from "next-cloudinary"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"

const Designer = ({ className, portrait, name}) => {
  return (
    <S.Designer className={className}>
      <S.Portrait className="group">
        <CldImage
          src={portrait}
          width={320}
          height={480}
          tw="object-cover object-bottom w-48 h-48 rounded-xl group-hover:shadow-md"
          placeholder={shimmerImage()}
          alt={`portrait of ${name}`}
          seoSuffix={slugify(`portrait of ${name}`)}
          sizes="
                  (min-width: 728px) 25vw,
                  (min-width: 976px) 20vw,
                  50vw
                "
        />
        <S.Name tw="group-hover:text-green-600">{name}</S.Name>
      </S.Portrait>
    </S.Designer>
  )
}

const S = {}

S.Designer = tw.div`group`
S.Portrait = tw.div``
S.Name = tw.div`m-auto mt-4 italic text-center`

export default Designer
