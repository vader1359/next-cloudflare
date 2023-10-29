export const splitArray = (array, splitByNumber) => {
  var arrayOfArrays = []
  for (var i = 0; i < array.length; i += splitByNumber) {
    arrayOfArrays.push(array.slice(i, i + splitByNumber))
  }
  return arrayOfArrays
}
