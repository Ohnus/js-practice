// 1. 콜백 함수: 다른 함수에 인수로써 전달된 함수
// ex ---------------------------------------------------------
// -> 아래처럼 인수가 된 sub 함수는 매개변수 value에 저장된다.
// -> main 함수 내에서 매개변수 value를 통해 함수 호출을 할 수 있다.
// function main(value) {
//   value();
// }

// function sub() {
//   console.log("sub");
// }

// main(sub); // 여기서 sub 함수는 인수가 된다. = 콜백 함수
// ------------------------------------------------------------
function main(value) {
  console.log(value);
  console.log("Start");
  value();
  console.log("End");
}

main(() => {
  console.log("I am sub.");
});

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
