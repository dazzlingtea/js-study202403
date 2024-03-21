// 문제2: 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력

// var n = +prompt(`정수값: `);
var n = 20;

var divisor = '';
var count = 0;
for(var i = 1; i <= n; i++) {
  if(n % i === 0) {
    divisor += i + '\n';
    count++;
  }
}
console.log(`${divisor}약수는 ${count}개입니다.`);
// alert(`${divisor}약수는 ${count}개입니다.`);

// while
divisor = '';
count = 0;
var i = 1;

while(i <= n) {
  if(n % i === 0) {
    divisor += i + '\n';
    count++;
  }
  i++;
}
console.log(`${divisor}while문 약수는 ${count}개입니다.`);

/*

// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = 10;
// 약수 카운트를 저장할 변수
var count = 0;
// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 개수: ${count}개`
alert(result);

*/