/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/

var userInfo = {
  userList: [{
          account: 'kim1234',
          password: 'kkk1234',
          username: '김두한'
      },
      {
          account: 'park9876',
          password: 'ppp9999',
          username: '박찬호'
      },
      {
          account: 'hong7766',
          password: 'hhh1234',
          username: '홍길동'
      },
  ]
};

checkIdPw: while(true) {
  // 사용자 아이디 입력
  var idInput = prompt(`아이디를 입력하세요.`);
  
  var correctPw, correctUserName;
  var idFlag = false;
  
  // 기존 회원인지 id 확인 후 존재하면 각 데이터를 변수에 저장
  for(var obj of userInfo.userList) {
    if(obj.account === idInput) {
      idFlag = true;
      correctPw = obj.password;
      correctUserName = obj.username;
      break;    
    }
  }
  var pwTryCount = 0;
  // id 존재한다면 비번 입력 받음
  if(idFlag) {
    while(true) {
      var pwInput = prompt(`비밀번호를 입력하세요!`);
      // 비번도 맞다면 반복 종료
      if(pwInput === correctPw) {
        alert(`${correctUserName}님 환영합니다~~!`);
        break checkIdPw;
      } else {
      // 비번 틀리다면 입력부터 다시 반복
        pwTryCount++;
        alert(`비밀번호가 ${pwTryCount}회 틀렸습니다.`);
        
        // 비밀번호 5회 틀렸다면 반복 종료
        if(pwTryCount > 5) {
          alert(`비밀번호 입력 5회를 초과했습니다. 내일 다시 시도해주세요.`);
          break checkIdPw;
        }
      }
    }
  } else {
    // 없는 id라면 id 입력부터 다시 반복
    alert(`존재하지 않는 회원입니다.`);
  }
}
