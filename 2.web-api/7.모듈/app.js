
import { $btn as $button } from "./getDom.js";
import { clickHandler } from "./event.js";
// import { pow } from "./pow.js";
// import pow from "./pow.js";
// import hahaha from "./pow.js";
import hahaha from "./pow.js";

const pow = () => {};

const $btn = '123';
console.log(`내가 만든 btn: ${$btn}`);
console.log(`불러온 btn: `, $button);

console.log(hahaha.pow(5));
console.log(hahaha.add(3, 6));

// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);