// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer:10
// b) Verify and explain: the length command is asking how many index values are inside of the function. In this case we have 10 including the space

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: This particular command is asking what character is in the 4th index. In this case it is the letter "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: This command is asking to retun the content that is in the "1" index. In this case it is "Ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//  console.log(weekendDays.toUpperCase())

// a) Your answer: Type Error
// b) Verify and explain: This particular command will produce an error because the "toUpperCase" operator is specifically for a string not an array
// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: using the length opertaor will retun the number of values inside of this array. When we add the typeOf operator to that we are bascially asking which data type will be return when we call on the length operator. In this case it will be a number.
