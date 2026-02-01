// 1. 배열 메서드 - 6가지 요소 조작 메서드

// 1-1. push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// -> push 메서드는 최종 배열의 길이를 반환한다.
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
console.log(newLength); // 7

// 1-2. pop
// -> 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(arr2); // [1, 2]
console.log(poppedItem); // 3

// push나 pop은 배열의 맨 뒤에 추가만 하는 작업이라 복잡하지 않음
// shift, unshift는 앞에 요소를 조작하기 위해 기존 요소를 다시 조작해야해서 속도가 비교적 느림

// 1-3. shift
// -> 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(arr3); // [2, 3]
console.log(shiftedItem); // 1

// 1-4. unshift
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// -> push와 마찬가지로 새로운 길이를 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4); // [0, 1, 3, 4]
console.log(newLength2); // 4

// 1-5. slice(이상, 미만)
// -> 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// -> 원본은 그대로.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2); // 지정 지점부터 끝까지
let sliced3 = arr5.slice(-2); // 끝에서부터 n개 까지

console.log(arr5); // [1, 2, 3, 4, 5]
console.log(sliced); // [3, 4, 5]
console.log(sliced2); // [3, 4, 5]
console.log(sliced3); // [4, 5]

// 1-6. concat
// -> 두개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);

console.log(concatedArr); // [1, 2, 3, 4]
