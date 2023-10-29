import * as notion from "../../lib/notion"

import { fetchNews, fetchAllNewses } from "@/hooks/useNews"
import { NotionPage } from "@/components/common/NotionPage"

import MaxWidth from "@/components/layout/MaxWidth"
import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "../../lib/config"



export async function getStaticPaths() {
  const data = await fetchAllNewses()
  const paths = data.map((record) => ({
    params: { id: [record.id, record.fields.slug] },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}


export async function getStaticProps({ params }) {
  const data = await fetchNews(params.id.find(Boolean))
  if (!data.fields.link) {
    return {
      notFound: true,
    }
  }
  const recordMap = await notion.getPage(parsePageId(data.fields.link))
  return { props: { initialBrand: data, params, recordMap }, revalidate: 10 }
}

const Project = ({ initialProject, params, recordMap }) => {
  return (
    <S.Project>
      <NotionPage
        recordMap={recordMap}
        previewImagesEnabled={previewImagesEnabled}
      />
    </S.Project>
  )
}

const S = {}

S.Project = tw(MaxWidth)``

export default Project
