var x = 99;          // global scope

function foo () {
  var x = '홍길동';  // local scope
  console.log(`foo x: ${x}`);

  return x;
}
var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);

console.log('========================================');

var x = 99;          // global scope
var y = true;

function foo () {
  var x = '홍길동';  // local scope
  var y = '메롱';
  console.log(`foo x: ${x}`);
  console.log(`y: ${y}`);       // 가까운 변수 먼저
  // var z = 100;

  return x;
}
y = foo();
console.log(`x: ${x}`);
// console.log(`z: ${z}`);

console.log('========================================');

// 중첩 함수 : 함수 안에 함수를 정의
function outer(m) {
  var n = 'outer local n';
  var v = 'outer local v';
  console.log(n);
  console.log(v);
  console.log(m);
  
  // 헬퍼 함수: 바깥쪽 함수 전용함수
  function inner() {
    console.log(n);
    var m = 'inner local m';
    console.log(m);
  }
  inner();
}

outer('outer param m');