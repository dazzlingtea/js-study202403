
function add2(n1, n2) {
  return n1 + n2;
}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}


// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)를 전달한다

function addAll(numbers) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

// ES6 - spread 문법
function addAllES6(first, second, ...numbers) {
  console.log(numbers);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;  
}


var r1 = add3(5, 9, 2);

var r2 = addAll([5, 9, 2, 10, 20]);
console.log(`r2: ${r2}`);

var r3 = addAllES6(10, 20, 30);
console.log(`r3: ${r3}`);

var r4 = addAllES6([10, 20, 30], [5, 9, 2, 10]);
console.log(`r4: ${r4}`);

console.log('===============================');

// 다중 반환값
// 함수의 반환값은 언제나 하나다.

function arithmeticOperate(n1, n2) {
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  return {
    add: add2(n1, n2),
    div: divResult, 
    multi: multiResult,
    sub: subResult,
    other: subResult ** divResult,
  };
}

function arithmeticOperate(n1, n2) {
  return {
    add: add2(n1, n2),
    div: n1 / n2, 
    multi: n1 * n2,
    sub: n1 - n2,
  };
}


var r5 = arithmeticOperate(20, 10);
console.log(`r5: ${r5}`);
console.log(`r5 덧셈결과: ${r5.add}`);
console.log(`r5 뺄셈결과: ${r5.sub}`);
console.log(`r5 곱셈결과: ${r5.multi}`);
console.log(`r5 나눗셈결과: ${r5.div}`);


var r6 = arithmeticOperate(5, 3).multi;

function foo() {
  return 10;
}

foo()++;  // 함수 리턴값이 숫자니까 ++ 연산 가능
foo().push(4);  // 함수 리턴값이 숫자니까 배열 메서드 사용 불가


function foo1() {
  return [{id: 'hhh'}, 2, 3];
}
foo()[0].id; // 가능 배열[0]이 객체라서
foo()[1]*2;  // 가능 함수결과가 배열이고 해당 인덱스는 숫자라서 연산 가능