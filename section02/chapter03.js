// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// one=1 / two=2 / three=3로 할당
let [one, two, three] = arr;
console.log(one, two, three); // 1 2 3
// -> 세 번째 변수에는 할당을 하고 싶지 않다면?
// let [one, two] = arr;
// console.log(one, two); // 1 2

// -> 배열보다 초과해서 할당한다면?
// let [one, two, three, four] = arr;
// console.log(one, two, three, four); // 1 2 3 undefined

// -> 원래 배열보다 초과해도 직접 할당 가능
// let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four); // 1 2 3 4

// -------------------------------------------------------

// 2. 객체의 구조 분해 할당
let person = {
  name: "Sunho",
  age: 32,
  hobby: "영화 감상",
};

// -> 점 표기법으로 꺼내는 대신 구조 분해 할당
// -> 할당 받는 변수의 이름 변경 가능(age: myAge)
// -> 직접 추가 할당 가능(extra = "hello")
let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// -> 매개변수로 person 받고, 함수 내에서 객체를 해제하는 대신,
// -> 매개변수 자체를 구조 분해 할당으로 받기(인수로 객체를 넘겼을 경우에만 가능함)
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
