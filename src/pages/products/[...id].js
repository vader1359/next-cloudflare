

import ProductDetails from "@/components/product-details/ProductDetails"
import {
  fetchAllVariants,
  fetchVariant,
  useVariantQuery,
  fetchRecommendedVariants,
  fetchInitialVariants,
} from "@/hooks/useVariants"
import Head from "next/head"
import MaxWidth from "@/components/layout/MaxWidth"
import Space from "@/components/layout/Space"
import CardsSimilar from "@/components/products/card/CardsSimilar"
import Loading from "@/components/icons/IconLoading"
import CarouselArrow from "@/components/common/CarouselArrow"

export async function getStaticPaths() {
  const data = await fetchAllVariants()
  const paths = data.map((record) => ({
    params: { id: [record.id, record.fields.slug] },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = await fetchVariant(params.id.find(Boolean))

  const socialDescription = `nanoHome - ${data.fields.name}`
  const socialImage = data.fields.cldr_packshot

  return {
    props: {
      initialProduct: data,
      params: params,
      socialDescription: socialDescription,
      socialImage: socialImage,
    },
    revalidate: 10,
  }
}

const Product = ({
  className,
  initialProduct,
  socialDescription,
  socialImage,
  params,
  // similarProducts,
}) => {
  const { variantQuery, similarProductsQuery, similarProductsStatus } =
    useVariantQuery(initialProduct, params.id.find(Boolean))
  const variant = variantQuery.data
  // const similarProducts = similarProductsQuery

  return (
    <S.Product className={className}>
      <Head>
        {socialDescription && (
          <>
            <meta name="description" content={socialDescription} />
            <meta property="og:description" content={socialDescription} />
            <meta name="twitter:description" content={socialDescription} />
          </>
        )}
        {socialImage ? (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={socialImage} />
            <meta property="og:image" content={socialImage} />
          </>
        ) : (
          <meta name="twitter:card" content="summary" />
        )}

        <title>{socialDescription}</title>
        <meta property="og:title" content={socialDescription} />
        <meta name="twitter:title" content={socialDescription} />
        <meta name="twitter:creator" content="@transitive_bs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDetails product={variant} />
      <Space size="small" />
      <MaxWidth>
        {similarProductsStatus == "success" ? (
          <CardsSimilar products={similarProductsQuery.records} />
        ) : (
          <Loading />
        )}
      </MaxWidth>
      {/* <pre>{JSON.stringify(similarProductsQuery, null, 2)}</pre> */}
    </S.Product>
  )
}

const S = {}

S.Product = tw.div``

export default Product
