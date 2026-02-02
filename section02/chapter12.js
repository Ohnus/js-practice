// 1. 비동기 - 콜백 함수
// add 함수 밖에서 함수의 결과 값을 이용하고자 할 때 인수로 콜백 함수 전달하여 add 함수에서 사용
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// ex) 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(cooldownedFood, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${cooldownedFood}`;
    callback(freezedFood);
  }, 3000);
}

// 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 넘겨주다 보면 indent(들여쓰기)가 깊어진다.
// 가독성이 안좋아지고 콜백 지옥이 펼쳐진다.
// 이 콜백 지옥을 벗어나게 해주는 Promise(비동기 작업을 도와주는 객체)를 다음 시간에 이용해보자.
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
