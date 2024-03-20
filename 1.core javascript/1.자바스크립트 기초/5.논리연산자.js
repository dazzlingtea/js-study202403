
var t = true, f = false;

// and 연산 : 논리곱 - &&
console.log(t && t); // t
console.log(t && f); // f
console.log(f && t); // f
console.log(f && f); // f

console.log('=======================');

// or 연산 : 논리합 - ||
console.log(t || t); // t
console.log(t || f); // t
console.log(f || t); // t
console.log(f || f); // f

console.log('=======================');

// not 연산 : 논리반전 - !
console.log(!t); // f
console.log(!f); // t

var money = 1000;
// var money = 0;
if(!money) {
  console.log('돈이 있어요');
} else {
  console.log('돈이 없어요');
}