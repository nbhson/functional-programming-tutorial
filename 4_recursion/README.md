# Recursion

Giả sử rằng bạn muốn triển khai một hàm tính giai thừa của một số. Hãy nhớ lại định nghĩa của giai thừa từ toán học: `n! = n * (n-1) * (n-2) * ... * 1.`


- Cách viêt thông thường
```js
function iterativeFactorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
```

- Nhưng chúng ta không được dùng những vòng lập trong functional programing, nên các thay thế là dùng đệ quy:
```js
function recursiveFactorial(n) {
  // Base case -- stop the recursion
  if (n === 0) {
    return 1; // 0! is defined to be 1.
  }
  return n * recursiveFactorial(n - 1);
}

// hoặc 

function factorial(n, product = 1) {
  if (n === 0) {
    return product;
  }
  return factorial(n - 1, product * n)
}
```