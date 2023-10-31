import Head from "next/head"
import Link from "next/link"
import MaxWidth from "@/components/layout/MaxWidth"
import { fetchBrands } from "../hooks/useBrands"
import Image from "next/image"
import { CldImage } from "next-cloudinary"

export async function getStaticProps() {
  const brands = await fetchBrands({ validated: 1 })
  return { props: { brands }, revalidate: 10 }
}

const Brands = ({ brands }) => {
  return (
    <S.Brands>
      <Head>
        <title>nanoHome Brands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.BrandGrid>
        {brands.records.map((brand) => (
          <Link
            href={`/brands/${brand.id}/${brand.fields.slug}`}
            key={brand.id}
          >
            <S.ImageWrapper>
              <S.Image
                src={brand.fields.cldr_id_logo}
                width={300}
                height={200}
                alt="icon"
              />
            </S.ImageWrapper>
          </Link>
        ))}
      </S.BrandGrid>
      {/* <pre>{JSON.stringify(brands, null, 2)}</pre> */}
    </S.Brands>
  )
}

const S = {}

S.Brands = tw(MaxWidth)``

S.BrandGrid = tw.div`grid w-full grid-cols-2 gap-1 m-auto md:grid-cols-4 lg:grid-cols-6`
S.ImageWrapper = tw.div`w-full h-48 cursor-pointer aspect-square bg-brand-blue-50 hover:bg-brand-blue-100`
S.Image = tw(CldImage)`object-contain object-center w-full h-full p-8 xl:p-12`

export default Brands
