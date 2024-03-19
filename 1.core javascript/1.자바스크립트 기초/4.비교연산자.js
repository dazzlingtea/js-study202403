
var a = 5;
var b = '5';

console.log(a == b); // true
console.log(a === b); // false

console.log(a != b); // false
console.log(a !== b); // true

console.log('=======================');

// == 비교는 결과 예측이 어려움
console.log('0' == ''); // false
console.log(0 == '');   // true
console.log('0' == 0);  // true
console.log(false == 'false'); // false
console.log(false == 0); // true

console.log('0' === ''); // false
console.log(0 === '');   // false
console.log('0' === 0);  // false
console.log(false === 'false'); // false
console.log(false === 0); // false


console.log('=======================');

// 대소 비교

console.log('a' > 'A'); // true 97 > 65
console.log('c' < 'a'); // false 99 < 97
console.log('강' < '황'); // true 가나다순

console.log('ace' < 'ade'); // true a끼리 비교-> 같으면 다음 비교...







