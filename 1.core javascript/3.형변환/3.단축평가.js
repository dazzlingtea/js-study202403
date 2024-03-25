

true && true;   // t
true && false;  // f
false && true;  // f  첫번째 false면 뒤는 연산X 해도 false
false && false; // f


true || true;   // t
true || false;  // t 첫번째 true면 뒤는 연산X 해도 true
false || true;  // t  
false || false; // f


// OR 연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye'); // hello true 연산 끝
console.log(null || '안뇽'); // 안뇽  false || true라서 뒤에 봐야함

// AND 연산 : 첫번째 falsy를 반환
console.log('메롱' && '즐~~'); // 다 true면 마지막이 출력
console.log('메롱' && NaN && '즐~~'); // NaN
console.log(0 && '룰루랄라');         // 0

/*
if(조건이 참이면) {
  console.log('blah blah~~~');
}

조건 && console.log('blah blah~~~');
*/

/*
  <h1>안녕하세요</h1>
  login && <h2>ㅇㅇㅇ님 환영합니다</h2>   <-- 조건부

  쿠폰당첨여부 && sendCoupon();
  !쿠폰당첨여부 && sendMessage();  당첨이 안 됐을 때 메세지 보내기 (실무O)
  쿠폰당첨여부 || sendMessage();  당첨이 안 됐을 때 (실무X)
  내게시물여부 && <button>삭제</button>
*/