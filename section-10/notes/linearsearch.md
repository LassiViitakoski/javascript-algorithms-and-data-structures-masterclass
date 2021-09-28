# Linear Search

### How do we search?

- Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

### Javascript has search!

- There are many different search methods on arrays in JavaScript
  - indexOf
  - includes
  - find
  - findIndex
- But how do these functions work?

### Linear Search Pseudocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is founc
- If the value is never found, return -1

### Linear Search BIG O

- O(1) - Best Scenario
- O(n) - Worst Scenario
- O(n) - Average Scenario

### Exercise

- Write a function called linearSearch which accepts an array and a value, and returns the at which the value exists. If the value does not exist in the array, return -1.

- My Solution

```javascript
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}
```