/*
현재 멤버: 
메뉴 선택
1. 새로운 이름 추가
2. 기존 이름 삭제
3. 프로그램 종료
*/

var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
var exitFlag = false;

while (true) {
  // 메뉴 선택
  var menuInput = prompt(`현재 멤버: [${tvxq}]\n메뉴를 선택하세요.
  \n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 기존 이름 수정\n4. 프로그램 종료`);

  switch (menuInput) {
    case "1":
      // 새로운 이름 추가
      var newName = prompt(`추가할 새로운 멤버의 이름을 입력하세요.`);
      tvxq.push(newName);
      alert(`${newName}이(가) 추가되었습니다.`);
      break;

    case "2":
      // 기존 이름 삭제
      while (true) {
        var targetName = prompt(`삭제할 멤버의 이름을 입력하세요.\n현재 멤버: [${tvxq}]`);
        var index = tvxq.indexOf(targetName);
        // 멤버 포함 여부 확인
        if (index > -1) {
          // 포함되면 삭제
          tvxq.splice(index, 1);
          alert(`${targetName}이(가) 삭제되었습니다.`);
          break;
        } else {
          // 포함되지 않으면 다시 입력
          alert(`${targetName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
          continue;
        }
      }
      break;

    case "3":
      // 기존 이름 수정
      while(true) {
      var targetName = prompt(`수정할 멤버의 이름을 입력하세요.\n현재 멤버: [${tvxq}]`);
        var index = tvxq.indexOf(targetName);
        // 멤버 포함 여부 확인
        if (index > -1) {
          // 포함되면 수정할 이름 입력 받음
          var updatedName = prompt(`새로운 이름을 입력하세요.\n현재 수정할 멤버: [${targetName}]
          \n수정할 멤버를 잘못 선택하셨다면 확인을 누르시거나 Enter키를 누르세요.`);
          // 새로운 이름이 공백일 땐 다시 입력 받음
          if(updatedName === '') {
            alert(`공백은 입력할 수 없습니다.`)
            continue;
          }
          tvxq.splice(index, 1, updatedName);
          alert(`${targetName}이(가) ${updatedName}으로 수정되었습니다.`);
          break;
        } else {
          // 포함되지 않으면 다시 입력
          alert(`${targetName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
          continue;
        }
      }
      break;

    case "4":
      // 프로그램 종료
      alert(`프로그램을 종료합니다.`);
      exitFlag = true;
      break;

    default:
      alert(`잘못된 입력입니다! 숫자 1 ~ 3 중 하나만 입력해주세요.`);
      break;
  }

  if (exitFlag) break;
}
