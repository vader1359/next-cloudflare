

import * as notion from "../../lib/notion"

import { fetchBrand, fetchAllBrands } from "../../hooks/useBrands"
import { NotionPage } from "@/components/common/NotionPage"

import MaxWidth from "@/components/layout/MaxWidth"
import { parsePageId } from "notion-utils"
import { previewImagesEnabled } from "../../lib/config"

export async function getStaticPaths() {
  const data = await fetchAllBrands()
  const paths = data.map((record) => ({
    params: { id: [record.id, record.fields.slug] },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const data = await fetchBrand(params.id.find(Boolean))
  if (!data.fields.link) {
    return {
      notFound: true,
    }
  }
  const recordMap = await notion.getPage(parsePageId(data.fields.link))
  return { props: { initialBrand: data, params, recordMap }, revalidate: 10 }
}

const Brand = ({ initialBrand, params, recordMap }) => {
  return (
    <S.Brand>
      <NotionPage
        // socialImage={initialBrand.fields.cldr_logo}
        // socialDescription={initialBrand.fields.description}
        recordMap={recordMap}
        previewImagesEnabled={previewImagesEnabled}
      />
    </S.Brand>
  )
}

const S = {}

S.Brand = tw(MaxWidth)``

export default Brand
