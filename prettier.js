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
