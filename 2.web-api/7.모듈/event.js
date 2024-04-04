
// getDom.js 에서 $pText를 가져오기
import { $pText, $btn } from './getDom.js'; 

// console.log($pText);
// console.log($btn);


// 이벤트 핸들러 함수
export const clickHandler = e => {
  $pText.textContent = '안녕😀';
};