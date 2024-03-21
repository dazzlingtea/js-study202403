
// 1 -> 2(true) -> 3 -> 4 -> 2 -> ...

var i = 1;           // 1. begin
while (i <= 5) {     // 2. end
  // 실행하고 싶은 코드 작성
  console.log(`while ${i}회 : hello`); // 3. execute
  i++                // 4. step
}
console.log('=================');

for (var i = 1; i <= 5; i++) {
  //   1번      2번     4번
  console.log(`for ${i}회 : hello`);  // 3번
}


// 1 ~ 10 누적합
var total = 0;
for(var i = 1;  i<= 10; i++) {
  total += i;
}
console.log(total);


// 횟수 지정 반복문
for(var i = 0; i < 5; i++) {
  console.log('메롱😛');
}