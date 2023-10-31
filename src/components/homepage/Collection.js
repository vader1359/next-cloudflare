import { CldImage } from "next-cloudinary"
import MaxWidth from "../layout/MaxWidth"
import Link from "next/link"
import CarouselArrow from "../common/CarouselArrow"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"

const Collection = ({ className, collection, onClickPrev, onClickNext }) => {
  const {
    name,
    image,
    link,
    designer_cldr_id_portrait,
    description,
    designer,
  } = collection
  return (
    <S.Collection className={className}>
      <S.Image>
        <CldImage
          src={image}
          alt={`${name} collection featured product`}
          fill
          tw="object-cover h-full rounded-xl"
          placeholder={shimmerImage()}
          seoSuffix={slugify(`${name} collection featured product`)}
          sizes="
                  (min-width: 728px) 40vw,
                  (min-width: 976px) 60vw,
                  100vw
                "
        />
      </S.Image>
      <CarouselArrow
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        tw="top-0 right-0 hidden md:flex md:absolute"
      />
      <S.Designer>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
        <S.DesignerPortrait
          src={designer_cldr_id_portrait}
          width={240}
          height={240}
          alt={`designer ${designer} portrait`}
        />
        <S.Explore href={link}>EXPLORE MORE</S.Explore>
      </S.Designer>
    </S.Collection>
  )
}

const S = {}

S.Collection = tw(MaxWidth)`grid grid-cols-8 grid-rows-6 h-30r`
S.Image = tw.div`relative row-span-4 row-start-1 col-span-full md:col-span-6 md:col-start-1 md:row-start-1 md:row-span-full`
S.Designer = tw.div`relative flex flex-col justify-between col-start-2 col-end-8 row-span-3 row-start-4 p-6 bg-gray-200 rounded-xl md:col-span-3 md:col-start-6 md:row-start-2 md:row-end-6`
S.Title = tw.div`text-base md:text-2xl`
S.Description = tw.div`text-xs font-thin md:text-sm `
S.DesignerPortrait = tw(CldImage)`object-cover w-16 h-16 mt-4 rounded-lg md:w-20 md:h-24`
S.Explore = tw(
  Link
)`absolute text-sm font-semibold text-green-600 bottom-6 right-6 hover:text-green-700 pointer`

export default Collection
