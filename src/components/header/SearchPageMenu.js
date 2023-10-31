import { searchPageResultsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import MaxWidth from "../layout/MaxWidth"
import Card from "../products/card/Card"
import { useRouter } from "next/router"
import { useAllVariants } from "@/hooks/useVariants"
import { useEffect } from "react"

const searchOptions = {
  includeScore: true,
  keys: ["fields.name"],
  minMatchCharLength: 2,
  threshold: 0.2,
}

const SearchPageMenu = ({ className, variants }) => {
  const router = useRouter()
  const [searchPageResults, setSearchPageResults] = useAtom(
    searchPageResultsAtom
  )

  const { data, isLoading } = useAllVariants()

  const handleChange = async (e) => {}

  useEffect(() => {
    const fetchData = async () => {
      const Fuse = (await import("fuse.js")).default
      const fuse = new Fuse(data, searchOptions)
      let searchPageResults = fuse.search(
        router.asPath.replace("/search?name=", "")
      )
      setSearchPageResults(searchPageResults)
    }

    fetchData().catch(console.error)
  }, [data, router.asPath])

  return (
    <S.SearchPageMenu className={className}>
      <MaxWidth>
        <S.ProductGrid>
          {searchPageResults.map((variant) => (
            <Card
              key={variant.item.id}
              variant={variant.item}
              css={variant.item.fields.packshot_size == 2 && tw`col-span-2`}
            />
          ))}
        </S.ProductGrid>
        {/* <pre>{JSON.stringify(searchPageResults, null, 2)}</pre> */}
      </MaxWidth>
    </S.SearchPageMenu>
  )
}

const S = {}

S.SearchPageMenu = tw.div`w-full h-auto overflow-y-auto `

S.ProductGrid = tw.div`grid items-end grid-flow-row-dense grid-cols-2 gap-12 mt-12 md:gap-20 md:grid-cols-3 xl:grid-cols-4`

export default SearchPageMenu
