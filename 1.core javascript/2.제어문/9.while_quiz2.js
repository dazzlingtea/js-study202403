// 문제2: 입력받은 정수만큼의 기호를 출력하되 + - 가 교차되어 나오도록 하세요

var count = +prompt(`양의 정수를 입력!`);

var n = 1;
var result = '';

while (n <= count) {
  if(n % 2 === 1) {
    result += '+';
  } else {
    result += '-';
  }
  n++;
}
// alert(`${result}`);
alert(result);