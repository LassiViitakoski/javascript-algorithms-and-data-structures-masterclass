# Capitalize First

- Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

- My Solution

```javascript
function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);

  return [arr[0]].concat(capitalizeFirst(arr.slice(1)));
}
```