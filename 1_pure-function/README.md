# Pure functions

> Chương trình của bạn chứa các hàm không nhất thiết có nghĩa là bạn đang lập trình hàm (functional programming).

Lập trình hàm phân biệt giữa các hàm pure và impure. Nó khuyến khích bạn viết các hàm pure. Một hàm pure phải thỏa mãn cả hai thuộc tính sau:

- `Referential transparency`(Tính minh bạch tham chiếu): Hàm không thể phụ thuộc vào bất kỳ trạng thái có thể thay đổi nào (như không được phụ thuộc vào các biến hoặc các function bên ngoài), **Nó chỉ phụ thuộc vào các tham số đầu vào của nó.** và không được làm thay đổi dữ liệu.

- `Side-effect free` (Không có hiệu ứng phụ): Các hiệu ứng phụ này là bất kì những tương tác nào tới bên ngoài function. Đó có thể là bất cứ điều gì từ việc thay đổi một biến tồn tại bên ngoài hàm, hay gọi một function khác từ bên trong một function.

> Note: Nếu một hàm thuần khiết gọi một hàm thuần khiết thì đây không phải là hiệu ứng phụ và hàm gọi vẫn là thuần khiết.

Các hiệu ứng phụ bao gồm:

- Request HTTP
- Thay đổi dữ liệu
- In ra màn hình hoặc console (console.log)
- Truy vấn / Thao tác DOM (element.addEventListener)
- Lấy giá trị ngẫu nhiên (Math.random)
- Lấy thời gian hiện tại (Date.now)

Hãy minh họa bằng một vài ví dụ. Đầu tiên, hàm `priceAfterTax` là một ví dụ về một Pure functions. Nó luôn trả về cùng một đầu ra cho cùng một đầu vào và không gây ra hiệu ứng phụ.

```js
function priceAfterTax(productPrice) {
  return productPrice * 0.2 + productPrice;
}
```

Hàm trên thỏa mãn cả hai điều kiện của một hàm thuần khiết như đã nêu ở trên. Hàm này ko phụ thuộc vào bất cứ input nào khác ngoài các tham số được truyền vào, và nó cũng không hề thay đổi các dữ liệu khác cũng như là các hiệu ứng phụ.

Nếu bạn chạy hàm này với cùng một tham số cả trăm lần thì nó vẫn sẽ luôn luôn trả về cùng một kết quả.

Một ví dụ khác nhưng vi phạm nguyên tắc của pure function:

```js
let heightRequirement = 46;

// Impure because nó dựa trên một biến có thể thay đổi (có thể chuyển nhượng lại).
function canRide(height) {
  return height >= heightRequirement;
}

// Impure because nó gây ra hiệu ứng phụ bằng cách đăng nhập vào bảng điều khiển.
function multiply(a, b) {
  console.log("Arguments: ", a, b);
  return a * b;
}
```

Có một số lợi ích đối với các chức năng thuần túy:

- Chúng dễ dàng lập luận và gỡ lỗi hơn vì chúng không phụ thuộc vào trạng thái có thể thay đổi.

- Giá trị trả về có thể được lưu vào bộ nhớ đệm hoặc "ghi nhớ" để tránh tính toán lại trong tương lai.

- Chúng dễ kiểm tra hơn vì không có phụ thuộc nào (chẳng hạn như ghi nhật ký, Ajax, cơ sở dữ liệu, v.v.) cần phải được mock.
