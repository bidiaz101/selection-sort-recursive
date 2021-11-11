function selectionSortRecursive(arr, sorted = []) {
  // type your code here
  if(arr.length === 0) return sorted

  const min = Math.min(...arr)
  const index = arr.indexOf(min)

  sorted.push(min)
  arr.splice(index, 1)

  return selectionSortRecursive(arr, sorted)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("Expecting: [1, 2, 3, 4, 5, 6, 7]");
  console.log("=>", selectionSortRecursive([7, 6, 5, 4, 3, 2, 1]))

  console.log("Expecting: [1, 2, 4, 6, 7, 9, 10, 13, 13]]")
  console.log("=>", selectionSortRecursive([9, 7, 4, 2, 1, 13, 10, 6, 13]))

  const startTime = new Date()

  const longInput = []

  for(let i = 0; i < 100; i++){
    longInput.push(Math.floor(Math.random() * 10))
  }

  for(let i = 0; i < 1000; i++) {
    selectionSortRecursive([3, 2, 1])
    selectionSortRecursive(longInput)
  }

  const averageRuntime = (new Date() - startTime) / 2000

  console.log(averageRuntime)
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file

// if the array is empty return the sorted array
// find the minimum
// find the minimum index
// add the minimum to the end of the sorted array
// remove the minimum from original array
// pass the original array and the sorted array to the recursive call

// And a written explanation of your solution
