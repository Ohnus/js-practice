// 1. 객체 생성
let obj1 = new Object(); // 생성 방법1. 객체 생성자
let obj2 = {}; // 생성 방법2. 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// -> key : value
// -> 프로퍼티 개수 제한 없다.
// -> key는 문자열 또는 숫자만 가능하다.
// -> 띄어쓰기가 필요한 key는 ""로 감싼다.
// -> value에 어떤 자료형이 와도 된다.
let person = {
  name: "Sunho",
  age: 32,
  hobby: "영화 감상",
  job: "BE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법(객체.key)
let name2 = person.name2; // 존재하지 않는 프로퍼티에 접근하면 undefined
console.log(name); // Sunho
console.log(name2); // undefined

let age = person["age"]; // 괄호 표기법(객체["key"])
console.log(age); // 32
let likeCat = person["like cat"];
console.log(likeCat); // true
let num = person[10]; // 숫자형 key는 "" 있어도 없어도 둘 다 가능
console.log(num); // 10

let property = "hobby";
let hobby = person[property]; // 변수에 key값 담아서 변수로 지정 가능
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.nickname = "Onus";
person["favorite food"] = "Pizza";
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "Fullstack Developer";
person["favorite food"] = "Fried Chicken";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.nickname;
delete person["favorite food"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "name" in person; // 프로퍼티가 객체에 존재하느냐 묻는 작업
console.log(result1);
let result2 = "nickname" in person;
console.log(result2);
