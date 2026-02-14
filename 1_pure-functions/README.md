# 1. Pure Functions (Hàm Thuần Khiết)

Đây là khái niệm quan trọng nhất, là viên gạch nền móng của Functional Programming.

## Định nghĩa
Một hàm được gọi là **Pure Function** khi thỏa mãn 2 điều kiện:
1.  **Determinism (Tính xác định):** Với cùng một đầu vào (Input), LUÔN trả về cùng một đầu ra (Output).
2.  **No Side Effects (Không tác dụng phụ):** Không làm thay đổi bất kỳ thứ gì bên ngoài phạm vi của hàm.

## Ví dụ minh họa

### ❌ Impure Function (Không thuần khiết)

```javascript
let taxRate = 0.1; // Biến ngoại lai

function calculateTax(amount) {
  return amount * taxRate; // Phụ thuộc vào biến bên ngoài
}

calculateTax(100); // 10
taxRate = 0.2;     // Ai đó đổi taxRate bên ngoài
calculateTax(100); // 20 -> Cùng input 100 nhưng output khác nhau!
```

**Tại sao tệ?** Bạn không thể tin tưởng hàm này. Kết quả của nó phụ thuộc vào một thứ mà nó không kiểm soát (`taxRate`). Nếu `taxRate` bị thay đổi ở đâu đó (bởi hàm khác, user input...), hàm này sẽ chạy sai mà bạn không hiểu tại sao.

### ✅ Pure Function (Thuần khiết)

```javascript
function calculateTax(amount, rate) {
  return amount * rate; // Chỉ phụ thuộc vào tham số truyền vào
}

calculateTax(100, 0.1); // Luôn là 10
calculateTax(100, 0.1); // Luôn là 10, dù chạy 1 tỷ lần
```

## Tại sao cần Pure Functions? (Giá trị cốt lõi)

### 1. Predictability (Dễ đoán)
Khi nhìn vào một Pure Function, bạn biết chính xác nó làm gì chỉ bằng cách nhìn vào input và output. Không có ma thuật ngầm, không có biến ẩn.

### 2. Testability (Dễ test)
Test Pure Function cực sướng. Không cần mock database, không cần fake API, không cần setup state phức tạp.
```javascript
expect(calculateTax(100, 0.1)).toBe(10); // Xong!
```

### 3. Cacheable (Có thể lưu cache)
Vì input X luôn ra output Y, ta có thể lưu kết quả lại (Memoization) để tối ưu hiệu năng.

```javascript
const memoizedTax = memoize(calculateTax);
memoizedTax(100, 0.1); // Tính toán
memoizedTax(100, 0.1); // Trả về ngay kết quả từ cache, không cần tính lại
```

### 4. Concurrency (An toàn đa luồng)
Pure Function không đụng vào biến global, nên bạn có thể chạy nó trên 100 luồng cùng lúc mà không sợ xung đột dữ liệu (Race Condition).

> **Tóm lại:** Pure Function mang lại sự **AN TÂM**. Bạn gọi nó và biết chắc chắn nó sẽ trả về cái gì và không phá hỏng cái gì khác.
