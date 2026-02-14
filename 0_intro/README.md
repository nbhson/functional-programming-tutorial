# 0. Introduction to Functional Programming

Chào mừng bạn đến với chuỗi bài học về **Functional Programming (FP)**.

## Tại sao lại là Functional Programming?

Trong thế giới phần mềm ngày càng phức tạp, việc kiểm soát **trạng thái (state)** và **tác dụng phụ (side effects)** là chìa khóa để giữ cho mã nguồn dễ bảo trì. FP không chỉ là một tập hợp các quy tắc, mà là một **tư duy (mindset)** giúp bạn viết code:
*   **Rõ ràng hơn (Cleaner):** Code mô tả *cái gì* (What) thay vì *làm thế nào* (How).
*   **An toàn hơn (Safer):** Giảm thiểu lỗi do thay đổi dữ liệu ngầm định.
*   **Dễ kiểm thử hơn (Testable):** Các hàm độc lập, không phụ thuộc môi trường.

## Declarative vs Imperative

Sự khác biệt lớn nhất nằm ở tư duy:

### Imperative (Mệnh lệnh - Cách làm truyền thống)
Bạn ra lệnh cho máy tính từng bước một: "Lấy cái này, cộng thêm 1, rồi lưu vào kia, lặp lại 10 lần".

```javascript
// Tính tổng mảng số chẵn
const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
console.log(sum); // 12
```

### Declarative (Khai báo - Phong cách FP)
Bạn mô tả mối quan hệ giữa dữ liệu: "Tôi muốn tổng của các số chẵn trong danh sách này".

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers
  .filter(n => n % 2 === 0) // Lọc số chẵn
  .reduce((acc, n) => acc + n, 0); // Cộng dồn

console.log(sum); // 12
```

## Chuẩn bị tâm thế
Học FP giống như học lái xe ngược chiều vậy. Ban đầu sẽ rất khó chịu vì bạn không được dùng những công cụ quen thuộc (`for`, `let`, `push`...). Nhưng khi đã quen, bạn sẽ thấy nó mang lại sự tự do và an tâm tuyệt đối.

Hãy bắt đầu hành trình từ những khái niệm cốt lõi nhất!
