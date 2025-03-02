# Function Composition

Đây là khái niệm Toán học mà tiếng Việt ta gọi là "hàm hợp", hay "hàm phức hợp". Mọi thứ trong Functional Programming đều có nguồn gốc Toán học.

> Function Composition là sự phối hợp, liên kết nhiều hàm lại với nhau, thành một hàm lớn, nhiều chức năng hơn.

Có 2 kỹ thuật căn bản trong Function Composition là compose và pipe:

## Compose

Tình huống: từ khúc gỗ làm ra một cái thớt

- Các ty sỹ nhập môn tu luyện:
  + cưa(): nhận vào khúc gỗ, trả về từng khoanh tròn
  + sấy(): nhận khoanh gỗ tươi, trả về khoanh gỗ khô
  + bào(): nhận vào khoanh gỗ, trả về khoanh gỗ bằng phẳng
  + khoan(): nhận vào khoanh gỗ, trả về khoanh gỗ có 2 lỗ (để gắn quai treo/móc lên cho gọn)
  + chà(): nhận vào khoanh gỗ, trả về khoanh gỗ trơn láng (dùng giấy nhám, miền ngoài gọi giấy giáp, để đánh cho nhẵn bề mặt)
  + móc(): nhận thớt không quai, trả về thớt có quai

```js
const cưa = (x) => {
  return `${x} đã cưa`;
};

const sấy = (x) => {
  return `${x} đã sấy`;
};

const bào = (x) => {
  return `${x} đã bào`;
};

const khoan = (x) => {
  return `${x} đã khoan`;
};

const chà = (x) => {
  return `${x} đã chà`;
};

const móc = (x) => {
  return `${x} đã gắn móc`;
};

var thớt = cưa('khúc gỗ');
thớt = sấy(thớt);
thớt = bào(thớt);
thớt = khoan(thớt);
thớt = chà(thớt);
thớt = móc(thớt);

console.log(thớt);
// => khúc gỗ đã cưa đã sấy đã bào đã khoan đã chà đã gắn móc
```

- Nữa bước đại đạo:
```js
var thớt = móc(chà(khoan(bào(sấy(cưa('khúc gỗ'))))));
console.log(thớt);
// => khúc gỗ đã cưa đã sấy đã bào đã khoan đã chà đã gắn móc
```
> Đây chính là Toán học cơ bản. Với y = f(g(x)), ta tính g(x) trước, được bao nhiêu truyền vào f() là ra kết quả. Việc tính toán đi từ ngoặc trong cùng ra ngoài, mắt thường nhìn thấy là từ phải sang trái, từ g đến f.

- Đại đạo cường giả (ES6 - compose):
```js
const compose = (...fns) => {
  return fns.reduce((f, g) => (x) => f(g(x)));
};
```

- Mở rộng sự kết hợp
```js
const nhan = (x) => {
  return `${x} đã dán nhãn`;
};

const lam_thot_de_ban = compose(nhan, moc, cha, khoan, bao, say, cua); // c1
// const lam_thot_de_ban = compose(nhãn, quăng_cho_tao_cái_thớt); // c2

const thot_ban = lam_thot_de_ban('khúc gỗ');
console.log(thot_ban);
```

Lập trình như vậy phải nói là vô cùng tao nhã, lịch thiệp! Đôi khi tôi cảm thấy phong cách lập trình Functional Programming có sự thanh tịnh đầy chất quý tộc, vừa bình dân lại vừa hàn lâm, đẹp đến mức khó hiểu!

> Nếu dùng OOP, có thể chúng ta còn đang loay hoay giữa một đống class Máy Cưa, Máy Bào, Máy Khoan... Hoặc 1 class Máy Làm Thớt khổng lồ có đủ methods cưa, bào, khoan... Rồi còn một mớ properties mà ta phải cân nhắc xem cái nào public, cái nào private. Rồi phải tạo instance, thừa kế qua lại mấy vòng may ra mới làm được cái thớt. Muốn thêm dòng sản phẩm lại càng khó khăn. Phải tạo class Thớt_nhà_dùng, extend ra Thớt_để_bán, Thớt_để_bán_loại_2, phiền phức không sao kể xiết!

> Functional Programming thì chỉ cần mấy hàm đơn giản, rời rạc, dùng compose lắp ráp lại như lắp ráp dây chuyền công nghệ là chế được các kiểu thớt.

Function Composition tựa như một nhà máy hiện đại, mỗi chi tiết linh kiện được xử lý bằng một robot chuyên trách, kết hợp lại với nhau một cách khoa học để tạo ra sản phẩm hoàn thiện.

## Pipe

Một biến thể của compose là pipe, vận hành theo chiều ngược lại. Ta có thể implement bằng cách đảo vị trí f và g thế này:

```js
const pipe = (...fns) => {
  return fns.reduce((f, g) => (x) => g(f(x)));
};
```

Hoặc giữ nguyên code của compose nhưng thay reduce bằng reduceRight:

```js
const pipe = (...fns) => {
  return fns.reduceRight((f, g) => (x) => f(g(x)));
};

const lam_thot_dom = pipe(cưa, bào, nhãn);
const thot_dom = lam_thot_dom('khúc gỗ');
console.log(thot_dom);
// => khúc gỗ đã cưa đã bào đã dán nhãn
```

Dùng pipe có vẻ thuận mắt hơn. Thứ tự các bước cưa, bào... trông khá tự nhiên. Nếu bạn quen với cách suy luận Toán học thì bạn sẽ thích compose. Còn nếu bạn muốn trực quan dễ hiểu thì cứ dùng pipe.

Khi đã thông thạo, bạn hoàn toàn có thể tạo ra compose theo cách của bạn. Ví dụ composeBinary liên kết các hàm từ giữa sang 2 bên thay vì từ đầu này đến đầu kia, composeRandom liên kết các hàm không theo trật tự cố định... Đó là không gian sáng tạo thuộc về riêng bạn.