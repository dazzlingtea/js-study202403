//========= 전역 변수 영역 ========//

// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: "할 일 1",
    done: false,
  },
  {
    id: 2,
    text: "할 일 2",
    done: false,
  },
  {
    id: 3,
    text: "할 일 3",
    done: false,
  },
];

//========= 함수 정의 영역 ========//

// 새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수
function renderNewTodoElement({ id, text }) {
  // 2. li태그 생성하기
  const $newTodoLi = document.createElement("li");
  // 2-1. 생성한 태그에 텍스트 추가하기
  // 2-2. 클래스, data-id 추가하기
  $newTodoLi.classList.add("todo-list-item");
  $newTodoLi.dataset.id = id;
  // 2-3. li의 자식들 추가하기
  $newTodoLi.innerHTML = `
            <label class="checkbox">
              <input type="checkbox">
              <span class="text">${text}</span>
            </label>
            <div class="modify">
              <span class="lnr lnr-undo"></span>
            </div>
            <div class="remove">
              <span class="lnr lnr-cross-circle"></span>
            </div>
  `;

  // 3. 생성한 태그 ul에 추가하기
  const $todoListUl = document.querySelector(".todo-list");
  $todoListUl.appendChild($newTodoLi);
}

// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById("todo-text");
  const inputText = $todoText.value;

  // 새 할 일의 아이디 값을 생성하는 함수
  const makeNewId = () =>
    todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기

  // todos 배열에 새로운 할일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false,
  };

  // 2. 배열에 추가하기
  todos.push(newTodo);

  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);
}

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
  const index = todos.findIndex((todo) => todo.id === dataId);
  todos.splice(index, 1);
  console.log(todos);
}
// 배열에서 done toggle 함수
function toggleDone(dataId) {
  // 체크박스 체크 및 해제 시 todos배열에 있는 특정 객체의 done 프로퍼티를
  // 반대값으로 변경해야 함

  // 1. 클릭한 체크박스가 갖고 있던 id 파라미터로 받기
  // 2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 찾아내기
  const todo = todos.find((todo) => todo.id === dataId);
  // todo 못찾으면 undefined
  if (todo) todo.done = !todos.done;
}

// 수정 완료 함수
function completeModify(eventBtn, targetLi) {
  const newSpan = document.createElement("span");

  const modifiedTxt = targetLi.querySelector(".modify-input").value;
  newSpan.classList.add("text");
  newSpan.textContent = modifiedTxt;

  return newSpan;
}

//========= 함수 실행 영역 - 함수 호출, 이벤트 리스너 등록 ========//

// 추가 버튼 클릭 이벤트
document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault(); // form의 submit중단
  insertTodoData();
});

// 버튼 클릭 이벤트
document.querySelector(".todo-list").addEventListener("click", (e) => {
  // 클릭한 버튼이 포함된 li를 탐색
  const $targetLi = e.target.closest(".todo-list-item");
  // 데이터 아이디 추출
  const dataId = +$targetLi.dataset.id;

  if (e.target.matches(".remove span")) {
    // 삭제 처리 진행

    // 화면에서 제거
    // document.querySelector('.todo-list').removeChild($targetLi);
    $targetLi.remove();

    // 배열에서 데이터 제거
    removeTodoData(dataId);
  } else if (e.target.matches('.checkbox input[type="checkbox"]')) {
    // 체크 화면 렌더링 처리
    // e.target 은 checkbox input -> label에 클래스 checked 추가
    e.target.closest(".checkbox").classList.toggle("checked");
    // 체크 데이터 처리
    toggleDone(dataId);

    // class="checkbox checked" 클래스 추가

    // 배열 done true, false 로 수정
    changeCheckTodoData(+$targetLi.dataset.id);
    console.log(todos);
  } else if (e.target.matches(".modify span")) {
    // 수정 버튼 처리
    // 1. 수정 모드 진입
    // 1-1. span.lnr-undo span.lnr-checkmark-circle로 교체
    e.target.classList.replace("lnr-undo", "lnr-checkmark-circle");
    // e.target.setAttribute('clickHandler', 'true');

    // 1-2. span.text를 input.modify-input으로 태그 교체
    // 1-2-1. 교체된 input태그 내부에는 기존 span의 텍스트가 그대로 들어가야함
    const modifyInput = document.createElement("input");
    const originSpan = $targetLi.children[0].children[1];
    modifyInput.value = originSpan.textContent;
    modifyInput.classList.add("modify-input");
    // console.log(modifyInput);
    // console.log(e.target);
    originSpan.replaceWith(modifyInput);

    // 2. 수정 완료 처리

    console.log($targetLi.children[0]);
    // $targetLi.children[0].children[1].replaceWith(completeModify(e.target, $targetLi));
  }
});

// // 수정 버튼 이벤트
// document.querySelector('.todo-list').addEventListener('click', e => {

//   if (!e.target.matches('.modify span')) return;

//   // 클릭한 버튼이 포함된 li를 탐색
//   const $targetLi = e.target.closest('.todo-list-item');

//   // input
//   const $modifyInput = document.createElement('input');
//   $modifyInput.setAttribute('type', 'text');
//   $modifyInput.classList.add('modify-input');

//   $targetLi.firstElementChild.lastElementChild.style.display
//   $targetLi.firstElementChild.appendChild($modifyInput);
// });
