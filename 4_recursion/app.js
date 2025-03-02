// Loop
function iterativeFactorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

// Recursion
function recursiveFactorial(n) {
  // Base case -- stop the recursion
  if (n === 0) {
    return 1; // 0! is defined to be 1.
  }
  return n * recursiveFactorial(n - 1);
}

// Tinh tong array
let arr = [1,2,3,4,5];

function tinhtong(arr, tong, i) {
  if (i === arr.length) {
    return tong
  }

  tong += arr[i];
  i++;

  return tinhtong(arr, tong, i)
}

let tong = tinhtong(arr, 0, 0);
console.log(tong);