import { CldImage } from "next-cloudinary"
import MaxWidth from "../layout/MaxWidth"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"

const MediaGrid = ({
  className,
  long,
  closeup,
  lifestyle1,
  lifestyle2,
  designerPortrait,
  designerDescription,
  designerName,
  name,
}) => {
  return (
    <MaxWidth>
      <S.MediaGrid className={className}>
        <S.Long>
          <CldImage
            placeholder={shimmerImage()}
            tw="object-cover"
            src={long}
            fill
            alt={`${name} long image for illustration`}
            seoSuffix={slugify(`${name} long image for illustration`)}
            sizes="
                  (min-width: 768px) 63vw,
                  100vw
                "
          />
        </S.Long>
        <S.Closeup>
          <CldImage
            placeholder={shimmerImage()}
            tw="object-cover"
            src={closeup}
            fill
            alt={`${name} long image for illustration`}
            seoSuffix={slugify(`${name} closeup image for illustration`)}
            sizes="
                  (min-width: 768px) 33vw,
                  (min-width: 1440px) 37vw,
                  100vw
                "
          />
        </S.Closeup>
        <S.Lifestyle1>
          <CldImage
            placeholder={shimmerImage()}
            tw="object-cover"
            src={lifestyle1}
            fill
            alt={`${name} long image for illustration`}
            seoSuffix={slugify(`${name} lifestyle image for illustration`)}
            sizes="
                  (min-width: 768px) 33vw,
                  (min-width: 1440px) 25vw,
                  50vw
                "
          />
        </S.Lifestyle1>
        <S.Lifestyle2>
          <CldImage
            placeholder={shimmerImage()}
            tw="object-cover"
            src={lifestyle2}
            fill
            alt={`${name} long image for illustration`}
            seoSuffix={slugify(`${name} lifstyle image for illustration`)}
            sizes="
                  (min-width: 768px) 33vw,
                  (min-width: 1440px) 25vw,
                  50vw
                "
          />
        </S.Lifestyle2>
        <S.Designer>
          <CldImage
            placeholder={shimmerImage()}
            tw="object-cover"
            src={designerPortrait}
            fill
            alt={`${name} long image for illustration`}
            seoSuffix={slugify(`${name} long image for illustration`)}
            sizes="
                  (min-width: 768px) 50vw,
                  (min-width: 1024px) 33vw,
                  (min-width: 1440px) 25vw,
                  100vw
                "
          />
        </S.Designer>
        <S.DesignerInfo>
          <S.DesignerName>{designerName}</S.DesignerName>
          <S.DesignerDescription>{designerDescription}</S.DesignerDescription>
        </S.DesignerInfo>
      </S.MediaGrid>
    </MaxWidth>
  )
}

const S = {}

S.MediaGrid = tw.div`relative grid w-full grid-cols-2 grid-rows-5 gap-1 md:grid-rows-4 md:grid-cols-6 h-80r md:h-60r lg:h-80r xl:h-45r 2xl:h-60r xl:grid-cols-8 xl:grid-rows-2`
S.Long = tw.div`relative bg-red-400 col-span-full col h:20r w:14 md:row-span-2 xl:col-span-5 xl:row-span-1`
S.Closeup = tw.div`relative bg-green-400 lg:col-span-3 col-span-full md:col-span-2 xl:col-span-3 xl:row-span-1`
S.Lifestyle1 = tw.div`relative bg-blue-400 lg:col-span-2 md:col-span-2 xl:col-span-2`
S.Lifestyle2 = tw.div`relative bg-pink-400 md:col-span-2 xl:col-span-2`
S.Designer = tw.div`relative bg-purple-400 md:col-span-3 col-span-full xl:col-span-2 lg:col-span-2 `
S.DesignerInfo = tw.div`flex flex-col px-6 pt-8 col-span-full md:col-span-3 lg:col-span-4 xl:col-span-2 `
S.DesignerName = tw.div`mb-4 text-3xl font-bold`
S.DesignerDescription = tw.div`line-clamp-5 md:line-clamp-5 xl:line-clamp-9`

export default MediaGrid
