# Functional Progaming

## Functional progaming không phải là:

Trước khi chúng ta nói về Functional progaming là gì, chúng ta hãy nói về nó không phải là gì. Trên thực tế, hãy nói về tất cả các cấu trúc ngôn ngữ mà bạn nên loại bỏ (tạm biệt, những người bạn cũ):

- Loops
  + while
  + do...while
  + for
  + for...of
  + for...in
- Variable declarations with `var` or `let`
- Void functions
- Object mutation (for example: o.x = 5;)
- Array mutator methods
  + copyWithin
  + fill
  + pop
  + push
  + reverse
  + shift
  + sort
  + splice
  + unshift
- Map mutator methods
  + clear
  + delete
  + set
- Set mutator methods
  + add
  + clear
  + delete

`Làm thế nào bạn có thể lập trình mà không có các tính năng đó? Đó chính xác là những gì chúng ta sẽ khám phá trong một vài phần tiếp theo.`

## Functional Progaming là gì

- Functional programming là một dạng mô hình lập trình (FP – Gọi là lập trình hàm), cũng giống như lập trình tuần tự hay lập trình hướng đối tượng (OOP). 
- Nó có nhiều lợi ích như : các khối xử lý độc lập dễ tái sử dụng, thuận lợi cho việc thay đổi logic hoặc tìm lỗi chương trình.

> Functional programming là một phương pháp lập trình dựa trên các hàm toán học (function), tránh việc thay đổi giá trị của dữ liệu. 

## Tại sao nên dùng Function Progaming

Việc hiểu rõ được Functional Programming thường là một trong những bước phát triển quan trọng nhất trong sự nghiệp lập trình của bạn, và đôi khi cũng là bước khó khăn nhất.

- Nguyên tắc thứ nhất là: cái nào đã khai báo một lần thì mãi mãi như vậy, không bao giờ thay đổi nữa. Các biến hoặc đối tượng trong kịch bản Functional Programming nếu có thì phải `immutable`.

- Nguyên tắc thứ hai trong Functional Programming: tất cả các hàm đều phải là pure function, sẽ không bị side effect (kết quả trả về bị ảnh hưởng bởi tác nhân bên ngoài hàm). Nó sẽ không đọc, nhận bất kỳ cái gì nào ở bên ngoài hàm hoặc ghi bất kỳ cái gì ở bên ngoài hàm (không thay đổi tham số đầu vào).
- Nó làm cho code dễ đọc dễ hiểu hơn.

## Những hạn chế của Function Progaming

- Để viết một Pure Function đứng một mình thì đơn giản, nhưng khi kết hợp chúng vào một chương trình lớn thì rất khó: Tất cả các hàm phải tuân theo pattern giống nhau, nếu không lỗi rất dễ xảy ra.

- FP đi kèm với các khái niệm về toán học nâng cao: đây sẽ là lý do gây nản lòng khi bạn học nó.

- Bắt đầu với functional programming, chúng ta phải làm quen và nắm vững recursive (đệ quy), thay vì for, while sử dụng phổ biếng trong OOP.

<https://kipalog.com/posts/Functional-Programming---Phan-1---Con-duong-sang>
