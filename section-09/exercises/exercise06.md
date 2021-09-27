# Nested Even Sum

- Write a recurursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

- My Solution

```javascript
function nestedEvenSum(obj) {
  let total = 0;

  for (let key in obj) {
    if (obj[key] instanceof Object) total += nestedEvenSum(obj[key]);
    else {
      total += obj[key] % 2 === 0 ? obj[key] : 0;
    }
  }

  return total;
}
```