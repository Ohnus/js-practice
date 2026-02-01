// 동기적으로 실행한다면?
// 아래 콘솔이 순서대로 실행
console.log(1); // 첫 번째
console.log(2); // 두 번째

// 비동기적으로 실행한다면?
console.log(3); // 첫 번째

setTimeout(() => {
  // WebAPIs로 타이머 + 콜백 함수 전달
  console.log(4); // 타이머 끝난 후 콜백함수!
}, 3000);

console.log(5); // 두 번째
