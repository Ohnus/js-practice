// 1. 상수 객체: 상수에 저장해 놓은 객체
// -> 상수에 할당된 값 자체를 바꾸는 것은 불가능
// -> 상수에 보관된 객체의 프로퍼티 조작은 가능
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { age: 1 }; // 상수이기 때문에 같은 상수명으로 초기화 불가능

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
console.log(animal);

// 2. 메서드: 값이 함수인 프로퍼티를 말함
// -> 객체의 동작을 정의하는 데 사용
const person = {
  name: "Sunho",
  // 메서드
  sayHi: () => {
    console.log("Hi!");
  },
  // 메서드 선언
  sayBye() {
    console.log("Bye!");
  },
};

person.sayHi(); // 호출 가능
person["sayBye"](); // 객체["메서드명"]();
