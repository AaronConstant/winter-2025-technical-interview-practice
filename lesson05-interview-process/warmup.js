// Reverse the string for th expected output 
// Create a container array to store the elements.
// Split the string by no spaces 
// loop through the initial 

function reverseString(str) {
    let container = []
    let splitStr = str.split('')

    for(let i = splitStr.length-1; i>=0; i--) {
        container.push(splitStr[i])
    }
    return container;
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
    let splitWords = str.split(' ')

    return splitWords.map((word)=>{
        word[0].toUpperCase()
    }).join('')
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
    let vowels = 'aeiou'
    
     return str.reduce((count, letter)=>{
        if(vowels.includes(letter)) count++

        return count
     },0)
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
