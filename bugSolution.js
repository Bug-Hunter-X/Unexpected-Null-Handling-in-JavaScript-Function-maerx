function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}

//Alternative solution using optional chaining and nullish coalescing
function foo2(a, b) {
  return (a ?? 0) + (b ?? 0);
}

console.log(foo2(null, 5)); // Output: 5
console.log(foo2(10, null)); // Output: 10
console.log(foo2(5, 10)); // Output: 15

// Example of error handling
try {
  console.log(foo(null, 5));
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
}
