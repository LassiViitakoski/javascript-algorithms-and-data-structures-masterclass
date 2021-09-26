# Problem Solving Patterns

- Frequenqy Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic programming
- Greedy Algorithms
- Backtracking
- Many more!

## Frequency Counter

- This pattern uses objects or sets to collect values / frequencies of values
- This can often avoid the for nested loops or O(n<sup>2</sup>) operations with arrays / strings

* An Example
  - Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

- Bad Solution
- Time Complexity - O(n<sup>2</sup>)

```javascript
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2);  // Nested loop is not optimal solution

      if (correctIndex === -1) return false;

      arr2.splice(correctIndex, 1);
    }

    return true;
  }
```

- Good solution
- Time Complexity - O(n)

```javascript
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) return false;
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }

    return true;
  }
```

- Challgenge "Anagrams"
  * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from icemon

```javascript
  function validAnagram(first, second) {
    if (first.length !== second.length) return false;

    first = first.toLowerCase();
    second = second.toLowerCase();

    let frequencyCounter = toFrequencyCounter(first);

    for (let letter of second) {
      if (!frequencyCounter[letter]) {
        return false;
      }

      frequencyCounter[letter] -= 1;
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

## Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
- Very efficient for solving problems with minimal space complexity as well.

* An Example
  - Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that to zero or undefined if a pair does not exist.

- Bad Solution
  - Same as Frequency Counter example where we solve problem with nested for loops
  - Time Complexity - O(n<sup>2</sup>)
  - Not good!

* Good Solutionr

```javascript
  function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum === 0) return [arr[left], arr[right]];

      sum > 0 ? right-- : left++;
    }

    return undefined;
  }
```

- Challenge "countUniqueValues"
  - Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

```javascript
  function countUniqueValues(arr) {
    if (!arr.length) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }

    return i + 1;
  }
```

## Sliding Window

- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array / string etc.

* An Example
  - Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```javascript
  function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < 0) return null;

    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
  }
```

### Divide and Conquer

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- This pattern can tremendously decrease time complexity

* An Example
  - Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

```javascript
  function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];

      if (array[middle] < val) {
        min = middle + 1;
      } else if (array[middle] > val) {
        max = middle - 1;
      } else {
        return middle;
      }
    }

    return -1;
  }

```