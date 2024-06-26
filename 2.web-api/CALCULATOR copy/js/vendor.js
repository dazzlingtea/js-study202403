
// 프로그램 전체에서 사용할 전역 변수, 상수와 함수를 정의

const ADD = '+';
const SUB = '-';
const MUL = 'x';
const DIV = '/';

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

// 로그 리스트 요소노드 
const $logEntriesUl = document.querySelector('.log-entries');

// 로그를 모아놓을 배열
const logArray = [];

//================= 함수 정의 영역 ================//

// 사칙연산을 수행하여 결과를 반환하는 함수
const operateNumber = ({ prevResult: first, type: mark, enteredNumber: second }) => {
  let result; // 연산 결과
  
  switch (mark) {
    case ADD:
      result = first + second;
      break;
    case SUB:
      result = first - second;
      break;
    case MUL:
      result = first * second;
      break;
    case DIV:
      result = parseInt(first / second);
      break;
  }
  return result;
};

// 로그 배열에 있는 로그들을 화면에 렌더링하는 함수
const renderLog = () => {

  // 보여줄 로그의 수
  const NUMBER_OF_LOG = 4;

  // 시작 인덱스
  const startIndex = (logArray.length < NUMBER_OF_LOG) ? 0 : logArray.length - NUMBER_OF_LOG;

  // ul 리셋
  $logEntriesUl.innerHTML = '';


  for (let i = startIndex; i < logArray.length; i++) { 
    const $logListItem = document.createElement('li');
    $logListItem.classList.add('log-entries__item');
    $logListItem.textContent = `${i+1}. ${logArray[i]}`;
  
    $logEntriesUl.appendChild($logListItem);
    
  }
};

// 로그 배열에 완성된 로그를 쌓는 함수
const accumulateLogHistory = ({ descripttionLog, currentResult }) => {
  
  const logMessage = `${descripttionLog} = ${currentResult}`;
  logArray.push(logMessage);

  // 로그 렌더링
  renderLog();
};


// 계산 기능 헬퍼 함수
const calculate = type => {
  
  // 자동으로 포커스 이동
  $userInput.focus();
  
  // 계산 전 값을 백업
  const prevResult = currentResult;
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;
  
  // 2. 결과에 누적
  currentResult = operateNumber({prevResult, type, enteredNumber});
  
  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descripttionLog = `${prevResult} ${type} ${enteredNumber}`;
  $currentCalculation.textContent = descripttionLog;

  // 로그 이력을 쌓는 함수
  accumulateLogHistory({descripttionLog, currentResult});
  
  $userInput.value = '';
};

