/* Remove Duplicates from an Array: Write a function called removeDuplicates that takes an array of numbers as input and returns an new array with all the duplicates removed. */
// // Examples:
module.exports = function removeDuplicates(arr) {
  let noDupes = new Set(arr)
  return [...noDupes] 

    arr.reduce((noDupes, num)=>{
     if(!noDupes.includes(num)) {
        noDupes.push(num)
      }
      return noDupes
    },[])
    for(let i = 0; i<arr.length;i++) {
      
    }
};

// removeDuplicates([1, 1, 1, 1, 1, 1]); // => [1]
// removeDuplicates([1, 2, 3, 3, 4, 5]); // => [1, 2, 3, 4, 5]
// removeDuplicates([1, 2, 3, 4, 5]); // => [1, 2, 3, 4, 5]