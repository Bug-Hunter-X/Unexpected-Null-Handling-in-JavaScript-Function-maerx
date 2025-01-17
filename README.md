# Unexpected Null Handling in JavaScript Function

This repository demonstrates a potential bug in a JavaScript function involving the handling of null values.  The function `foo` adds two numbers together; however, if either input is null, it simply returns 0. This behavior might be unintentional, and alternative handling mechanisms are explored in the solution.

## Bug Description

The `foo` function returns 0 when either `a` or `b` is null.  This might lead to unexpected results in applications where null values require different processing, such as throwing errors or using default values. 

## Solution

The provided solution explores an alternative approach where instead of returning 0 for null values, an error is thrown.  This approach provides clearer error handling and avoids potentially unexpected 0 results. The solution also provides an example using optional chaining and nullish coalescing operator for more concise handling.