import Head from "next/head"
import Link from "next/link"
import MaxWidth from "@/components/layout/MaxWidth"
import Space from "@/components/layout/Space"
import { fetchNewses } from "@/hooks/useNews"
import { CldImage } from "next-cloudinary"
import { shimmerImage } from "@/utilities/shimmerImage"

export async function getStaticProps() {
  const newses = await fetchNewses()
  return { props: { newses }, revalidate: 10 }
}

const Projects = ({ newses }) => {
  return (
    <>
      <Space size="small" />
      <S.Projects title="News">
        <Head>
          <title>nanoHome News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <S.ProjectGrid>
          {newses.records.map((project) => (
            <Link
              href={
                project.fields.link
                  ? `/news/${project.id}/${project.fields.slug}`
                  : "/news"
              }
              key={project.id}
            >
              <S.ImageWrapper>
                <div>
                  <S.Image
                    src={project.fields.cldr_id_cover}
                    width={640}
                    height={640}
                    placeholder={shimmerImage()}
                  />
                  <S.Name>{project.fields.name}</S.Name>
                </div>
              </S.ImageWrapper>
            </Link>
          ))}
        </S.ProjectGrid>
      </S.Projects>
    </>
  )
}

const S = {}

S.Projects = tw(MaxWidth)``

S.ProjectGrid = tw.div`grid w-full grid-cols-1 gap-16 m-auto md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`
S.ImageWrapper = tw.div`flex flex-col cursor-pointer aspect-w-1 aspect-h-1`
S.Image = tw(
  CldImage
)`object-cover object-center w-full mb-6 h-96 hover:shadow-xl`

S.Name = tw.div`font-serif text-xl `

export default Projects
