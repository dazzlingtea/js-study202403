
// console.log(`김철수님 안녕하세요! hello!!`);
// console.log('오늘도 즐거운 하루 되세요!!');

// // 코드 100줄 정도 작성 .....

// console.log(`박영희님 안녕하세요! hello!!`);
// console.log('오늘도 즐거운 하루 되세요!!');

// // 코드 500줄 정도 작성 .....

// 함수 정의 (만든다, 코드를 정규화 define function, declaration)
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요! Hi`);
  console.log('오늘도 즐거운 하루 되세요!!🤗');
}

// 함수 호출 (사용한다, call function)
sayHello('둘리');

console.log('======');
// 중간에 다른 코드들을 작성해도 함수 사용 가능

sayHello('잔망루피');

// 코드의 모듈화, 부속화, 부품화

function makeLine() {
  console.log('==================================');
}

sayHello('a');
makeLine();
sayHello('b');
makeLine();
sayHello('c');


// 나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265;

// 반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
  return PI * r ** 2;
}

// 반지름이 5인 원의 넓이
var circle1 = PI * 5 ** 2;
console.log(circle1);
console.log(calcAreaCircle(5));

// 반지름이 17인 원의 넓이
var circle2 = PI * 17 ** 2;
console.log(circle2);
console.log(calcAreaCircle(17));



// 게시글을 삭제하는 함수
function remove() {}
function removeBoardArticle() {}



