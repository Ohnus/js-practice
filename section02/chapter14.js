// 1. Async
// -> 동기 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 Promise를 반환하도록 변환해주는 키워드
// 아래를 예시로, 해당 객체를 결과로 반환하는 함수가 아니라
// 해당 객체를 결과 값으로 갖는 Promise를 반환하는 함수로 변환한다.
// 만약, 함수가 애초에 Promise를 반환하는 함수라면 async 키워드는 별다른 작동을 하지 않는다.
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Sunho",
        id: "Ohnus",
      });
    }, 1500);
  });
  //   return {
  //     name: "Sunho",
  //     id: "Ohnus",
  //   };
}

console.log(getData()); // Promise 객체(fulfilled 상태, result: 함수의 return 값인 객체)

// 2. Await
// -> Async 함수(키워드가 붙은 함수) 내부에서만 사용이 가능한 키워드
// -> 비동기 함수가 다 처리되기를 기다리는 역할
// -> 비동기 작업을 동기 작업처럼 간결한 코드로..
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
