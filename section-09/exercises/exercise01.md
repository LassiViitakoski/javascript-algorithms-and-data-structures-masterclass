# Reverse

- Write a recursive function called reverse which accepts a string and returns a new string in reverse

- My Solution

```javascript
function reverse(string) {
  const { length } = string;

  if (length === 0) return '';

  const char = string.slice(length - 1, length);

  return char + reverse(string.slice(0, length - 1));
}
```