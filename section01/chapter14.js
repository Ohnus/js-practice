// 스코프(Scope)
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 함수 선언식은 함수 내에서 지역 스코프, 밖에서 호출 불가능
}
funcA();
// console.log(b); // 접근 불가능

if (true) {
  let c = 1; // 블록 내에 있기 때문에 지역스코프
  function funcC() {} // if, for문 내에 있는 함수 선언식은 지역 x
}

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
  function funcD() {}
}
