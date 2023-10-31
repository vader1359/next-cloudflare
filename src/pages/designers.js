import MaxWidth from "@/components/layout/MaxWidth"
import Designer from "@/components/homepage/Designer"
import { fetchDesigners } from "@/hooks/useDesigners"
import Link from "next/link"

export async function getStaticProps() {
  const designers = await fetchDesigners()
  return { props: { designers }, revalidate: 10 }
}

const Designers = ({ className, designers }) => {
  return (
    <S.Designers className={className} title="Designers">
      <S.Grid>
      {designers.records.map((designer) => (
        <Link
          href={`/designers/${designer.id}/${designer.fields.slug}`}
          key={designer.id}
        >
          <Designer
            portrait={designer.fields.cldr_id_portrait}
            name={designer.fields.name}
          />
        </Link>
      ))}
      </S.Grid>
    </S.Designers>
  )
}

const S = {}

S.Designers = tw(MaxWidth)``
S.Grid = tw.div`grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8`

export default Designers
