# Some Recursive

- Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array return true when passed callback. Otherwise it returns false.

- My Solution

```javascript
function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;

  return someRecursive(arr.slice(1), cb);
}
```