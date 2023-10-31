// import MaxWidth from "@/components/layout/MaxWidth"
// import { fetchInitialVariants, fetchAllVariants } from "@/hooks/useVariants"

// let fields = [
//   "name",
//   "packshot",
//   "cldr_id_packshot",
//   "brand_cldr_id_logo",
//   "packshot_size",
//   "brand_logo_size",
//   "brand_logo",
//   "price",
//   "slug",
// ]

// export async function getStaticProps() {
//   const data = await fetchAllVariants({ validated: 1 })
//   // const data = await fetchAllVariants()
//   return { props: { variantsData: data }, revalidate: 10 }
// }

// const Hell = ({ className, variantsData }) => {
//   return (
//     <S.Hell className={className}>
//       <pre>{JSON.stringify(variantsData, null, 2)}</pre>
//     </S.Hell>
//   )
// }

// const S = {}

// S.Hell = tw.div``

// export default Hell

const Hell = ({className}) => {
  return (
    <S.Hell className={className}>
      
    </S.Hell>
  )
}

const S = {}

S.Hell = tw.div``

export default Hell

