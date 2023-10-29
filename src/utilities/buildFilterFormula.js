// Main filter formula
// Filter by multiple single value fields
const filterByFields = (filters) => {
  const { filter_room, name, ...otherFilters } = filters

  let fieldFilters = []

  for (const field in otherFilters) {
    const value = otherFilters[field]
    fieldFilters.push(`{${field}} = '${value}'`)
  }

  if (fieldFilters.length) {
    fieldFilters = `AND(${fieldFilters.join(",")})`
  }

  return fieldFilters
}

// Filter by multi-select field
const filterByMultiSelect = (values) => {
  if (typeof values === "string") {
    values = values.split(",")
  }

  const filters = values.map((value) => {
    return `FIND('${value}', {filter_room})`
  })

  return filters.length > 1 ? `(OR(${filters.join(",")}))` : filters[0]
}

export const buildFilterFormula = (filters) => {
  const { filter_room, validated, name, ...otherFilters } = filters

  const conditions = [`{validated} = ${validated}`]

  Object.entries(otherFilters).forEach(([field, value]) => {
    conditions.push(`{${field}} = '${value}'`)
  })

  if (name) {
    console.log
    // conditions.push(`SEARCH('${name}', {name})`)
    conditions.push(`FIND('${name}', LOWER({name})) >= 1`)
  }

  if (filter_room) {
    conditions.push(filterByMultiSelect(filter_room))
  }

  const formula = conditions.length ? `AND(${conditions.join(",")})` : ""

  return formula
}
