# Bubble Sort

- A sorting algorithm where the largest values bubble up to the top

### BubbleSort Pseudocode

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greated than arr[j + 1], swap those two values!
- Return the sorted array

- Bubble Sort

```javascript
const bubbleSort = arr => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
};
```

### When to use Bubble Sort?

- Bubble Sort is good if we know that our data will be almost in correct order!