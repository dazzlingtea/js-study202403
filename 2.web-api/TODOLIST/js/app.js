//=========전역 변수 영역========//
// 서버와 통신할 데이터
const todoData = [...document.querySelector('.todo-list').children];

console.log(todoData);

//=========함수 정의 영역========//

// 하나의 li 생성 함수
function makeNewLi(inputValue, id) {
  // li 속성 추가하기
  const $newLi = document.createElement('li');
  $newLi.dataset.id = id;
  $newLi.classList.add('todo-list-item');

  // li의 자식들 추가하기
  $newLi.innerHTML = `
    <label class="checkbox">
      <input type="checkbox">
      <span class="text">${inputValue}</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
  `;
}


function insertTodo() {
  const $todoList = document.querySelector('.todo-list');
  const $input = document.getElementById('todo-text');
  const id = todoData.length;
  
  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기
  // todos 배열에 새로운 할 일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  // const newTodo = {
  //   id: makeNewId(),
  //   text: $input.value,
  //   done: false
  // };

  // 입력X 스타일 초기화
  $input.removeAttribute('style');
  $input.setAttribute('placeholder', '할 일을 입력하세요');
  
  // 입력X 
  if($input.value.trim() === '') {
    $input.value = '';
    $input.setAttribute('placeholder', '필수 입력사항입니다!');
    $input.style.color = 'white';
    $input.style.background = 'red';
    return;
  }
  
  makeNewLi($input.value, id);
  // ul에 li 태그 추가
  $todoList.appendChild($newLi);
}

//=========함수 실행 영역========//
// 함수 호출, 이벤트 리스너 등록


// 할 일 추가 (인풋 +버튼 / enter키)
// 아무것도 안 쓰고, space만 enter 필수입력사항입니다!
// 폼 인풋, 버튼 모두 preventdefault

document.getElementById('add').addEventListener('click', e => {
  e.preventDefault(); // form의 submit 중단
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
document.querySelector('.checkbox').addEventListener('click', e => {
  e.target.children[0].checked = true;
});

// 할 일 삭제 기능
// confirm, 모달은 알아서 커스텀

// 할 일 수정
// 수정하고 v 확인버튼 누르면 수정 완료

