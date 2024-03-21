
var begin = 10, end = 0, step = 1;

var begin = 10;

while(n >= end) {
  console.log(`${n} !!`);
  n -= step;
}

console.log('==============');

var n = 1;
var level = 5;

while(n < 10) {
  console.log(`${level} X ${n} = ${level * n}`);
  n++;
}

console.log('==============');

// 10 ~ 34까지의 정수를 홀수만 출력
var m = 10; // begin

while (m <= 34) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}


console.log('==============');

// 1 ~ 10 까지의 누적합

var total = 0;
var i = 1;

while (i <= 100) {
  total += i;
  i++;
}
console.log(total);

