import { useSuspenseInfiniteQuery, useQuery } from "@tanstack/react-query"
import Airtable from "airtable"
import axios from "axios"
import { buildFilterFormula } from "@/utilities/buildFilterFormula"
import searchInitialData from "@/files/allVariants.json"

const BASE_URL = "https://api.airtable.com/v0/app0XxsP2fN5kyX9a/variants"
const AUTH_HEADER = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
}
const COMMON_FIELDS = [
  "packshot_size",
  "product_line",
  "id",
  "name",
  "slug",
  "brand_cldr_id_logo",
  "brand_logo_size",
  "brand_name",
  "brand_origin",
  "priority",
  "price",
  "cldr_id_packshot",
  "filter_sub_category",
  "discount_percentage",
  "discounted_price",
  "sku",
]
const DEFAULT_PARAMS = {
  pageSize: 24,
  fields: COMMON_FIELDS,
  view: "WebView",
}

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
})

const nanoHomeBase = Airtable.base("app0XxsP2fN5kyX9a")

const idArrayToFilter = (ids) => {
  const paramsID = ids.map((id) => `{id} = "${id}"`)
  return `AND({validated} = 1, OR(${paramsID.join(", ")}))`
}

export const useAllVariants = () => {
  return useQuery({
    queryKey: ["allVariants"],
    queryFn: fetchAllVariants,
    placeholderData: searchInitialData,
  })
}

const fetchVariantsWithParams = async (params = {}) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: AUTH_HEADER,
      params: { ...DEFAULT_PARAMS, ...params },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching variants:", error)
    throw error
  }
}

export const fetchInitialVariants = (filters = {}) =>
  fetchVariantsWithParams({
    maxRecords: 24,
    filterByFormula: buildFilterFormula(filters) || `({validated} = 1)`,
    sort: [
      { field: "brand", direction: "asc" },
      { field: "sub_category", direction: "asc" },
      { field: "name", direction: "asc" },
      { field: "priority", direction: "asc" },
    ],
  })

export const fetchVariants = (queryKey, pageParam = 0) =>
  fetchVariantsWithParams({
    offset: pageParam,
    filterByFormula: buildFilterFormula(queryKey[1]),
    sort: [
      { field: "brand", direction: "asc" },
      { field: "sub_category", direction: "asc" },
      { field: "name", direction: "asc" },
      { field: "priority", direction: "asc" },
    ],
  })

export const fetchAllVariants = async () => {
  let allRecords = []
  try {
    await nanoHomeBase("variants")
      .select({
        view: "WebView",
        fields: COMMON_FIELDS,
        filterByFormula: `({validated} = 1)`,
        maxRecords: 12,
      })
      .eachPage((records, fetchNextPage) => {
        allRecords.push(...records.map((record) => record._rawJson))
        fetchNextPage()
      })
    return allRecords
  } catch (error) {
    console.error("An error occurred in fetchAllVariants:", error)
    throw error
  }
}

export const fetchRecommendedVariants = async (ids) => {
  const filter = idArrayToFilter(ids)
  return fetchVariantsWithParams({
    pageSize: 12,
    filterByFormula: filter,
    sort: [
      { field: "priority", direction: "asc" },
      { field: "price", direction: "desc" },
      { field: "brand", direction: "desc" },
    ],
  })
}

export const fetchVariant = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, {
    headers: AUTH_HEADER,
  })
  return response.data
}

export const useInfiniteVariantsQuery = (
  initialRecords,
  offset,
  filters = {},
  fields = []
) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["infiniteVariants", filters, fields],
    queryFn: ({ queryKey, pageParam }) => fetchVariants(queryKey, pageParam),
    placeholderData: initialRecords,
    initialStale: true,
    staleTime: 500,
    getNextPageParam: (lastPage) => lastPage.offset,
  })
}

export const useVariantQuery = (initialRecord, id) => {
  const variantQuery = useQuery({
    queryKey: ["variant", id],
    queryFn: () => fetchVariant(id),
    initialData: initialRecord,
    initialStale: true,
  })

  const similarVariantIds =
    variantQuery.data.fields.same_sub_category_variant_ids || []

  const { status, data: similarProductsQuery } = useQuery({
    queryKey: ["similarProducts", similarVariantIds],
    queryFn: () => fetchRecommendedVariants(similarVariantIds),
    enabled: !!similarVariantIds,
  })

  return {
    variantQuery,
    similarProductsQuery,
    similarProductsStatus: status,
  }
}
