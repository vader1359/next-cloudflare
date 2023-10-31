import * as notion from "../lib/notion"

import { NotionPage } from "@/components/common/NotionPage"
import MaxWidth from "@/components/layout/MaxWidth"
import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "../lib/config"

export async function getStaticProps() {
  const recordMap = await notion.getPage(
    parsePageId(
      "https://www.notion.so/iant1359/About-Us-ea21588ce29b43038e42c7979d715b7d"
    )
  )
  return { props: { recordMap }, revalidate: 10 }
}

const AboutUs = ({ recordMap }) => {
  return (
    <S.AboutUs>
      <MaxWidth />
      <NotionPage
        recordMap={recordMap}
        previewImagesEnabled={previewImagesEnabled}
      />
    </S.AboutUs>
  )
}

const S = {}

S.AboutUs = tw(MaxWidth)``

export default AboutUs
