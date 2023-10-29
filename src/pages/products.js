import Cards from "@/components/products/card/Cards"
import Space from "@/components/layout/Space"
import MaxWidth from "@/components/layout/MaxWidth"
import { fetchInitialVariants } from "@/hooks/useVariants"
import useFilters from "../hooks/useFilters"
import Image from "next/image"
import { useRouter } from "next/router"

let fields = [
  "name",
  "packshot",
  "cldr_id_packshot",
  "brand_cldr_id_logo",
  "packshot_size",
  "brand_logo_size",
  "brand_logo",
  "price",
  "slug",
]

export async function getStaticProps() {
  const data = await fetchInitialVariants({ validated: 1 })
  // const data = await fetchAllVariants()
  return { props: { variantsData: data }, revalidate: 10 }
}

const Products = ({ variantsData }) => {
  const router = useRouter()
  let filters = useFilters()

  // if (!variantsData) return <div>Loading ...</div>

  let initialData = {}
  initialData.pages = [variantsData]
  initialData.pageParams = [null]

  return (
    <S.Products>
      <Image
        src="https://res.cloudinary.com/nanohome-web/image/upload/v1697401095/website-fixed/sub-category/sofa.jpg"
        width={1600}
        height={720}
        alt="banner"
        priority
      />
      <Space size="medium" />
      <Cards initialRecords={initialData} filters={filters} fields={fields} />
      {/* <pre>{JSON.stringify(initialData, null, 2)}</pre> */}
    </S.Products>
  )
}

const S = {}

S.Products = tw(MaxWidth)``

export default Products
