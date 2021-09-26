# Product Of Array

- Write a function called productOfArray which takes in an array of numbers and returns the product of them all

- My Solution with helper method

```javascript
function productOfArray(arr) {
  let total = 1;

  function product(arr) {
    if (arr.length === 0) return;

    total *= arr[0];

    return product(arr.slice(1));
  }

  product(arr);

  return total;
}
```

- Solution with pure recursion

```javascript
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}
```