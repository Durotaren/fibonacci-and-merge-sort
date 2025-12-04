function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = arr.length >> 1;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  let i = 0;
  let j = 0;
  let result = [];

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return result.concat(left.slice(i), right.slice(j));
}
