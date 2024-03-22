

// 1 ~ 100 사이의 랜덤정수
// random() * (y - x  + 1) + x

var count = 0;

while(true) {
  var rn = Math.floor(Math.random() * 10) + 1; 
  console.log('hello');
  count++;
  if(rn === 7) break;
}
console.log(count+'회 반복문 종료!!');
