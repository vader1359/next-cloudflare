import Airtable from "airtable"
import axios from "axios"

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
})

const nanoHomeBase = Airtable.base("app0XxsP2fN5kyX9a")

const authHeader = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
}

const baseURL = "https://api.airtable.com/v0/app0XxsP2fN5kyX9a/brands"

const filterByFields = (filterInput = {}) => {
  const {
    brand,
    category,
    group_category,
    sub_category,
    filter_sub_category,
    designer,
    sale,
    price,
    stock,
    stylist_pick,
    is_sale,
  } = filterInput
  let filters = []
  for (const filter in filterInput) {
    filter && filters.push(`{${filter}} = '${filterInput[filter]}'`)
  }
  if (filters.length > 1) return `AND(${filters.join(", ")})`
  if (filters.length === 1) return `${filters.join(", ")}`
  return ""
}

export const fetchBrands = async (queryKey, pageParam = 0) => {
  try {
    const response = await axios.get(`${baseURL}`, {
      headers: authHeader,
      params: {
        // pageSize: 24,
        offset: pageParam,
        fields: ["id", "name", "link", "cldr_id_logo", "slug", "number_of_variants", "logo_size"],
        // filterByFormula: `({validated} = 1)`,
        filterByFormula: `({validated} = 1)`,
      },
    })

    // Return the data directly, no need to stringify it
    return response.data
  } catch (error) {
    console.error("Error fetching brands:", error)
    throw error // Rethrow the error to handle it elsewhere, if needed
  }
}


export const fetchAllBrands = async () => {
  try {
    let allRecords = []

    nanoHomeBase("brands")
      .select({
        view: "WebView", // adjust this to your actual view name
        fields: ["id", "name", "link", "cldr_id_logo", "slug"],
        filterByFormula: `({validated} = 1)`,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            allRecords.push(record._rawJson)
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            throw err // If there's an error, it's best to propagate it up.
          }
        }
      )

    return allRecords
  } catch (error) {
    console.error("An error occurred in fetchAllBrands:", error)
    throw error
  }
}


export const fetchBrand = async (id) => {
  return axios
    .get(`${baseURL}/${id}`, {
      headers: authHeader,
      params: {
        // fields: ["name", "id", "sku", "description", "price"],
        // returnFieldsByFieldId: true,
      },
    })
    .then((res) => res.data)
}
