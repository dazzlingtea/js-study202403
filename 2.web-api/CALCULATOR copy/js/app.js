
// 실행코드 (함수 호출, 이벤트 등록, 핸들러 정의, ...)

// console.log($logList);

// 이벤트 핸들러 바인딩
// 연산자는 변동이 없으므로 각각 이벤트 적용

$addBtn.addEventListener('click', e => {
  // 연산 처리 함수
  calculate(ADD);
});
$subtractBtn.addEventListener('click', e => {
  calculate(SUB);
  
});
$multiplyBtn.addEventListener('click', e => {
  calculate(MUL);
  
});
$divideBtn.addEventListener('click', e => {
  calculate(DIV);

});
