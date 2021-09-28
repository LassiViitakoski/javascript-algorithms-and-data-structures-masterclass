# Searching Algorithms

### How do we search?

- Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

### Naive String Search Example

- We suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually
- Pseudocode
  - Loop over the longer string
  - Loop over the shorter string
  - If the character don't match, break out of the inner loop
  - If you complete the inner loop and find a match, increment the count of matches,
  - Return the ocunt

- My Solution of Naive String Search

```javascript
function stringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    if (long[i] === short[0]) {
      for (let j = 0; j < short.length; j++) {
        if (short[j] !== long[i + j]) break; 
        if (j === short.length - 1) count++;
      }
    }
  }

  return count;
}
```