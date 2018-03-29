var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
function addElementToBeginningOfArray(array, element) {
    var newArray = array
    array.unshift(element)
    return newArray
    }