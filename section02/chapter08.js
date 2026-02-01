// 2. 5가지 요소 순회 및 탐색 메서드

// 2-1. forEach
// -> 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// forEach 내부에 콜백함수 (item, idx, arr) => {}
// item: 현재 요소, idx: 현재 반복 카운트, arr: 배열
let arr1 = [1, 2, 3];

arr1.forEach((item, idx, arr) => {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item, idx) => {
  // doubledArr[idx] = item * 2;
  doubledArr.push(item * 2);
});
console.log(doubledArr);

// 2-2. includes
// -> 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude1 = arr2.includes(3);
let isInclude2 = arr2.includes(4);
console.log(isInclude1); // true
console.log(isInclude2); // false

// 2-3. indexOf
// -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 2];
let index1 = arr3.indexOf(2);
let index2 = arr3.indexOf(3);
console.log(index1); // 1 -> 같은 값이 있다면 첫번째 위치
console.log(index2); // -1 -> 없으면 -1

// 2-4. findIndex
// -> 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1, 2, 3];

// if문 없애고 더 간결하게.. 'item % 2 !== 0'은 연산식이기 때문에 true 또는 false 반환
const findedIndex1 = arr4.findIndex(
  (item) => item % 2 !== 0
);
const findedIndex2 = arr4.findIndex((item) => item === 999);
// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true;
// });
console.log("findedIndex1:" + findedIndex1); // 0
console.log("findedIndex2:" + findedIndex2); // -1

// -> 여기서 드는 의문: indexOf가 findIndex보다 더 간단하지 않나?
// -> indexOf는 원시 타입만 찾을 수 있음. 객체 타입은 불가능함
// -> indexOf는 얕은 비교(===)로 동작, 객체는 참조 값을 기준으로 비교가 이루어진다.
let objectArr = [{ name: "Sunho" }, { name: "Gildong" }];

// indexOf
console.log(objectArr.indexOf({ name: "Sunho" })); // -1

// findIndex
console.log(
  objectArr.findIndex((item) => item.name === "Sunho")
); // 0

// 2-5. find
// -> 모든 요소를 순회하면서 콜백함수를 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "Sunho" }, { name: "Gildong" }];

const finded = arr5.find((item) => item.name === "Sunho");
console.log(finded); // {name: 'Sunho'}
