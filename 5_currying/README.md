# 5. Currying & Partial Application

Hai kỹ thuật này giúp biến đổi các hàm nhận nhiều tham số thành các hàm nhỏ hơn, dễ tái sử dụng hơn.

## Currying là gì?

**Currying** là kỹ thuật chuyển đổi một hàm nhận `f(a, b, c)` thành chuỗi các hàm `f(a)(b)(c)`.

*   Input: Hàm N tham số.
*   Output: N hàm, mỗi hàm nhận 1 tham số.

```javascript
// Thường:
function add(a, b) {
  return a + b;
}
add(1, 2); // 3

// Curried:
function addCurried(a) {
  return function(b) {
    return a + b;
  };
}
// Hoặc viết tắt (Arrow Function):
const addArrow = a => b => a + b;

addCurried(1)(2); // 3
```

## Partial Application (Áp dụng một phần)

Gần giống Currying, nhưng nó "điền sẵn" (pre-fill) một số tham số cố định và trả về hàm mới nhận các tham số còn lại.

```javascript
// Hàm gốc
const multiply = (a, b) => a * b;

// Partial Application: Tạo hàm "Nhân đôi" bằng cách "ghim" a = 2
const double = multiply.bind(null, 2); 

double(5); // 10
double(10); // 20
```

## Tại sao cần dùng? (Giá trị cốt lõi)

### 1. Reusability (Tái sử dụng) & Configurable
Bạn viết một hàm tổng quát (generic), rồi tạo ra các hàm chuyên biệt (specific) từ nó.

```javascript
// Generic function
const hasPermission = (role) => (user) => user.role === role;

// Specific functions created via Currying
const isAdmin = hasPermission('admin');
const isManager = hasPermission('manager');

// Sử dụng
const users = [{ role: 'admin' }, { role: 'user' }];
const admins = users.filter(isAdmin); // Rất gọn gàng!
```

### 2. Point-free Style
Giúp code gọn hơn bằng cách loại bỏ đối số trung gian.

*   Không dùng Currying: `users.filter(user => isAdmin(user))` (Phải khai báo biến tạm `user`).
*   Dùng Currying: `users.filter(isAdmin)` (Trực tiếp truyền hàm).

## TypeScript Perspective: Typing Curried Functions

Trong TypeScript, việc khai báo kiểu cho hàm currying có thể hơi dài dòng (nhiều mũi tên `=>`), nhưng nó giúp đảm bảo kiểu trả về từng bước là chính xác.

```typescript
// JS: const add = a => b => a + b;

// TS Explicit Typing:
const add = (a: number) => (b: number): number => a + b;

// Generic Curried Function
// Ví dụ hàm lọc mảng: filter(checkFn)(array)
const filter = <T>(predicate: (item: T) => boolean) => (array: T[]): T[] => {
  return array.filter(predicate);
};

// Sử dụng:
const isEven = (n: number) => n % 2 === 0;
const filterEvens = filter(isEven); // TS hiểu đây là hàm nhận number[] trả về number[]

const result = filterEvens([1, 2, 3, 4]); // [2, 4]
```
