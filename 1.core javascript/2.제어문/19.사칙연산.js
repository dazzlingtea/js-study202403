var countTrue = 0;
var countFalse = 0;
var start = 1;
var end = 50;
var quizNum = 1;

// 난이도 상수
const HIGH = 1, MIDDLE = 2, LOW = 3;

alert(`~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~
[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]
=====================================`);

play: while(true) {

  // 난이도 설정
  while(true) {
    var level = +prompt(`~~~~~~~~~~~ 난이도를 설정합니다. ~~~~~~~~~~~\n[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)]`);
    switch(level) {
      case HIGH: 
            end = 100;
            break;
      case MIDDLE: 
            end = 50;
            break;
      case LOW: 
            end = 20;
            break;
      default:
            alert(`난이도를 1 ~ 3 사이의 숫자로 다시 입력해주세요.`);
            continue;
    }
    break;
  }
  
  while(true) {
    // 랜덤 숫자 2개 
    var x = Math.floor(Math.random() * (end - start + 1)) + start;
    var y = Math.floor(Math.random() * (end - start + 1)) + start;
    var answer;
    
    // 랜덤 사칙연산자
    var operator = Math.floor(Math.random() * 3) + 1;
  
    switch(operator) {
      case 1:
            operator = '+';
            answer = x + y;
            break;
      case 2:
            operator = '-';
            answer = x - y;
            break;
      case 3:
            operator = 'x';
            answer = x * y;
            break;
      // case 4:
      //       operator = '÷';
      //       answer = Math.floor(x / y);
    }
    
    // 사용자 답 입력
    var input = +prompt(`Q${quizNum}. ${x} ${operator} ${y} = ??`);
    
    // 입력 받은 답 판정
    if (input === answer) {
      alert(`정답입니다! 😁`);
      countTrue++;
      quizNum++;
    } else {
      alert(`틀렸어요~ 🙄 정답은 ${answer}`);
      countFalse++;
      quizNum++;
    }

    if(input === 0) {
      var exitFlag = confirm(`0을 입력하셨습니다. 종료하시겠습니까?`); 
      if(exitFlag) {
        alert(`게임을 종료합니다!\n=========================================\n정답횟수: ${countTrue}회, 틀린횟수: ${countFalse}회`);
        break play;
      } else {
        var replayFlag = confirm(`정답횟수: ${countTrue}회, 틀린횟수: ${countFalse}회\n난이도 선택부터 다시 시작하시겠습니까?`);
        if(replayFlag) {
          continue play;
        } else {
          alert(`이어서 문제 풀겠습니다.`);
        }
      } 
    } 

  }
}







