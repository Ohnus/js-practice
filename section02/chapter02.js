// 1. 단락 평가
// -> 첫 번째 피연산자만으로 연산이 확정 된다면, 두 번째 피연산자는 무시
// -> &&는 앞 피연산자가 F면 뒤 무시, T면 뒤 리턴
// -> ||는 앞 피연산자가 T면 뒤 무시, F면 뒤 리턴
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// 아래 두 함수의 console.log가 모두 출력될 것 같지만 False만 출력
// False만으로 이미 연산 확정(F and T / F and F 모두 F이기 때문)
console.log(returnFalse() && returnTrue()); // false
console.log("- - - - -");

// 아래 두 함수 모두 출력
// True만으로는 연산 미확정(T and T = T / T and F = F 이기 때문에)
console.log(returnTrue() && returnFalse()); // false
console.log("- - - - -");

// 아래 두 함수 모두 출력
// F or F = F / F or T = T 이기 때문
console.log(returnFalse() || returnTrue()); // true
console.log("- - - - -");

// True 콘솔만 출력
// T or F / T or T 모두 T이기 때문
console.log(returnTrue() || returnFalse());
console.log("- - - - -");

// 2. Truthy, Falsy한 값으로도 단락 평가가 가능하다.
function returnFalthy() {
  console.log("False 함수");
  return undefined;
}

function returnTruthy() {
  console.log("True 함수");
  return 10;
}

console.log(returnFalthy() && returnTruthy());
console.log("- - - - -");
console.log(returnTruthy() && returnFalthy());
console.log("- - - - -");
console.log(returnFalthy() || returnTruthy());
console.log("- - - - -");
console.log(returnTruthy() || returnFalthy());
console.log("- - - - -");

// 3. 단락 평가 활용 사례
function printName(person) {
  // if (!person) {
  //   console.log("person에 값이 없음");
  //   return;
  // }
  // console.log(person.name);

  // 1단계 활용: 위의 if문 대신에 단락 평가 활용
  console.log(person && person.name);

  // 2단계 활용
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

// printName();
printName({ name: "Sunho" });

// T || T / T && T
// -> T || T : 첫 번째 값 리턴
// -> T && T : 두 번째 값 리턴
function t1() {
  return 1;
}
function t2() {
  return 2;
}
console.log(t1() || t2());
console.log(t1() && t2());
