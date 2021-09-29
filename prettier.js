const mergeSort = <T>(arr: T[]): T[] => {
  if (arr.length <= 1) return arr;

  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));

  return merge < T > (mergeSort(left), mergeSort(right));
};

const merge = <T>(arr1: T[], arr2: T[]): T[] => {
  let results: T[] = [];
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
