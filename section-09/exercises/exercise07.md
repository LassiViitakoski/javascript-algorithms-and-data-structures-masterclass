# Capitalize Words

- Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

- My Solution

```javascript
function capitalizeWords(arr) {
  if (!arr.length) return [];

  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}
```