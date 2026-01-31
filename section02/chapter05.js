// 1. 원시 타입: 값 자체로써 변수에 저장되고 복사된다.
// -> 불변 값이며 메모리 수정 x
let p1 = 1;
let p2 = p1;
console.log(p1, p2); // 1 1

p2 = 2;
console.log(p1, p2); // 1 2

// 2. 객체 타입: 값에 접근할 수 있는 참조 값을 통해 변수에 저장되고 복사된다.
// -> 가변 값, 메모리 수정 o
// 2-1. 얕은 복사
let o1 = { name: "Sunho" };
let o2 = o1;
console.log(o1.name, o2.name); // Sunho gildong

// 메모리에 새로운 값을 저장하지 않고 원본 값을 바꾼다.
o2.name = "gildong";
console.log(o1.name, o2.name); // gildong gildong

// 2-2. 깊은 복사
let o3 = { name: "Ohnus" };
let o4 = { ...o3 };
console.log(o3.name, o4.name); // Ohnus Ohnus

// spread 연산자를 통해 내부 프로퍼티만 복사하여 새로운 객체를 생성했다.
// 이를 통해 원본 객체가 수정될 위험이 없도록 할 수 있다.
o4.name = "donggil";
console.log(o3.name, o4.name); // Ohnus donggil

// 2-3. 객체 간의 비교는 기본적으로 참조 값을 기준으로 한다.
let o5 = { name: "5doong" };
let o6 = o5;
let o7 = { ...o5 };

// 얕은 비교: 참조 값을 기준으로 한다.
console.log(o5 === o6); // true: 참조 값이 같다.
console.log(o5 === o7); // false: 참조 값이 다르다.

// 깊은 비교: 객체를 문자열로 변환하여 비교한다.
console.log(JSON.stringify(o5) === JSON.stringify(o7)); // true

// 2-4. 배열과 함수도 사실 객체이다.
// -> 배열: 순차 저장, 순회 등 추가 기능이 더해진 객체.
// -> 함수: 호출, 선언 등 추가 기능이 더해진 객체.
