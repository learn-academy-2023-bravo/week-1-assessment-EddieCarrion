// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 
// Process
// create a function that will take a value called temperature.
const boilingPoint = (temperature) => {
    // if the temperature is less than 212 return "is below boiling point"
    if (temperature < 212){
        return `${temperature} is below boiling point`
    }
    // if the temperatue is above 212 return "is above boiling point"
    else if (temperature > 212){
        return `${temperature} is above boiling point`
    }
    // if the temperature is equal to 212 return "is at boiling point"
    else {
        return `${temperature} is at boiling point`
    }
}


const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPoint(temperature1))
console.log(boilingPoint(temperature2))
console.log(boilingPoint(temperature3))
// output: 
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// process 
// create a function called "comboLength" that take two arrays
const comboLength = (array1,array2) =>{
// combine the two arrays into a variable called "combine"
const combine = array1.concat(array2)

// return the length of the "combine" variable
return combine.length
}



const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
console.log(comboLength(padres1984WorldSeriesRuns,padres1998WorldSeriesRuns))

// output: 9
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// process
// create a function called "stringReverse" that accepts a string
const stringReverse = (data) =>{
// convert the string into an array
var splitLetters = data.split("")
// reverse the order of the values in the array
var reversedLetters = splitLetters.reverse()
// convert the array back into a string
var backToString = reversedLetters.join("")
return backToString
} 



// reverse the order of the values in the array
// convert the array back into a string

const currentCohort = "Bravo 2023"
console.log (stringReverse(currentCohort))
// Expected output: "3202 ovarB"
// output 3202 ovarB

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// process

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

const givenValue2 = 10
// Expected output: 8
// Expected output: 7
// create a variable that will identify and return the last index value of (42) inside of the array
var last42index = myNumbers.lastIndexOf(42)
console.log(last42index)
// outcome: 9
// create a variable that will identify and return the last index value of (10) inside of the array
var last10index = myNumbers.lastIndexOf(10)
console.log (last10index)
// outcome 7













// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// process
// create a variable that will sort the function that contains the summer temperaures from largest to smallest

let numbers = sanDiegoSummerTemperatures.sort ((a,b) => b-a)

console.log (numbers)
// outcome : 82, 80, 79, 77,76, 73, 72
// create a second variable that will sort the function that contains the winter temperatures from largest to smallest
let secondNumbers = sanDiegoWinterTemperatures.sort ((a,b) => b-a)

console.log (secondNumbers)
// outcome : [68, 67, 66, 66, 62, 59, 59]

