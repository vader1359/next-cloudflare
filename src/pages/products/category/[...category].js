// Import modules
import MaxWidth from "@/components/layout/MaxWidth"
import Cards from "@/components/products/card/Cards"
import { fetchInitialVariants } from "@/hooks/useVariants"
import { useRouter } from "next/router"
// import Image from "next/image"
import Space from "@/components/layout/Space"
import { CldImage } from "next-cloudinary"
import { slugify } from "@/utilities/slugify"
import { makeTitle } from "@/utilities/makeTitle"
import Head from "next/head"



// Define static subcategories and default image URL
const CATEGORIES = ["usm", "furniture", "lighting", "accessories", "other"]
const DEFAULT_IMAGE_URL = "website-fixed/category/furniture"

const categories = [
  {
    category: "furniture",
    image: "website-fixed/category/furniture",
  },
  {
    category: "usm",
    image: "website-fixed/category/usm",
  },
  {
    category: "lighting",
    image: "website-fixed/category/lighting",
  },
  {
    category: "accessories",
    image: "website-fixed/category/accessories",
  },
  {
    category: "other",
    image: "website-fixed/category/other",
  },
]

export async function getStaticPaths() {
  const paths = CATEGORIES.map((category) => ({
    params: { category: [category] },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const data = await fetchInitialVariants({
    filter_sub_category: params["category"].find(Boolean),
    validated: 1,
  })

  const socialDescription = `nanoHome - ${params["category"]
    .find(Boolean)
    .split("-")
    .join(" ")
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })}`
  const socialImage = `https://res.cloudinary.com/nanohome-web/website-fixed/category/${params[
    "category"
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

const ProductsByCategory = ({
  className,
  params,
  products,
  socialDescription,
  socialImage,
}) => {
  const filters = {
    filter_category: params["category"].find(Boolean),
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

  const getImageUrlByCategory = () => {
    const matchedProduct = categories.find(
      (category) => category.category === params["category"].find(Boolean)
    )
    return matchedProduct ? matchedProduct.image : DEFAULT_IMAGE_URL
  }

  const initialData = {
    pages: [products],
    pageParams: [null],
  }

  return (
    <S.ProductsByCategory className={className}>
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
        src={getImageUrlByCategory()}
        width={1600}
        height={720}
        alt={`${params["category"].find(Boolean)}-lifestyle-banner`}
        seoSuffix={slugify(
          `${params["category"].find(Boolean)}-lifestyle-banner`
        )}
        priority
      />
      <Space size="medium" />
      <Cards initialRecords={initialData} filters={filters} fields={fields} />
    </S.ProductsByCategory>
  )
}

const S = {
  ProductsByCategory: tw(MaxWidth)``,
}

export default ProductsByCategory
