# Frequency Counter - sameFrequency

- Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency digits.
- Your Solution MUST have the following complexities
  - Time: O(n)
  - Input / Output:
    - ```javascript
        sameFrequency(182, 281) // true
        sameFrequency(34, 14) // false
        sameFrequency(3589578, 5879385) // true
        sameFrequency(222, 22) // false
      ```

- Solution

```javascript
  function sameFrequency(first, second) {
    first = first.toString();
    second = second.toString();

    if (first.length !== second.length) return false;

    frequencyCounter = toFrequencyCounter(first);

    for (let letter of second) {
      if (!frequencyCounter[letter]) return false;

      frequencyCounter[letter]--;
    }

    return true;
  }

  function toFrequencyCounter(data) {
    let frequencyCounter = {};

    for (let val of data) {
      frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }

    return frequencyCounter;
  }
```