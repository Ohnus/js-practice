// 1. 대입 연산자: =
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; // 모듈러 연산
let num6 = 1 + 2 * 10; // 1 + (2*10)
let num7 = (1 + 2) * 10;

// 3. 복합 대입 연산자: 산술 + 대입
let num8 = 10;
num8 += 20; // num8 = num8 + 20;
num8 -= 20; // num8 = num8 - 20;
num8 *= 20; // num8 = num8 * 20;
num8 /= 20; // num8 = num8 / 20;
num8 %= 20; // num8 = num8 % 20;

// 4. 증감 연산자(++, --)
// 후위 연산: 변수 뒤에 증감 연산자 붙일 시 해당 변수가 ;로 끝나야 적용됨
let num9 = 10;
console.log(num9++); // 10
console.log(num9); // 11
// 전위 연산: 변수 앞에 증감 연산자 붙일 시 바로 적용됨
let num10 = 10;
console.log(--num10); // 9
console.log(num10); // 9

// 5. 논리 연산자: boolean 타입 다룰 때 사용
let or = true || false; // 둘 중 하나만 만족하면 참
let and = true && false; // 둘 다 만족해야 참
let not = !true; // 반전
console.log(or, and, not); // true false false

// 6. 비교 연산자
// =을 3개 쓰는 이유: 2개만 쓰면 값의 자료형까지 같은 지는 비교 불가능하다.
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
let comp3 = 1 == "1"; // 자료형 비교 불가능
console.log(comp1, comp2, comp3); // false true
let comp4 = 2 > 1;
let comp5 = 2 < 1;
console.log(comp4, comp5); // true false
let comp6 = 2 >= 2;
let comp7 = 2 <= 2;
console.log(comp6, comp7); // true true
