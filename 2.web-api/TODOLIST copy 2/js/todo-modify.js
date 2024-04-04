
import { todos } from "./global_var.js";

// 현재 수정모드에 진입하셨나요?
let isEnterEditMode = false;

// 수정 모드 진입 처리
function toggleModifyMode($modifyBtn) {
  
  // 지금 수정모드 상태인지 수정 적용해야 하는 상태인지 확인
  const isModifying = $modifyBtn.classList.contains('lnr-undo');
  
  // 다른 항목이 이미 수정중이면서 수정진입모드라면 이 함수를 종료한다.
  if(isEnterEditMode && isModifying) return; 
  isEnterEditMode = isModifying;

  // 1. 수정 모드 진입
  // 1-1. span.lnr-undo span.lnr-checkmark-circle로 교체
  $modifyBtn.classList.toggle('lnr-undo');
  $modifyBtn.classList.toggle('lnr-checkmark-circle');
  
  const $label = $modifyBtn.parentElement.previousElementSibling;

  if(isModifying) {
    // 1-2. span.text를 input.modify-input으로 태그 교체
    // 부모태그.replaceChild(새롭게 들어올 태그, 없어질 태그)
    const $textSpan = $label.lastElementChild;
    const $modifyInput = document.createElement('input');
    $modifyInput.classList.add('modify-input');
    $modifyInput.setAttribute('type', 'text'); // 지정 안해도 text긴 함
    
    // 1-2-1. 교체된 input태그 내부에는 기존 span의 텍스트가 그대로 들어가야함
    $modifyInput.value = $textSpan.textContent;
  
    $label.replaceChild($modifyInput, $textSpan);
    
  } else {
    // 2. 수정 완료 처리
    // input.modify-input value를 읽어서 새로운 span.txt 생성하여 교체
    // const $modifyInput = $label.lastElementChild;
    const $modifyInput = $label.querySelector('.modify-input'); // 해당 라벨에서 탐색
    const $newTextSpan = document.createElement('span');
    $newTextSpan.classList.add('text');
    $newTextSpan.textContent = $modifyInput.value;

    $label.replaceChild($newTextSpan, $modifyInput);

    // 실제 배열 데이터 수정
    // 수정하려면 클릭한 버튼 근처 li에 있는 data-id 가져와서 배열 탐색
    const dataId = +$label.parentElement.dataset.id;
    
    const foundTodo = todos.find(todo => todo.id === dataId);
    foundTodo.text = $newTextSpan.textContent;
  }
  

}

export default toggleModifyMode;