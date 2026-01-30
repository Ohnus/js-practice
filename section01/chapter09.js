// 복잡한 여러 조건을 이용하고 싶으면 if문
// 어떠한 변수를 기준으로 각각 다른 코드를 실행시키고 싶다면 switch문

// 1. if 조건문(if문)
let num = 4;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("num은 3 미만입니다.");
}

// 2. switch 조건문(switch문)
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if문보다 더 직관적이다.
// -> 변수와 일치하는 case를 위에서 부터 차례로 탐색하다가 일치하는 지점부터 이후 코드까지 모두 실행
// -> case 별로 break;를 달아주도록 하자.
// -> 조건에 맞지 않을 경우, default를 통해 출력
let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 모릅니다.");
  }
}
