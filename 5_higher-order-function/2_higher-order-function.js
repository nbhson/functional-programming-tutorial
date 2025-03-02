// [VD1: tạo một mảng mới gấp đôi mỗi giá trị của mảng đầu tiên]

// Không Higher-order function
const arr1 = [1, 2, 3];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2); // [2,4,6]

// Có Higher-order function
const hArr1 = [1, 2, 3];
const hArr2 = hArr1.map((item) => item * 2);
console.log(hArr1); // [2,4,6]

// [VD: Chúng ta có một mảng chứa các đối tượng cùng với thuộc tính tên và tuổi. Chúng ta muốn tạo ra một mảng chứa chỉ người trưởng thành (tuổi lớn hơn hoặc bằng 18)]
const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 },
];
// Không Higher-order function
const fullAge = [];
for (let i = 0; i < persons.length; i++) {
  if (persons[i].age >= 18) {
    fullAge.push(persons[i]);
  }
}
console.log(fullAge);

// Higher-order function
const hFullAge = persons.filter((person) => person.age >= 18);
console.log(hFullAge);
