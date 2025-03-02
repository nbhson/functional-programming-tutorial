function greeting() {
  console.log("Hello World");
}
greeting();
greeting.lang = "English"; // :))))
console.log(greeting.lang);

/** # Gán hàm đến các biến */
const square = function (x) {
  return x * x;
};
const foo = square;

square(5);
foo(6);

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


const numbers = ['9', '10', '11'].map(parseInt);
console.log(numbers) // [9, NaN, 3] :))