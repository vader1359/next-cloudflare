import { CldImage } from "next-cloudinary"
import Button from "../common/Button"
import Link from "next/link"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"

const HighlightDesigner = ({
  className,
  portrait,
  name,
  birthdate,
  description,
  link,
}) => {
  return (
    <S.HighlightDesigner className={className}>
      <S.Portrait>
        <CldImage
          src={portrait}
          width={480}
          height={480}
          tw="object-cover w-56 h-56 rounded-xl"
          alt={`portrait of designer ${name}`}
          seoSuffix={slugify(`portrait of designer ${name}`)}
          placeholder={shimmerImage()}
          sizes="
                  (min-width: 976px) 25vw,
                  50vw
                "
        />
        <S.Name>{name}</S.Name>
        <S.Birthdate>{`(${birthdate})`}</S.Birthdate>
      </S.Portrait>
      <S.Info>{description}</S.Info>
      <Link href={link} tw="absolute bottom-8 justify-self-center">
        <Button pill color="green" size="xs">
          LEARN MORE
        </Button>
      </Link>
    </S.HighlightDesigner>
  )
}

const S = {}

S.HighlightDesigner = tw.div`flex flex-col items-center w-full h-full`

S.Portrait = tw.div`flex flex-col items-center`

S.Name = tw.div`mt-6 text-xl font-semibold`

S.Birthdate = tw.div`mt-2`

S.Info = tw.div`mt-8 mb-8 text-center md:px-16`

export default HighlightDesigner
