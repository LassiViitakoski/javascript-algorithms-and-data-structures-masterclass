# Radix Sort

- Best average time complexity with comparison based sorting algorithms (all we have done by far) is O(n log n)
- Can we do better?
  - Yes
  - But not by making comparisons

- Radix sort is a special sorting algorithm that works on lists of numbers
- It never makes comparisons betweeen elements!
- It exploits the fact that information about the size of a number is encoded in the number of digits
- More digits means a bigger number

### Radix Sort Helpers

- In order to implement radix sort, it's helpful to build a few helper functions first:
  - getDigit(num, place) - returns the digit in num at the given place value
  - digitCount(num) - return the number of digits in num
  - mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

### Radix Sort Pseudocode

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
  - Create buckets for each digit (0 to 9)
  - Place each number in the corresponding bucket based on its k:th digit
- Replace our existing array with values in our buckets, start with 0 and going up to 9
- Return list at the end

### Radix Sort Solution

```javascript
const radixSort = arr => {
  for (k = 0; k < mostDigits(arr); k++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);

      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
};

const getDigit = (num, idx) => {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
};

const digitCount = num => {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = arr => {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
};
```

### Big O of Radix Sort

|Time Complexity (Best)|Time Complexity (Average)|Time Complexity (Worst)|Space Complexity
|:-:|:-:|:-:|:-:|
|O(nk)|O(nk)|O(nk)|O(n + k)|