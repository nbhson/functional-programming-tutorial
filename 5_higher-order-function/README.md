# Higher Order Function

> Functional Programming là một dạng lập trình mà trong đó bạn có thể truyền các hàm dưới dạng tham số cho các hàm khác và cũng trả về chúng dưới dạng các giá trị.

## First-Class Functions

> Trong JavaScript hoặc bất kỳ ngôn ngữ functional programming nào khác, thì hàm là các đối tượng.

Trong Javascripts hàm là một kiểu đặc biệt của đối tượng. Chúng là các function object (Đối tượng hàm). Ví dụ:

```js
function greeting() {
  console.log("Hello World");
}
// Invoking the function
greeting(); // prints 'Hello World'
```

Để chứng minh hàm là đối tượng trong Javascript, chúng ta có thể làm như sau:

```js
// Chúng ta có thể thêm các thuộc tính đến hàm giống như làm với object
greeting.lang = "English";
// Prints 'English'
console.log(greeting.lang);
```

```js
/** # Gán hàm đến các biến */
const square = function (x) {
  return x * x;
};
const foo = square;

square(5);
foo(6);
```


```js
/** # Truyền các hàm như tham số */
function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}
// prints 'What's up?'
greet("casual", formalGreeting, casualGreeting);


/* VI DU 2*/
const numbers = ['9', '10', '11'].map(parseInt);
console.log(numbers) // [9, NaN, 3]
```
> Trong JavaScript, mọi thứ bạn có thể làm với các loại khác như đối tượng, chuỗi hoặc số, bạn có thể làm với các hàm. Bạn có thể truyền chúng dưới dạng tham số cho các hàm khác (callbacks), gán chúng cho các biến và truyền chúng xung quanh, v.v ... Đây là lý do tại sao các hàm trong JavaScript được gọi là First-Class Functions.

## Higher-Order Functions

> Higher order function là một function mà nhận vào tham số là function hoặc return về một function.

Ví dụ, Array.prototype.map, Array.prototype.filter và Array.prototype.reduce là một số the Higher-Order functions được tích hợp trong ngôn ngữ.
