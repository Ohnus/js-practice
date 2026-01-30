// 1. 묵시적 형 변환: 자바스크립트 엔진이 알아서 형 변환하는 것
let num = 10;
let str = "20";

// 숫자 타입 변수 num이 묵시적으로 String 타입으로 변환
// -> "10" + "20" = "1020"
const result = num + str;
console.log(result);

// 2. 명시적 형 변환: 개발자가 내장함수 등을 이용하여 직접 형 변환하는 것
// 2-1. 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);
console.log(10 + strToNum);
// 2-2. 숫자값이 아닌 문자열일 때(숫자가 앞에 위치)
let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);
let str3 = "12.5개";
let strToNum3 = parseFloat(str3);
console.log(strToNum3);
// 2-3. 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");
