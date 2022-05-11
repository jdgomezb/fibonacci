/**
 * What is the Fibonacci number at position n?
 */
const nthFibonacciNumber = (n) => {
  if (n < 2) return n;
  
  return nthFibonacciNumber(n - 1) + nthFibonacciNumber(n - 2);
}

console.log('Fibonacci number at position 10:');
console.log(nthFibonacciNumber(10)); // 55
console.log('---------------#---------------');

/**
 * Print the Fibonacci sequence up to n
 * using previously defined function
 */
const printFibonacciSequence = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(nthFibonacciNumber(i));
  }
}

console.log('Fibonacci sequence up to 10, using previously defined function:');
printFibonacciSequence(10); // 1 1 2 3 5 8 13 21 34 55
console.log('---------------#---------------');

/**
 * Print the Fibonacci sequence up to n
 * using for loop
 */
const printFibonacciSequenceForLoop = (n) => {
  let n1 = 1;
  let n2 = 1;
  let nextIteration;

  for (let i = 1; i <= n; i++) {
    console.log(n1);
    nextIteration = n1 + n2;
    n1 = n2;
    n2 = nextIteration;
  }
}

console.log('Fibonacci sequence up to 10, using for loop:');
printFibonacciSequenceForLoop(10); // 1 1 2 3 5 8 13 21 34 55
console.log('---------------#---------------');

/**
 * Print the Fibonacci sequence up to n
 * using while loop
 */
const printFibonacciSequenceWhileLoop = (n) => {
  let n1 = 1;
  let n2 = 1;
  let nextIteration;

  while (n > 0) {
    console.log(n1);
    nextIteration = n1 + n2;
    n1 = n2;
    n2 = nextIteration;
    n--;
  }
}

console.log('Fibonacci sequence up to 10, using while loop:');
printFibonacciSequenceWhileLoop(10); // 1 1 2 3 5 8 13 21 34 55
console.log('---------------#---------------');