import { searchResultsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import MaxWidth from "../layout/MaxWidth"
import Card from "../products/card/Card"

const SearchMenu = ({ className, variants }) => {
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom)
  return (
    <S.SearchMenu className={className} tw="mb-80">
      <MaxWidth>
        <S.ProductGrid>
          {searchResults.map((variant) => (
            <Card
              key={variant.item.id}
              variant={variant.item}
              css={variant.item.fields.packshot_size == 2 && tw`col-span-2`}
            />
          ))}
        </S.ProductGrid>
        {/* <pre>{JSON.stringify(searchResults, null, 2)}</pre> */}
      </MaxWidth>
    </S.SearchMenu>
  )
}

const S = {}

S.SearchMenu = tw.div`w-full h-full overflow-y-auto `

S.ProductGrid = tw.div`grid items-end grid-flow-row-dense grid-cols-2 gap-12 mt-12 mb-48 md:gap-20 md:grid-cols-3 xl:grid-cols-4`

export default SearchMenu
