// 함수 선언
function greeting() {
  console.log("안녕하세요.");
}

// 함수 호출
// -> 소괄호 함께 호출하자.
console.log("호출 전");
greeting();
console.log("호출 후");

// ex
// (a, b): 전달된 인수를 순서대로 저장하는 변수를 매개변수
// function hello(a, b) {
//   console.log(a + b);
// }

let area1 = getArea(10, 20); // 함수에 전달하는 값들을 인수
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
let area3 = getArea(120, 200);
console.log(area3);

// 호이스팅: 끌어올리다.
// -> 함수 선언을 호출보다 아래에 해도 자바스크립트의 호이스팅으로 위로 끌어올려서 실행
function getArea(width, height) {
  // 중첩 함수: 함수 내부에 또 다른 함수 생성 가능
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값 = 함수 호출의 결과값
}
