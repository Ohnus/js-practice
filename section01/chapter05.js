// 1. Number Type
let num1 = 27; // 정수
let num2 = 1.5; // 실수
let num3 = -20; // 음수

// 사칙연산 가능
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 나머지 = 모듈러 연산

let inf = Infinity; // 양의 무한대
console.log(inf);
let mInf = -Infinity; // 음의 무한대
console.log(mInf);
let nan = NaN; // Not A Number(난): 연산에 실패했을 때 결과값으로 보통 사용
console.log(1 * "hello"); // -> NaN

// 2. String
// 문자열을 만들 때는 작은 따옴표나 큰 따옴표로 감싸야 한다. 감싸지 않으면 변수명 취급.
let myName = "Sunho";
let myLocation = "Seoul";
// JS에서 문자열 덧셈 연산 지원
let introduce = myName + myLocation;
console.log(introduce); // SunhoSeoul
// 백틱을 사용하면 $사인과 {}를 이용하여 변수를 동적으로 문자열에 포함시킬 수 있다.
// = 템플릿 리터럴 문법
let introduceText = `${myName}은/는 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
// 참이나 거짓만을 저장하는 타입
// 현재의 상태를 의미하는 데에 주로 사용
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type
// empty라는 변수에 아무 것도 들어있지 않음을 표현
// 변수를 선언하고 명시적으로 변수에 null을 할당해주어야 함
let empty = null;
console.log(empty);

// 5. Undefined Type
// undefined라는 하나의 변수만을 포함하는 타입
// 변수를 선언하고 아무 것도 할당하지 않았을 때 자동으로 들어가는 값
let none;
console.log(none);
