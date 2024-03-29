
// 카운터 함수

// const increase = (() => {
//   let count = 0;
//   return () => ++count;
// })();

// const decrease = (() => {
//   let count = 0;
//   return () => --count;
// })();

// increase decrease count는 따로 작동함

/*
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

console.log(decrease());
console.log(decrease());
*/

const countClosure = () => {
  let count = 0;
  const increase = () => ++count;
  const decrease = () => --count;

  return { increase, decrease }; // {increase: increase, decrease: decrease}
};

// const counter = countClosure();
const {increase, decrease} = countClosure();
// console.log(typeof counter);  // object

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

console.log(decrease());
console.log(decrease());

