# Stringify Numbers

- Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

- My Solution

```javascript
function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    newObj[key] =
      obj[key] instanceof Object
        ? Array.isArray(obj[key])
          ? obj[key]
          : stringifyNumbers(obj[key])
        : Number.isInteger(obj[key])
        ? obj[key].toString()
        : obj[key];
  }

  return newObj;
}
```