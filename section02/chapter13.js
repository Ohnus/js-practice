// 1. Promise 객체
// 생성자의 인수로 비동기 작업을 실행할 콜백 함수를 넣어 준다.
// Promise((resolve, reject) => {})
// -> resolve: Promise의 상태를 성공 상태로 변경
// -> reject: Promise의 상태를 실패 상태로 변경

// const promiseResolve = new Promise((resolve, reject) => {
//   // executor: 비동기 작업 실행하는 함수
//   setTimeout(() => {
//     console.log("안녕");
//     resolve("안녕");
//   }, 2000);
// });

// console.log(
//   promiseResolve,
//   setTimeout(() => {
//     console.log(promiseResolve);
//   }, 3000)
// );

// const promiseReject = new Promise((resolve, reject) => {
//   // executor: 비동기 작업 실행하는 함수
//   setTimeout(() => {
//     console.log("안녕");
//     reject("실패한 이유...");
//   }, 4000);
// });

// console.log(
//   promiseReject,
//   setTimeout(() => {
//     console.log(promiseReject);
//   }, 5000)
// );

// 2. Promise 객체 이용하는 방법
// const promisePractice = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = null;

//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 2000);
// });

// promise 객체의 결과 값을 이용하려면?
// 2-1. then 메서드 : promise의 결과가 성공일 때..
// then 메서드에 promise 결과 값을 매개 변수로 받은 콜백 함수를 전달하여 실행
// value: promise 성공 결과 값(resolve)
// promisePractice.then((value) => {
//   console.log(value);
// });

// 2-1. catch 메서드 : promise의 결과가 실패일 때..
// error: promise 실패 결과 값(reject)
// promisePractice.catch((error) => {
//   console.log(error);
// });

// 2-3. Promise Chaning
// -> then, catch 메서드는 promise 객체를 다시 반환한다.
// -> 즉 반환된 promise 객체의 결과 값을 다시 이용할 수 있다.
// promisePractice
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3. 매개 변수 받아서 동적으로 활용
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// promise 객체는 콜백 지옥을 벗어날 수 있도록 새로운 promise 객체를 return하여
// Promise Chaining을 통해 이용할 수 있다.
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result + "a");
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
  });
