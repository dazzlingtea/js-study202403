
// js는 정수 나눗셈이어도 실수 결과값이 나옴
console.log(27 / 5);

// 나머지 연산
console.log(27 % 5);

// 뒤에 숫자가 더 크면 앞에 숫자가 그대로 나머지, 몫은 0
console.log(4 % 10);

// 0으로 나누면 NaN, 나눗셈 불가
console.log(5 % 0);

// 몫과 나머지 모두 0
console.log(0 % 5);

// 제곱 연산
console.log(3 ** 4);


// 증감 연산자
var x = 3;
x++;
console.log(`x: ${x}`); // 4
++x;
console.log(`x: ${x}`); // 5
x--;
console.log(`x: ${x}`); // 4
--x;
console.log(`x: ${x}`); // 3

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;
var n3 = ++n1;
console.log(`n1: ${n1} n2: ${n2} n3: ${n3}`); // 11 10 12

var n3 = 10;
var n4 = ++n3;
console.log(`n3: ${n3} n4: ${n4}`); // 11 11

var xx = 5;
// xx++;
xx += 1; //  xx = xx + 1;
xx -= 1; //  xx = xx - 1;

xx * 3; // 15   xx는 여전히 5
xx *= 3; // 15
xx /= 5; // 3
xx ** 2; // 9
xx %= 4; // 1  9%4=1 을 대입

console.log(`xx: ${xx}`);