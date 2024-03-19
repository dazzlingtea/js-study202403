
var num = 27;
var num2 = 90.5;
console.log(typeof num); // number
console.log(typeof num2); // number

console.log(num / 5); // 5.4

var foodName = num;
console.log(foodName); // 27

console.log(num = num / 5); // 5.4
foodName = num;
console.log(foodName); // 5.4

foodName = 'num';
console.log(foodName); // num

// 문자열
foodName = '깐풍기';
foodName = `깐풍기`;
console.log(foodName); // 깐풍기

var element = '<nav><ul><li>딸기</li></ul><nav>';
console.log(element);

element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n<nav>';
console.log(element);

// 백틱은 줄바꿈 가능
element = `
<nav>
  <ul>
    <li>딸기</li>
  </ul>
  <nav>`;
console.log(element);

// 줄바꿈 syntax error
// var element = '
// <nav>
//   <ul>
//     <li>딸기
//     </li>
//   </ul>
// <nav>';
// console.log(element);

console.log('==============================');

var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월 ' + day + '일은 ' + anni + '입니다.';
console.log('sentence: '+ sentence);
var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;
console.log('sentence2: '+ sentence2);


var userAge = 30;

//  boolean : 논리
var flag = userAge > 19;
console.log(typeof flag);
console.log(flag);

// true, false 키워드 변수명으로 사용X
// var true;
var TRUE = true;

// undefined: 아직 값이 없는 상태 (고의로 값을 안 넣은게 아님)
// null: 일부러 값을 없앤 상태 (고의로 값을 없앰)
var petName;
console.log(petName);

var myHobby = '산책';
myHobby = null; // 산책을 변수에서 값 없앰

function buyNewCar(money) {
  if (money > 2000) return '레이';
  else if (money > 3000) return '아반떼';
  else if (money <= 0) return null; // '', 0 은 데이터 있음
}