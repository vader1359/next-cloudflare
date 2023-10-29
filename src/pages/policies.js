import * as notion from "../lib/notion"

import { NotionPage } from "../components/common/NotionPage"
import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "../lib/config"
import MaxWidth from "@/components/layout/MaxWidth"

export async function getStaticProps() {
  const recordMap = await notion.getPage(
    parsePageId(
      "https://iant1359.notion.site/Our-Policies-d4eba8a991c941c2b06c87517cfe62bb?pvs=4"
    )
  )
  return { props: { recordMap }, revalidate: 10 }
}

const Policies = ({ recordMap }) => {
  return (
    <S.Policies>
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
