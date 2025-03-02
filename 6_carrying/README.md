# Carrying function

## Thế nào gọi là Carrying?

> Currying là một kỹ thuật mà cho phép chuyển đổi một function nhiều tham số thành những function liên tiếp có một tham số.

Và trong kĩ thuật thuật currying này thì cũng áp dụng closure vì chính currying cũng dùng biến trong function cha.

Thay vì truyền vào cho function 1 lúc nhiều argument, chúng ta lại chuyển kiểu viết đó thành 1 function chỉ nhận 1 argument, nhưng bên trong đó chúng ta lòng các function con bên trong, và return về function con này.

```js
function multiply(a, b, c) {
    return a * b * c;
}
multiply(1,2,3); // 6

/* Carryign */
function multiply1(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}

function multiply2(a) {
    return (b, c) => {
      return a * b * c
    }
}


log(multiply1(1)(2)(3)) // 6

log(multiply2(1)(2, 3)) // 6
```

> Nói một cách ngắn gọn, khi cần truyền vào 1 argument ít thay đổi, cố định trong đa số các trường hợp, nghĩ đến carrying.
