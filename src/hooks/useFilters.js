import { useRouter } from "next/router"
import { slugify } from "@/utilities/slugify"

const useFilters = () => {
  const router = useRouter()
  if (router.asPath === router.pathname) return { validated: 1 }
  const filterParams = router.asPath.replace(`${router.pathname}?`, "")
  const filterObject = JSON.parse(
    '{"' +
      decodeURI(filterParams)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )

  // Add { validated: 1 } to the filterObject
  filterObject.validated = 1;

  return filterObject
}

export default useFilters