// 내부 모듈 호출
import mul, { add, sub } from "./math.js";
// 외부 라이브러리 설치 및 모듈 호출
import randomColor from "randomcolor";
// Common JS 모듈 호출 방식
// const { add, sub } = require("./math");

const color = randomColor();
console.log(color);

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(3, 2));

console.log("안녕 Node.js");
