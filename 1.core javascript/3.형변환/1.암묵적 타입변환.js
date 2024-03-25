

var n1 = 10;
var n2 = '20';

console.log(n1 + n2); // 1020

var n3 = n1 + '';
console.log(typeof n3); // string

var n4 = n2 - n1 - '5';
console.log(n4);    // 5

var n5 = n1 * n2;
console.log(n5);    // 200

var n6 = 'hello' * 3;
console.log(n6);    // NaN

console.log('===============================');

var n7 = -'99';
var n8 = +'99';
console.log(typeof n7);  // number
console.log(typeof n8);  // number

console.log(true + true);    // 2
console.log(true + false);   // 1
console.log(false + false);  // 0

// falsy : 0, '', null, undefined, NaN
if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (null) console.log('hello-3');
if (undefined) console.log('hello-4');
if (NaN) console.log('hello-5');


if (99) console.log('hello-6');  // 출력ㅇ
if (-87.876) console.log('hello-7');  // 출력ㅇ
if (`ㅎㅇ`) console.log('hello-8');  // 출력ㅇ
if (' ') console.log('hello-9');  // 출력ㅇ
if ([10, 20, 30]) console.log('hello-10');  // 출력ㅇ
if ([]) console.log('hello-11');  // 출력ㅇ
if ({kind: '개'}) console.log('hello-12');  // 출력ㅇ
if (function() {}) console.log('hello-13');  // 출력ㅇ

for(var i = 1; i <= 10; i++) {
  if(i % 2) {
    console.log(`${i}는 홀수입니다.`);
  } else {
    console.log(`${i}는 짝수입니다.`);
  }
}

var apple = 10;
if (apple) {               // if (apple > 0) 같은 결과
  console.log('사과가 있습니다.');
} else {
  console.log('사과가 없습니다.');
}

var n  = 20;
var flag = n > 10;

// if(flag) {}
// if(!flag) {} flag가 false면 !로 true

// while(999) {} 무한루프
