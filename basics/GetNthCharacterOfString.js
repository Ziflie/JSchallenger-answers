// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function myFunction(a, n) {
  let string = a;
  let index = n - 1;
  return string.charAt(index);
}

// myFunction('abcd',1) // Expected // 'a'
// myFunction('zyxbwpl',5) // Expected // 'w'
// myFunction('gfedcba',3) // Expected // 'e'
