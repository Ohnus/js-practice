// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

// null, undefiend, 객체, 배열, 함수 등 어떤 자료형이든 넣을 수 있다.
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);

// 2. 배열 요소 접근: 인덱스로 접근 가능
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1);
console.log(item2);

arrC[0] = "10"; // 수정
console.log(arrC);

arrC[10] = 2026; // 추가
console.log(arrC);

console.log(arrC.length);
