// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result



function myFunction(a) {
    let text = a;
    return text.slice(0, text.length / 2) 
}


// myFunction('abcdefgh') // Expected // 'abcd'
// myFunction('1234') // Expected // '12'
// myFunction('gedcba') // Expected // 'ged'
