import CardPackshot from "./CardPackshot"
import CardInfo from "./CardInfo"
import Link from "next/link"

const Card = ({ className, variant, isSale }) => {
  const {
    cldr_id_packshot,
    price,
    name,
    brand_cldr_id_logo,
    brand_logo_size,
    discount_percentage,
    discounted_price,
    slug,
    packshot_size,
  } = variant.fields

  return (
    <S.Card className={className}>
      <Link href={`/products/${variant.id}/${slug}`}>
        <CardPackshot
          packshotSize={packshot_size}
          cldr_id_packshot={cldr_id_packshot}
        />
      </Link>
      <CardInfo isSale={isSale} variant={variant} />
    </S.Card>
  )
}

const S = {}

S.Card = tw.div`flex flex-col justify-end`

export default Card
