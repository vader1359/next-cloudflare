import IconSearch from "../icons/IconSearch"

import "react-modern-drawer/dist/index.css"

const FakeSearchInput = ({ className, onClick }) => {
  return (
    <S.FakeSearchInput className={className}>
      <div tw="relative">
        <div tw="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconSearch width={16} height={16} />
        </div>

        <S.SearchInput
          type="text"
          id="search-navbar"
          placeholder="Search..."
          onClick={onClick}
        />
      </div>
    </S.FakeSearchInput>
  )
}

const S = {}

S.FakeSearchInput = tw.div`items-center`
S.SearchInput = tw.input`block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-600`

export default FakeSearchInput
