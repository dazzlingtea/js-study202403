
let x;
console.log(x); // undefined


// const: 상수 선언 <=> 변수
// const y;
const y = '메롱';
// y = 'ggg';  // TypeError: Assignment to constant variable.
console.log(y); // SyntaxError: Missing initializer in const declaration

/*
  $div.style.background = '#0f0';
  $div.style.background = COLOR_GREEN;
*/
const COLOR_GREEN = '#0f0';


// 상수는 객체의 불변성을 유지할 수 있다.

const kim = {
  name : '김철수',
  age : 30,
};
kim.age = 31;
kim.name = '마이클 김';

// kim = {    // 사실 김철수가 아님, 다른 객체, 주소가 다름
//   name : '김철수',
//   age : 30,
// };

const array = {
  0: 'z',
  1: 'dd',
  2: 'ddf',
  length: 3
};
array.length;
