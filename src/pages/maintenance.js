import * as notion from "@/lib/notion"

import { NotionPage } from "@/components/common/NotionPage"
import MaxWidth from "@/components/layout/MaxWidth"

import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "@/lib/config"

export async function getStaticProps() {
  const recordMap = await notion.getPage(
    parsePageId(
      "https://iant1359.notion.site/USM-Maintainance-Guide-a1470939f9dd4893b12d7db57884cbb7?pvs=4"
    )
  )
  return { props: { recordMap }, revalidate: 10 }
}

const Policies = ({ recordMap }) => {
  return (
    <S.Policies>
      <MaxWidth />
      <NotionPage
        recordMap={recordMap}
        previewImagesEnabled={previewImagesEnabled}
      />
    </S.Policies>
  )
}

const S = {}

S.Policies = tw(MaxWidth)``

export default Policies
