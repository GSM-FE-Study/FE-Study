function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;

  const arr1Sum = arr1.reduce((a, c) => a + c);
  const arr2Sum = arr2.reduce((a, c) => a + c);

  return arr1Sum < arr2Sum ? -1 : arr1Sum === arr2Sum ? 0 : 1;
}
