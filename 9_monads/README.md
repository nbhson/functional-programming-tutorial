# 9. Monads (Monad)

> "Monad is a monoid in the category of endofunctors..." 🤯 Đừng quan tâm câu này vội!

## Định nghĩa dân dã

**Monad** là một **Functor** có thêm khả năng **gỡ bỏ lớp vỏ hộp lồng nhau** (Unwrap nested context).

Nó giải quyết vấn đề: Điều gì xảy ra khi bạn `.map` một hàm mà hàm đó LẠI trả về một cái Hộp mới? Bạn sẽ bị tình trạng `Box(Box(value))` (Hộp trong hộp).

Monad cung cấp method `.flatMap()` (hoặc `chain`, `bind`) để gộp 2 cái hộp lại thành 1.

## Ví dụ dễ hiểu nhất: Promise

`Promise` chính là Monad phổ biến nhất trong JS.

```javascript
// Hàm trả về Promise (trả về Hộp)
const getUser = (id) => fetch(`/api/users/${id}`).then(res => res.json());

// Code ngây thơ (Dùng map/then thường)
const promiseOfPromise = getUser(1).then(user => {
  return getUser(user.bestFriendId); // Trả về Promise nữa!
});
// Kết quả: Promise { Promise { User } } -> Gọi là Nested Promise Hell
```

May mắn thay, Promise tự động làm phẳng (flatten) cho chúng ta:

```javascript
// Monad to the rescue!
getUser(1)
  .then(user => getUser(user.bestFriendId)) // Trả về Promise
  .then(bestFriend => {
    // Ở đây ta nhận được object bestFriend luôn, KHÔNG PHẢI là Promise nữa!
    console.log(bestFriend);
  });
```

Đó chính là sức mạnh của **Monad**: Chuỗi các thao tác bất đồng bộ (async execution) được viết phẳng lỳ như đồng bộ.

## Ứng dụng khác: Either Monad

Dùng để xử lý lỗi (Error Handling) mà không cần `try/catch`.

*   **Left Box:** Chứa lỗi (Error value).
*   **Right Box:** Chứa giá trị đúng (Success value).

Khi bạn `.map`:
*   Nếu là **Right**: Hàm chạy bình thường.
*   Nếu là **Left**: Hàm bị bỏ qua, lỗi được truyền thẳng xuống cuối.

## TypeScript Perspective: Typed Promise

Trong TypeScript, Promise là một Generic `Promise<T>`.
Phương thức `.then()` (tương đương flatMap) cực kỳ thông minh:

```typescript
// getUser trả về Promise chứa User
function getUser(id: number): Promise<User> { ... }

// TS hiểu:
// 1. then đầu tiên nhận User -> trả về Promise<Friend>
// 2. then thứ hai sẽ nhận input là Friend (chứ không phải Promise<Friend>)
getUser(1)
  .then((user: User) => getUser(user.friendId)) 
  .then((friend: Friend) => {
     // TS biết chính xác 'friend' là kiểu Friend
  });
```

Điều này giúp bạn tránh được lỗi kinh điển: Quên `await` hoặc xử lý sai lầm giữa `Promise<T>` và `T`.

> **Tổng kết:** Đừng sợ Monad. Hãy nghĩ về nó như một **Design Pattern** giúp bạn xử lý các tình huống phức tạp (Null check, Error handling, Async task) theo một chuỗi (Chain) mượt mà.
