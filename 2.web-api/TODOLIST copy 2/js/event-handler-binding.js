
import insertTodoData from "./todo-insert.js";
import { removeTodoData } from "./todo-remove.js";
// import { removeTodoData as rtd } from "./todo-remove.js";
import toggleDone from "./todo-check.js";
import toggleModifyMode from "./todo-modify.js";


const handlerBinding = () => {
  // 추가 버튼 클릭 이벤트
  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault(); // form의 submit중단
    insertTodoData();
  });

  // 삭제 버튼 클릭 이벤트
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
    } else if (e.target.matches(".modify span")) {
      // 수정 버튼 처리
      toggleModifyMode(e.target);
    }
  });
};

export default handlerBinding;
