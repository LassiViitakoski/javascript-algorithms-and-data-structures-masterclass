# Factorial

- Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all integers below it eg. factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. Factorial zero (0!) is always 1.

- My Solution

```javascript
function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return num;

  return num * factorial(num - 1);
}
```