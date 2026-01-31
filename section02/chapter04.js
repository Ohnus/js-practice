// 1. Spread 연산자: '...'
// -> Spread: 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// -> arr2를 [4, 1, 2, 3, 5, 6]으로 만들고 싶다면?
// -> 아래의 방식도 가능하지만 arr1의 변화에 대응을 못함
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]
// -> 그래서 spread 연산자를 이용
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(...arr1);
console.log(arr2);

// -> 객체도 가능
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

// 함수에도 이용(배열만)
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// ------------------------------------------------

// 2. Rest 매개변수: 나머지 매개변수
// -> 매개변수 할당란에서 ...는 Spread 연산자가 아니다.
// Rest 매개변수 앞에는 추가로 받는 것이 가능하지만 뒤로는 불가능
function funcC(one, two, ...rest) {
  console.log(one, two, ...rest, rest, rest[0]);
}
funcC(1, 2, ...arr1);
