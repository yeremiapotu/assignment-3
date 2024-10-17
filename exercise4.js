// YEREMIA REAL POTU

function arrSum(arr) {
  let maxSum = arr[0];
  let maxSubarray = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSubarray = arr.slice(i, j + 1);
      }
    }
  }

  return [maxSubarray, maxSum];
}

console.log(arrSum([1, -5, 7, 2, 3, 8]));
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
