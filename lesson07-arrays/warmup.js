// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

function sumUpArray(arr) {
 return arr.reduce((total, num) => {
    total += num
    return total
 },0)
}


// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.

function findMax(arr) {
    return Math.max(...arr)
}

// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.
