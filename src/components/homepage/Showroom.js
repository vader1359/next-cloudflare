import { CldImage } from "next-cloudinary"
import { shimmerImage } from "@/utilities/shimmerImage"

const Showroom = ({ className, showroom }) => {
  return (
    <S.Container className={className}>
      <S.Image
        src={showroom.image.imagePath}
        alt="showroom image"
        width={560}
        height={320}
        crop="thumb"
        placeholder={shimmerImage()}
        sizes="
                (min-width: 728px) 50vw,
                (min-width: 976px) 33vw,
                100vw
              "
      />
      <S.Info>
        <S.Name>{showroom.title}</S.Name>
        <S.Address>{showroom.address}</S.Address>
      </S.Info>
    </S.Container>
  )
}

const S = {}

S.Container = tw.div`h-full `
S.Image = tw(CldImage)`relative object-cover w-full mb-3 rounded-xl md:mb-6 h-20r md:h-20r`

S.Info = tw.div`flex flex-col items-center w-3/4 m-auto`
S.Name = tw.div`mb-2 text-base font-bold text-center md:text-lg xl:text-2xl`
S.Address = tw.div`text-sm leading-relaxed text-center md:text-sm`

export default Showroom
