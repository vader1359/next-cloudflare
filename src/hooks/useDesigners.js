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

const baseURL = "https://api.airtable.com/v0/app0XxsP2fN5kyX9a/designers"


export const fetchDesigners = async (queryKey, pageParam = 0) => {
  try {
    const response = await axios.get(`${baseURL}`, {
      headers: authHeader,
      params: {
        // pageSize: 24,
        offset: pageParam,
        fields: ["id", "cldr_id_portrait", "link", "slug", "name"],
        // filterByFormula: `({validated} = 1)`,
        filterByFormula: `({validated} = 1)`,
      },
    })

    // Return the data directly, no need to stringify it
    return response.data
  } catch (error) {
    console.error("Error fetching designers:", error)
    throw error // Rethrow the error to handle it elsewhere, if needed
  }
}

export const fetchAllDesigners = async () => {
  try {
    let allRecords = []

    nanoHomeBase("designers")
      .select({
        view: "WebView", // adjust this to your actual view name
        fields: ["id", "cldr_id_portrait", "link", "slug", "name"],
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
    console.error("An error occurred in fetchAllDesigners:", error)
    throw error
  }
}

export const fetchDesigner = async (id) => {
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
