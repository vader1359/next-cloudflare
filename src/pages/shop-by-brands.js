import MaxWidth from "@/components/layout/MaxWidth"
import Space from "@/components/layout/Space"
import Cards from "@/components/products/card/Cards"
import TagBrands from "@/components/products/card/TagBrands"
import { fetchInitialVariants } from "@/hooks/useVariants"
import { brandsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { useMemo } from "react"
import { fetchBrands } from "@/hooks/useBrands"

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
  const brands = await fetchBrands()
  // const brandsHasProducts = brands.records.filter(
  //   (brand) => brand.fields.number_of_variants > 0
  // )
  // const data = await fetchAllVariants()
  return { props: { variantsData: data, brands: brands }, revalidate: 10 }
}

const Products = ({ variantsData, brands }) => {
  const [activeBrands, setActiveBrands] = useAtom(brandsAtom)
  const hasVariants = (brand) => brand.fields.number_of_variants > 0
  const sortByVariants = (a, b) =>
    b.fields.number_of_variants - a.fields.number_of_variants

  const brandsHasProducts = brands.records
    .filter(hasVariants)
    .sort(sortByVariants)

  const filters = useMemo(() => {
    return { filter_brand: [...activeBrands].join(","), validated: 1 }
  }, [activeBrands])

  console.log(filters)

  // if (!variantsData) return <div>Loading ...</div>

  let initialData = {}
  initialData.pages = [variantsData]
  initialData.pageParams = [null]

  return (
    <S.Products>
      <TagBrands brands={brandsHasProducts} />
      <Space size="large" />
      <Cards filters={filters} fields={fields} />
    </S.Products>
  )
}

const S = {}

S.Products = tw(MaxWidth)``

export default Products
