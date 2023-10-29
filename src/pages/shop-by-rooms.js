import MaxWidth from "@/components/layout/MaxWidth"
import Space from "@/components/layout/Space"
import Cards from "@/components/products/card/Cards"
import Tags from "@/components/products/card/TagRooms"
import { fetchInitialVariants } from "@/hooks/useVariants"
import { roomsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { useMemo } from "react"

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
  const [activeRooms, setActiveRooms] = useAtom(roomsAtom)
  console.log(activeRooms)
  const filters = useMemo(() => {
    return { filter_room: [...activeRooms].join(","), validated: 1 }
  }, [activeRooms])

  // if (!variantsData) return <div>Loading ...</div>

  let initialData = {}
  initialData.pages = [variantsData]
  initialData.pageParams = [null]

  return (
    <S.Products>
      <Tags />
      <Space size="medium" />{" "}
      <Cards initialRecords={initialData} filters={filters} fields={fields} />
      {/* <pre>{JSON.stringify(initialData, null, 2)}</pre> */}
    </S.Products>
  )
}

const S = {}

S.Products = tw(MaxWidth)``

export default Products
