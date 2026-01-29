// 1. 변수
let age; // 변수 선언 및 초기화
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. '$, _' 제외한 기호는 사용할 수 없다.
let $_name;
// let #name; 불가능

// 3-2. 숫자로 시작할 수 없다.
let name1;
let na2me;
let _2name;
// let 2name; 불가능

// 3-3. 예약어를 사용할 수 없다.
// 예약어란 js가 이미 사용하기로 약속한 단어들.. ex) let, const, if 등
// let if; 불가능

// 4. 변수 명명 가이드
// 변수명은 이해가 가능한 이름으로 명명한다.
// let a = 1; 지양
// let b = 1; 지양
// let c = a - b; 지양
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
