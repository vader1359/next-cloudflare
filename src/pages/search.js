import SearchPageMenu from "@/components/header/SearchPageMenu"
import MaxWidth from "@/components/layout/MaxWidth"

const Search = ({ className }) => {
  return (
    <S.Search className={className}>
      <MaxWidth>
        <SearchPageMenu />
      </MaxWidth>
    </S.Search>
  )
}

const S = {}

S.Search = tw.div``

export default Search
