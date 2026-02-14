# 4. Higher-Order Functions (HOF)

Nếu Pure Function là viên gạch, thì **Higher-Order Function** là vữa hồ kết dính chúng lại với nhau.

## Định nghĩa

Một hàm được gọi là Higher-Order Function nếu nó thỏa mãn ít nhất 1 trong 2 điều kiện:
1.  **Nhận hàm khác làm tham số** (Callback).
2.  **Trả về một hàm khác** (Closure).

## Tại sao cần HOF?

### 1. Abstraction (Trừu tượng hóa)
HOF giúp che giấu các chi tiết thực thi (implementation details) lặp đi lặp lại (như vòng lặp `for`), chỉ để lộ ra logic nghiệp vụ (business logic).

### 2. Composition (Kết hợp)
HOF cho phép lắp ghép các hàm nhỏ thành hàm lớn (Concept sẽ học ở bài sau).

## Các HOF "huyền thoại" của Array

Đây là bộ 3 quyền lực nhất thay thế cho vòng lặp `for`.

### 1. Map (Biến hình)
Biến đổi từng phần tử của mảng theo một công thức nào đó.
*   Input: Mảng N phần tử.
*   Output: Mảng mới N phần tử đã biến đổi.

```javascript
const numbers = [1, 2, 3];
// Transform: [1, 2, 3] -> [2, 4, 6]
const doubled = numbers.map(n => n * 2);
```

### 2. Filter (Sàng lọc)
Chọn ra các phần tử thỏa mãn điều kiện.
*   Input: Mảng N phần tử.
*   Output: Mảng mới <= N phần tử.

```javascript
// Filter: Chỉ lấy số chẵn
const evens = numbers.filter(n => n % 2 === 0);
```

### 3. Reduce (Gộp lại)
"Nấu chảy" cả mảng thành một giá trị duy nhất (số, string, object, array...).

```javascript
// Aggregate: Tính tổng
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

### 4. Custom HOF (Tự viết HOF)

Ví dụ: Bạn muốn đo thời gian chạy của bất kỳ hàm nào. Thay vì sửa từng hàm để thêm `console.time`, ta viết một HOF `withTiming`.

```javascript
// HOF nhận vào `fn` và trả về một hàm mới đã được "độ" thêm tính năng đo giờ
const withTiming = (fn) => {
  return (...args) => {
    console.time('Timer');
    const result = fn(...args); // Gọi hàm gốc
    console.timeEnd('Timer');
    return result;
  };
};

const heavyCalc = (x) => x * x; // Hàm gốc ngây thơ
const measuredCalc = withTiming(heavyCalc); // Hàm đã được "độ"

measuredCalc(10); 
// Output:
// Timer: 0.05ms
// 100
```

## TypeScript Perspective: Generics

Sức mạnh thực sự của HOF trong TypeScript đến từ **Generics**. Nó cho phép bạn viết một hàm HOF dùng được cho MỌI kiểu dữ liệu mà vẫn giữ tính an toàn (Type Safety).

Ví dụ: Tự viết lại hàm `map`.

```typescript
/**
 * Generic Map Function
 * @param arr Mảng đầu vào kiểu T
 * @param fn Hàm biến đổi từ T sang U
 * @returns Mảng kết quả kiểu U
 */
function myMap<T, U>(arr: T[], fn: (item: T) => U): U[] {
  const result: U[] = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
}

// Sử dụng:
const words = ["a", "b", "c"];
// TS tự hiểu T là string, U là number (do words và length trả về number)
const lengths = myMap(words, (w) => w.length); // [1, 1, 1]

// Nếu bạn viết sai logic hàm fn, TS sẽ báo lỗi ngay
// myMap([1,2], (n) => n.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'.
```
