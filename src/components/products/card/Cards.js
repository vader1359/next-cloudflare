import { useInfiniteVariantsQuery } from "@/hooks/useVariants"
import InfiniteScroll from "react-infinite-scroll-component"
import React from "react"
import Loading from "@/components/icons/IconLoading"
import Button from "@/components/common/Button"

import Card from "./Card"
const Cards = ({
  className,
  initialRecords,
  offset,
  filters,
  fields,
  isSale,
}) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteVariantsQuery(
    initialRecords,
    offset,
    filters,
    fields
  )

  if (!data) return <Loading />
  return (
    <>
      {/* <pre>{JSON.stringify(data.pages[0].records, null, 2)}</pre> */}
      <S.Cards
        dataLength={data.pages.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Loading />}
        scrollThreshold={0.3}
        className={className}
      >
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.records.map((record) => (
              <Card
                key={record.id}
                variant={record}
                css={record.fields.packshot_size == 2 && tw`col-span-2`}
                isSale={isSale}
                tw="lg:min-h-[320px] self-bottom"
              />
            ))}
          </React.Fragment>
        ))}
      </S.Cards>
    </>
  )
}

const S = {}

S.Cards = tw(
  InfiniteScroll
)`grid items-end grid-flow-row-dense grid-cols-2 gap-12 md:gap-20 lg:grid-cols-3 xl:grid-cols-4 `

export default Cards
