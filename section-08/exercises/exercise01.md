# Power

- Write a function called power which accpets a base and an exponent. The function should return the power of base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

- My Solution

```javascript
  function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    return base * power(base, exponent - 1);
  }
```