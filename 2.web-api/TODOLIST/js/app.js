
const todoData = [...document.querySelector('.todo-list').children];

// console.log(todoData);

//=========함수 작성 영역========//

// 하나의 li 생성 함수
function makeNewLi($todoList, inputValue, id) {
  
  const $newLi = document.createElement('li');
  $newLi.dataset.id = id;
  $newLi.classList.add('todo-list-item');

  $newLi.innerHTML = `
    <label class="checkbox">
      <input type="checkbox">
      <span class="text">${inputValue}</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
  `;
  // ul에 li 태그 추가
  $todoList.appendChild($newLi);
}


// 폼 인풋, 버튼 모두 preventdefault
function insertTodo() {
  const $todoList = document.querySelector('.todo-list');
  const $input = document.getElementById('todo-text');
  const id = todoData.length;
  
  if($input.value.trim() === '') {
    $input.value = '';
    $input.setAttribute('placeholder', '필수 입력사항입니다!');
    $input.style.color = 'white';
    $input.style.background = 'red';
  }
  
  makeNewLi($todoList, $input.value, id);
}

//=========함수 실행 영역========//


// 할 일 추가 (인풋 +버튼 / enter키)
// 아무것도 안 쓰고, space만 enter 필수입력사항입니다!

document.getElementById('add').addEventListener('click', e => {
  e.preventDefault();
  insertTodo();
});
document.getElementById('todo-text').addEventListener('keyup', e => {
  e.preventDefault();
  if(e.key === 'enter') {
    insertTodo();
  }
});

// 할 일 체크 기능
// 체크박스는 같은 라인이면 체크됨


// 할 일 삭제 기능
// confirm, 모달은 알아서 커스텀

// 할 일 수정
// 수정하고 v 확인버튼 누르면 수정 완료

