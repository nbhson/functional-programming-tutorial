
# Immutability

> Immutability tạm dịch là bất biến. Trong Functional Programming (FP), chúng ta cần cố gắng biến đổi dữ liệu của mình càng ít càng tốt.

- Immutable có nghĩa là không thể thay đổi.
- Sau khi khởi tạo, bạn sẽ không bao giờ thay đổi nó nữa.
- Không thay đổi các phần tử trong một mảng và không thay đổi các thuộc tính trong một đối tượng.
- **Nếu muốn sửa gì đó, thì clone nó ra**

```js
const a = 1;
```

Biến a không bao giờ được phép thay đổi. Nó không bao giờ được có giá trị gì khác 1. Trong ví dụ này, mình đang sử dụng const, vì vậy mình không thể thay đổi nó mà không bị báo lỗi. 
Tuy nhiên, nếu giá trị của biến là mảng thì bạn vẫn có thể push hoặc pop các phần tử khỏi mảng ngay cả khi chúng được khai báo bằng const chính vì vậy bạn cũng không nên khai báo kiểu này trong Functional Programming.

Lý do mình nói rằng chúng ta nên biến đổi dữ liệu của mình càng ít càng tốt là vì chương trình của chúng ta vẫn cần phải hoạt động. Nếu dữ liệu không bao giờ biến đổi thì tức là sẽ chẳng bao giờ có gì xảy ra và chương trình cũng sẽ trở nên vô nghĩa. Tuy nhiên, sự khác biệt giữa FP và "lập trình bình thường" là sự biến đổi data xảy ra một cách rất có kiểm soát. Ví dụ, tất cả các biến đổi sẽ thường được xảy ra vào tận cuối chương trình của chúng ta. 

Vậy, tại sao chúng ta lại phải cố gắng giữ sự bất biến? Có nhiều lý do, nhưng mình sẽ đề cập đến lý do mà mình cho là quan trọng số một: sự ổn định. Gỉa sử nếu bạn biết rằng biến của bạn không bao giờ bị thay đổi, bạn biết rằng bạn có thể tin tưởng rằng dữ liệu luôn có ở đó và bạn luôn được đảm bảo rằng nó có giá trị mà bạn mong đợi, thì khi đó, code của bạn sẽ ít có nguy cơ ẩn chứa các lỗi không mong muốn.

Mình hiểu các bạn sẽ cảm thấy hoài nghi ngay lúc này: "Tôi sẽ làm thế nào để chương trình của mình chạy được?", "Làm cách nào để thêm một phần tử vào mảng của tôi?"...