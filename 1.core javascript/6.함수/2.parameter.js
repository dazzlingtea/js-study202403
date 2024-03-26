
// x부터 y까지의 누적합을 구해야 함

// 1 ~ 10 
var total = 0;
for (var i = 1; i <= 10; i++) {
  total += i;
}

// x부터 y까지  (호출하는 곳에서 가져와야 할 값)
function calcRangeTotal(x, y) {
  var total = 0;
  for (var i = x; i <= y; i++) {
    total += i;
  }
  return total;
}


var result1 = calcRangeTotal(1, 10);
console.log(result1);

var result2 = calcRangeTotal(4, 7);
console.log(result2);


// 매개변수의 기본값

function sayHello(language='한국어') {

  // ES5
  // language = language || '한국어';

  console.log(language);

  switch(language) {
    case '한국어':
      console.log('안녕하세요');
      break;
    case '영어':
      console.log('Hello');
      break;
    case '중국어':
      console.log('따자하오~');
      break;
    case '일본어':
      console.log('곤니치와');
      break;
    default:
      console.log('우가우가~~');
  }
}
sayHello('영어');
sayHello('중국어');
sayHello('한국어');
sayHello('아랍어');
sayHello();           // undefined


// 매개변수가 없는 함수
function selectRandomPet() {

  var pets = ['멍멍이', '야옹이', '짹짹이', '고라니', '노루루'];
  var rn = Math.floor(Math.random() * pets.length);
  
  return pets[rn];
}
console.log('r1: ' + selectRandomPet());
console.log('r2: ' + selectRandomPet());
console.log('r3: ' + selectRandomPet());





