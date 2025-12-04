function fibonacciIterative(n) {
  let arr = [0, 1];
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

function fibonacciRecursive(n, arr = [0, 1]) {
  if (arr.length == n) {
    return arr;
  }

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibonacciRecursive(n, arr);
}
