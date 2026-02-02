// 3. 5가지 배열 변형 메서드

// 3-1. filter
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "Sunho", hobby: "영화 감상" },
  { name: "Gildong", hobby: "테니스" },
  { name: "Odoong", hobby: "테니스" },
];

const tennisPeople = arr1.filter(
  (item) => item.hobby === "테니스"
);
console.log(tennisPeople);

// 3-2. map
// -> 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// -> forEach + push 느낌?
let arr2 = [1, 2, 3];

const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1); // [2, 4, 6]

// arr1에서 name 프로퍼티의 값만 추출해보자.
let names = arr1.map((item) => item.name);
console.log(names); // ['Sunho', 'Gildong', 'Odoong']

// 3-3. sort
// -> 배열을 사전 순으로 정렬하는 메서드
// -> 숫자의 대소 비교가 아니다.
let arr3 = ["b", "a", "c"];
let arr4 = [10, 3, 5];

arr3.sort();
console.log(arr3); // ['a', 'b', 'c']

arr4.sort();
console.log(arr4); // [10, 3, 5]

// 오름차순 예시
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라: 양수 반환
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라: 음수 반환
    return -1;
  } else {
    // 두 수가 같다면 자리를 바꾸지 마라: 0
    return 0;
  }
});
console.log(arr4); // [3, 5, 10]

// 내림차순 예시
arr4.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr4); // [10, 5, 3]

// 3-4. toSorted
// -> sort와 비슷하지만, 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];

const sorted = arr5.toSorted();
console.log(arr5); // ['c', 'a', 'b']
console.log(sorted); // ['a', 'b', 'c']

let numArr5 = [10, 3, 5];
const numSorted = numArr5.toSorted((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(numSorted);

// 3-5 join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["Hi", "I'm", "Sunho"];

const joined = arr6.join();
console.log(joined); // Hi, I'm, Sunho

// 문자와 문자 사이에 있는 콤마는 구분자(Separator)로 변경 가능
let arr7 = [...arr6];
const joined2 = arr7.join(" ");
console.log(joined2);
