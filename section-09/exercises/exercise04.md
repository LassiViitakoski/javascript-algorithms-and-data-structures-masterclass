# Flatten

- Write a recursive function flatten which accepts an array of array and returns a new array with all values flattened

- My Solution

```javascript
function flatten(arr) {
  if (!arr.length) return [];

  const newArr = flatten(arr.slice(1));

  if (Array.isArray(arr[0])) return flatten(arr[0]).concat(newArr);

  return [arr[0]].concat(newArr);
}
```

- Solution with recursive and for loop

```javascript
function flatten(oldArr) {
  var newArr = [];

  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }

  return newArr;
}
```