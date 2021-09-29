# Insertion Sort

- Builds up the sort by gradually creating a larger left half which is always sorted

### Insertion Sort Pseudocode

- Start by picking the second element in the array
- Now compare the second element with the on before and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the element in the correct place.
- Repeat until the array is 

- My Solution

```javascript
const insertionSort = arr => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j - 1, j);
    }
  }

  return arr;
};
```

### When to use Insertion Sort?

- Insertion Sort is good if we know that our data will be almost in correct order!
- Insertion Sort is good if we sort data while data is coming in live.