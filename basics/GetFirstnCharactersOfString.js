// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

function myFunction(a) {
  let text = a
   return text.slice(0,3)
}

console.log(myFunction("abcdefg"))

// myFunction('abcdefg') // Expected // 'abc'
// myFunction('1234') // Expected // '123'
// myFunction('fgedcba') // Expected // 'fge'
