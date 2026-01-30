// 1. 함수 표현식
// -> 함수를 호출이 아닌 변수에 함수 자체를 문자열로 저장할 수 있다.
// -> 함수가 저장된 변수를 통해 함수 호출 가능
function funcA() {
  console.log("funcA");
}
let varA = funcA;
console.log(varA); // 함수가 문자열로..
varA(); // funcA

// -> 변수에 함수를 바로 담을 수도 있다.
// -> 이 때, 함수는 선언된 것이 아니다. 선언식은 변수에 담긴 상태가 아니어야 한다.
// -> 아래는 값으로서 함수가 생성된 것으로, funcB로 함수 호출 불가능하다.
// -> let varB = function funcB() {
// -> 그래서 자바스크립트에서는 변수에 저장된 함수는 이름이 필요없다.
// -> 아래와 같은 함수 형태를 '익명함수'라 부른다.
// -> 그리고 아래처럼 변수에 함수를 저장하는 형태를 '함수 표현식'이라고 부른다.
// -> '함수 표현식'으로 만든 함수는 호이스팅이 불가능하다.
let varB = function () {
  console.log("funcB");
};
varB(); // funcB

// 2. 화살표 함수
// -> 함수를 더 빠르고 간결하게 생성할 수 있도록 도와주는 자바스크립트 문법
let varC = (value1) => {
  console.log(value1);
  return value1 + 1;
};
console.log(varC(10)); // 11

// -> 만약 함수가 값을 바로 반환하는 형태라면 아래처럼 더 축약 가능
let varD = (value2) => value2 + 2;
console.log(varD(10)); // 12
