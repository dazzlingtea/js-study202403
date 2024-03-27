
// 어떤 계산을 하는 함수
function operate(param) {   // <- 이름없는 함수의 이름이 param 으로 정해져서
  console.log(`param: ${param}`);

  const x = param(10, 20);  // 함수 내에서 param으로 호출 가능 -> 호출부로 가서 계산 (30)
                     // 받아온 30을 x에 저장 (const x가 나중에 호출했다)

  console.log('계산기 작동');
  const n1 = 10, n2 = 20;
  const result = n1 + n2;
  return result;
}

const abc = '123';
// 없는 변수는 못 보냄
function add(n1, n2) {
  return n1 + n2;
}
// operate(add(3, 5)); // 함수를 전달한게 아니라 정수 8(함수 결과) 전달
operate(add); // 함수를 전달 = operate 에 특정 코드를 전달했다

// operate 호출 -> 다른 이름이 없는 더하기 기능의 함수를 전달
operate(function(n1, n2) {
  return n1 + n2;
}); // 이름 없는 함수를 전달

