// for: 초기식; 조건식; 증감식
// 초기식: 반복문이 몇 번 반복되었는 지 저장하는 변수, count 변수
// 조건식: 반복문이 언제까지 반복할건 지 설정
// 증감식: count 변수 증감 연산
for (let idx = 1; idx <= 10; idx++) {
  // continue: 반복문 내의 다른 코드들은 실행하지 않고, 바로 다음 반복회차로 넘어감
  // 아래 같은 경우, 짝수일 때는 continue 아래 코드 무시하고 넘어감
  if (idx % 2 === 0) {
    continue;
  }

  console.log(idx);

  // 조건이 참이어도 강제로 종료하고 싶을 때 if문과 break로 조절
  if (idx >= 5) {
    break;
  }
}
