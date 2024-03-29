
// 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력
function showEvenNumber(n) {
  const nums = []
  for(let i = 1; i <= n; i++) {
    if(i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}
function showOddNumber(n) {
  const nums = []
  for(let i = 1; i <= n; i++) {
    if(i % 2 === 1) {
      nums.push(i);
    }
  }
  console.log(nums);
}
// isOdd 파라미터 추가해서 하나의 함수로 처리
// 0 이면 짝수 출력
// 1 이면 홀수 출력
function showOddOrEvenNumber(n, isOdd) {
  const nums = []
  for(let i = 1; i <= n; i++) {
    if(i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// x 3이면 3의 배수, 6이면 6의 배수 출력
function showTripleNumber(n, x) {
  const nums = []
  for(let i = 1; i <= n; i++) {
    if(i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// showEvenNumber(7);
// showOddNumber(7);
// showOddOrEvenNumber(7, 0); // 짝수 출력

// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1 ~ n까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) {
  const nums = [];
  for(let i = 1; i <= n; i++) {
    if(condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}
showNumber(50, function(i) {
  return i % 2 === 0;
});

// 화살표 함수, i 말고 다른 변수를 써도 작동함
showNumber(50, i => i % 2 === 0);
// showNumber(50, zz => zz % 2 === 0);

showNumber(20, function(i) {
  return i % 2 === 1;
});
showNumber(100, function(i) {
  return i % 6 === 0 && i % 12 !== 0;
});
// 1 ~ n 전부 출력하고 싶다면
showNumber(100, function(i) {
  return true;
});

console.log('=================================');

// 템플릿 함수

function makeCook(recipeName, recipeCode) {
  console.log('### 나만의 맛도리 쩝쩝박사 레시피 ###');
  console.log(`!!! 요리 이름: ${recipeName}`);
  // 실제 레시피 출력은 만들어서 전달해주세요
  // 레시피만 바뀌고 위아래 콘솔로그는 공통
  recipeCode(); // recipeCode 호출

  console.log('~~~ 참 쉽죠 여러분도 이대로 만들어 보세요~! ~~~');
}

makeCook('맛도리라면', () => {
  console.log('1. 아리수 끓이기');
  console.log('2. 대파 청양고추 팍팍');
  console.log('3. ㅋㅋㅋ 맛점');
}); 