
// 프로그램 전체에서 사용할 전역 변수, 상수와 함수를 정의

const $userInput = document.getElementById('input-number');

const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// result 요소 노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소 노드
const $currentCalculation = document.getElementById('current-calculation');

// result에 그려질 숫자
let currentResult = 0;

// log 
// const $logList = document.querySelector('.log-entries');
const $logUl = document.querySelector('.log-entries');
const logList = [];

//================= 함수 정의 영역 ================//
// 계산 기능 헬퍼 함수
const calculate = mark => {
  const markOperator = mark;

  // 자동으로 포커스 이동
  $userInput.focus();
  
  // 더하기를 해야 함
  // 계산 전 값을 백업
  const prevResult = currentResult;
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;
  
  // 2. 결과에 누적
  switch(mark) {
    case '+': 
      currentResult += enteredNumber;
      break;
    case '-':
      currentResult -= enteredNumber;
      break;
    case 'x':
      currentResult *= enteredNumber;
      break;
    case '÷':
      currentResult /= enteredNumber;
      break;        
  }
  
  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descripttionLog = `${prevResult} ${markOperator} ${enteredNumber}`;
  $currentCalculation.textContent = descripttionLog;

  // 배열로 목록
  //.log-entries__item
  makeLi(descripttionLog, currentResult);

  $userInput.value = '';
};
function makeLi(descripttionLog, currentResult) {
  const $newLi = document.createElement('li');
  $newLi.classList.add('log-entries__item');
  $newLi.textContent = `#${logList.length + 1}. ${descripttionLog} = ${currentResult}`;

  $logUl.appendChild($newLi);
  const newLog = {
    id: logList.length + 1,
    text: descripttionLog,
    result: currentResult,
  }; 
  logList.push(newLog);
}

