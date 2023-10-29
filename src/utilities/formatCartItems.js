export const formatCartItems = (items) => {
  const formItems = items
    .map((item) => {
      const quantity = item.quantity
      const sku = item.sku
      const itemTotal = item.itemTotal
      const discountPercentage = item.discount_percentage || 0

      // Calculate the discounted price if discount percentage is greater than 0
      const price =
        discountPercentage > 0
          ? itemTotal * (1 - discountPercentage)
          : itemTotal

      // Format the string
      const formattedString = `${quantity}*${sku}@${price.toFixed(0)}`

      // Append the discount percentage if it's greater than 0
      return discountPercentage > 0
        ? `${formattedString}_pct_${discountPercentage * 100}`
        : formattedString
    })
    .join("|")
  return formItems
}
