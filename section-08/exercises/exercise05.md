# Fib

- Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

- Input / Output

```javascript
fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
```

- My Solution with helper method

```javascript
function fib(num) {
  let array = [1, 1];
  let wantedIndex = num - 1;

  function helper(arr) {
    let lastIndex = arr.length - 1;

    if (lastIndex === wantedIndex) return arr[wantedIndex];

    arr.push(arr[lastIndex] + arr[lastIndex - 1]);

    return helper(arr);
  }

  return helper(array);
}

```

- Solution with pure recursion
- Honestly I don't understand how this works at least at this point of this course...

```javascript
function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
```