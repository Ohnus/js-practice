// 1. Falsy한 값: 7가지 존재함
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BitInteger (사용 빈도 적음)

if (!f5) {
  console.log("Falsy");
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = {};
let t4 = [];
let t5 = () => {};

if (t4) {
  console.log("Truthy");
}

// 3. 활용 사례
function printName(person) {
  // person의 경우의 수에 따라 아래 처럼 조건식이 복잡해짐
  //  if (person === undefined || person === null) {
  // 아래처럼 not 연산자로 person의 falsy를 따지면 간단해짐
  if (!person) {
    console.log("person의 값이 없음");
    return; // 함수 종료
  }
  console.log(person.name);
}

let person = { name: "Sunho" };
printName(person);
