// 1. Date 객체를 생성하는 방법
// 생성자 함수에 인수로 아무 것도 전달하지 않으면 현재 시간
let date1 = new Date(); // 생성자
console.log(date1);

// 특정 날짜, 시간 기준으로 생성하고 싶다면?
// 1997-01-07 / 1997. 01. 07 / 1997/01/07
// 시간은 날짜 뒤에 /10:10:10
let date2 = new Date("1997-01-07/10:10:10");
console.log(date2);
// 숫자만 기입할 때, Month는 출력하고 싶은 달의 -1
let date3 = new Date(1993, 4, 2, 14, 50, 30);
console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는 지를 의미하는 숫자 값
// "1970.01.01 00시 00분 00초"는 협정세계시(UTC): 모든 나라가 표준으로 사용하는 시간이 시작되는 지점
let ts1 = date3.getTime();
console.log(ts1);

// 타임 스탬프 값으로 현재 시간 구하기
let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소 추출하는 방법
let year = date3.getFullYear();
let month = date3.getMonth() + 1;
let date = date3.getDate();
let hour = date3.getHours();
let minute = date3.getMinutes();
let second = date3.getSeconds();
console.log(year, month, date, hour, minute, second);

// 4. 시간 수정하기
date2.setFullYear(2026);
date2.setMonth(1);
date2.setDate(2);
date2.setHours(0);
date2.setMinutes(42);
date2.setSeconds(20);
console.log(date2); // Mon Feb 02 2026 00:42:20 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
// 시간 생략하기
console.log(date2.toDateString()); // Mon Feb 02 2026
console.log(date2.toLocaleString()); // 2026. 2. 2. 오전 12:42:20
console.log(date2.toLocaleDateString()); // 2026. 2. 2.
console.log(date2.toLocaleTimeString()); // 오전 12:42:20
