import * as notion from "@/lib/notion"

import { NotionPage } from "@/components/common/NotionPage"
import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "@/lib/config"
import MaxWidth from "@/components/layout/MaxWidth"

export async function getStaticProps() {
  const recordMap = await notion.getPage(
    parsePageId(
      "https://iant1359.notion.site/Design-Service-b8a4c5408174471c84f3982b69bf962c?pvs=4"
    )
  )
  return { props: { recordMap }, revalidate: 10 }
}

const InteriorDecoration = ({ recordMap }) => {
  return (
    <S.InteriorDecoration>
      <NotionPage
        recordMap={recordMap}
        previewImagesEnabled={previewImagesEnabled}
      />
    </S.InteriorDecoration>
  )
}

const S = {}

S.InteriorDecoration = tw(MaxWidth)``

export default InteriorDecoration
