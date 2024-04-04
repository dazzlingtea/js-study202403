
import { todos } from "./global_var.js";

// 배열에서 done toggle 함수
function toggleDone(dataId) {
  // 체크박스 체크 및 해제 시 todos배열에 있는 특정 객체의 done 프로퍼티를
  // 반대값으로 변경해야 함

  // 1. 클릭한 체크박스가 갖고 있던 id 파라미터로 받기
  // 2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 찾아내기
  const todo = todos.find(todo => todo.id === dataId);
  // todo 못찾으면 undefined
  if(todo) todo.done = !todos.done;
}

export default toggleDone;