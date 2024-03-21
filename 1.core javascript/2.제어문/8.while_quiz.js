
// 문제1: 두 수를 입력받아 해당 범위의 누적합을 구하세요

var begin = +prompt(`첫번째 숫자를 입력`);
var end = +prompt(`두번째 숫자를 입력`);

var n = begin;
var total = 0;

while(n <= end) {
  total += n;
  n++;
}
alert(`${begin} ~ ${end} 까지의 누적합: ${total}`);

// 첫번째 정수 > 두번째 정수
// 첫번째 정수를 tmp 변수에 저장한 뒤 두 정수를 swap해 반복문 실행
