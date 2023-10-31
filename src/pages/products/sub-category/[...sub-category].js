// Import modules
import MaxWidth from "@/components/layout/MaxWidth"
import Cards from "@/components/products/card/Cards"
import { fetchInitialVariants } from "@/hooks/useVariants"
import { useRouter } from "next/router"
import Image from "next/image"
import { CldImage } from "next-cloudinary"
import { slugify } from "@/utilities/slugify"
import Head from "next/head"

import Space from "@/components/layout/Space"



// Constants
const SUB_CATEGORIES = [
  "usm",
  "lounge",
  "table",
  "chair",
  "cabinet",
  "sofa",
  "table-lamp",
  "pendant",
  "floor-lamp",
  "wall-lamp",
  "outdoor",
  "accessories",
  "other"
]

const subCategories = [
  {
    sub_category: "table",
    image: "website-fixed/sub-category/table",
  },
  {
    sub_category: "usm",
    image: "website-fixed/sub-category/usm",
  },
  {
    sub_category: "table-lamp",
    image: "website-fixed/sub-category/table-lamp",
  },
  {
    sub_category: "wall-lamp",
    image: "website-fixed/sub-category/wall-lamp",
  },
  {
    sub_category: "sofa",
    image: "website-fixed/sub-category/sofa",
  },
  {
    sub_category: "pendant",
    image: "website-fixed/sub-category/pendant",
  },
  {
    sub_category: "outdoor",
    image: "website-fixed/sub-category/outdoor",
  },
  {
    sub_category: "floor-lamp",
    image: "website-fixed/sub-category/floor-lamp",
  },
  {
    sub_category: "lounge",
    image: "website-fixed/sub-category/lounge",
  },
  {
    sub_category: "cabinet",
    image: "website-fixed/sub-category/cabinet",
  },
  {
    sub_category: "chair",
    image: "website-fixed/sub-category/chair",
  },
  {
    sub_category: "accessories",
    image: "website-fixed/sub-category/accessories",
  },
  {
    sub_category: "other",
    image: "website-fixed/sub-category/other",
  },
]

const DEFAULT_IMAGE_URL = "website-fixed/sub-category/sofa"

export async function getStaticPaths() {
  const paths = SUB_CATEGORIES.map((subCategory) => ({
    params: { "sub-category": [subCategory] },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const data = await fetchInitialVariants({
    filter_sub_category: params["sub-category"].find(Boolean),
    validated: 1,
  })

  const socialDescription = `nanoHome - ${params["sub-category"]
    .find(Boolean)
    .split("-")
    .join(" ")
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })}`
  const socialImage = `https://res.cloudinary.com/nanohome-web/website-fixed/sub-category/${params[
    "sub-category"
  ].find(Boolean)}`

  return {
    props: {
      products: data,
      params: params,
      socialDescription: socialDescription,
      socialImage: socialImage,
    },
    revalidate: 10,
  }
}

const ProductsBySubCategory = ({
  className,
  params,
  products,
  socialDescription,
  socialImage,
}) => {
  const filters = {
    filter_sub_category: params["sub-category"].find(Boolean),
    validated: 1,
  }

  const fields = [
    "name",
    "packshot",
    "packshot_size",
    "brand_logo_link",
    "brand_logo_size",
    "brand_logo",
    "price",
    "slug",
  ]

  const getImageUrlBySubCategory = () => {
    const matchedProduct = subCategories.find(
      (subCategory) =>
        subCategory.sub_category === params["sub-category"].find(Boolean)
    )
    return matchedProduct ? matchedProduct.image : DEFAULT_IMAGE_URL
  }

  const initialData = {
    pages: [products],
    pageParams: [null],
  }

  return (
    <S.ProductsBySubCategory className={className}>
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
      <CldImage
        src={getImageUrlBySubCategory()}
        width={1600}
        height={720}
        alt={`${params["sub-category"].find(Boolean)}-lifestyle-banner`}
        seoSuffix={slugify(
          `${params["sub-category"].find(Boolean)}-lifestyle-banner`
        )}
        priority
      />
      <Space size="medium" />
      <Cards initialRecords={initialData} filters={filters} fields={fields} />
    </S.ProductsBySubCategory>
  )
}

const S = {
  ProductsBySubCategory: tw(MaxWidth)``,
}

export default ProductsBySubCategory
