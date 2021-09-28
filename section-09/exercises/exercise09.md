# Collect Strings

- Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

- My Solution

```javascript
function collectStrings(obj) {
  let newArr = [];

  for (let key in obj) {
    obj[key] instanceof Object
      ? (newArr = [...newArr, ...collectStrings(obj[key])])
      : typeof obj[key] === 'string' && newArr.push(obj[key]);
  }

  return newArr;
}
```