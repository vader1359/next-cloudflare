

import { fetchAllDesigners, fetchDesigner } from "@/hooks/useDesigners"
import * as notion from "../../lib/notion"

import { NotionPage } from "@/components/common/NotionPage"

import MaxWidth from "@/components/layout/MaxWidth"
import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "../../lib/config"

export async function getStaticPaths() {
  const data = await fetchAllDesigners()
  const paths = data.map((record) => ({
    params: { id: [record.id, record.fields.slug] },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const data = await fetchDesigner(params.id.find(Boolean))
  if (!data.fields.link) {
    return {
      notFound: true,
    }
  }
  const recordMap = await notion.getPage(parsePageId(data.fields.link))
  return { props: { initialDesigner: data, params, recordMap }, revalidate: 10 }
}

const Designer = ({ recordMap }) => {
  return (
    <S.Designer>
      <NotionPage
        recordMap={recordMap}
        previewImagesEnabled={previewImagesEnabled}
      />
    </S.Designer>
  )
}

const S = {}

S.Designer = tw(MaxWidth)``

export default Designer
