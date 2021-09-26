# Recursion

### What is recursion?

- A process (a function in our case) that calls itself

### Why do I need to know this?

- It's EVERYWHERE!
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

### But first... let's talk about functions

- In almost all program languages there is a built in data structure that manages what happens when function are invoked
- It's named the call stack!

### The Call Stack

- It's a stack data structure - we'll talk about that later!
- Any time a function is invoked it is placed(pushed) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

### Why do I care?

- You're used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack!

### How recursive function work?

- Invoke the same function with a different input until you react your base case!

### Base case

- The condition when the recursion ends.
- This is the most important concept to understand!

### The essential parts of a recursive function

- Base Case
- Different Input

### Factorial recursive example

```javascript
  function factorial(num) {
    if (num === 1) return 1;

    return num * factorial(num - 1);
  }
```

### Where things go wrong?

- No base case
- Forgetting to return or returning the wrong thing!

### Helper Method Recursion

```javascript
  function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
      if (helperInput.length === 0) {
        return;
      }

      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }

      helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
  }
```

### Pure Recursion

- Pure Recursion Tips
  - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
  - Remember that strings are immutable so you will need to use methods like slice, substr or substring to make copies of strings

```javascript
  function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] & (2 !== 0)) {
      newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
  }
```