import Collections from "@/components/homepage/Collections"
import Hero from "@/components/homepage/Hero"
import HighlightDesigners from "@/components/homepage/HighlightDesigners"
import Showrooms from "@/components/homepage/Showrooms"
import StylistPicks from "@/components/homepage/StylistPicks"
import Space from "@/components/layout/Space"
import { fetchInitialVariants } from "@/hooks/useVariants"

import dynamic from "next/dynamic"
import Loading from "@/components/icons/IconLoading"

import "keen-slider/keen-slider.min.css"

const DynamicStylistPicks = dynamic(
  () => import("../components/homepage/StylistPicks"),
  {
    loading: () => <Loading />,
  }
)

const DynamicCollections = dynamic(
  () => import("../components/homepage/Collections"),
  {
    loading: () => <Loading />,
  }
)

const DynamicHighlightDesigners = dynamic(
  () => import("../components/homepage/HighlightDesigners"),
  {
    loading: () => <Loading />,
  }
)

const DynamicShowrooms = dynamic(
  () => import("../components/homepage/Showrooms"),
  {
    loading: () => <Loading />,
  }
)

export async function getStaticProps() {
  const stylistPicks = await fetchInitialVariants(
    { validated: 1, stylist_pick: 1 },
    ["product_line", "id", "slug", "brand_name", "brand_origin", "priority"],
    24
  )
  return {
    props: { stylistPicks },
    revalidate: 10,
  }
}

export default function Home({ stylistPicks }) {
  return (
    <>
      <Hero />
      <Space size="medium" />
      <DynamicStylistPicks variants={stylistPicks.records} />
      {/* <pre>{JSON.stringify(stylistPicks, null, 2)}</pre> */}
      <Space size="medium" />
      <DynamicCollections />
      <Space size="medium" />
      <DynamicHighlightDesigners />
      <Space size="medium" />
      <DynamicShowrooms />
    </>
  )
}
