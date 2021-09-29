# Merge Sort

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

### Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in O(n + m) time and O(n + m) space and should not modify parameters passed to it

### Merging Arrays Pseudocode

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our result and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from other array

### Merge Sort Pseudocode

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merger (and sorted!) array

### Merge Sort Solution

```javascript
const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && arr2.length > j) {
    if (arr2[j] > arr1[i]) results.push(arr1[i]);
    if (arr2[j] <= arr1[i]) results.push(arr2[j]);

    arr2[j] > arr1[i] ? i++ : j++;
  }

  for (let k = i; k < arr1.length; k++) results.push(arr1[k]);
  for (let k = j; k < arr2.length; k++) results.push(arr2[k]);

  return results;
};
```