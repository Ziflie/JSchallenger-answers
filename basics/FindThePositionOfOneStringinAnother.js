// Write a function that takes a string as argument
// The string contains the substring 'is'
// Return the index of 'is'

function myFunction(a) {
  let text = a;
  let searchterm = "is";
  return a.indexOf(searchterm);
}

console.log(myFunction("paris"));

// myFunction("praise") // Expected // 3
// myFunction("risky") // Expected // 1
// myFunction("paris") // Expected // 3
