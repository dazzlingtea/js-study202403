
// 문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력

// var limit = +prompt(`양의 정수를 입력하세요.`);
var limit = 130;
var result = '';

// for(var i = 1; 2 ** i < limit; i++) {  
//   result += 2 ** i + ' ';
// }
// alert(result);

for(var i = 2; i <= limit; i *= 2) {  
  result += i + ' ';
}
console.log(result);

// while문 
var i = 2
result = '';
while(i <= limit) {
  result += i + ' ';
  i *= 2;
}
console.log(`while문 ${result}`);


/*

// 입력받은 숫자 이하의 2의 제곱수를 가로로 출력
var n = +prompt('양의 정수를 입력하세요.'); 

// 제곱수를 누적한 변수
var accum = '';

for (var i = 2; i <= n; i *= 2) {
  accum += `${i} `;
}
alert(accum);

*/