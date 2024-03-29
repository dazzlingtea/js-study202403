
// countClosure 즉시실행함수로 리팩토링

/*
const countClosure = () => {
  let count = 0;
  const increase = () => ++count;
  const decrease = () => --count;

  return { increase, decrease }; // {increase: increase, decrease: decrease}
};
*/

const {increase, decrease} = (() => {
  let count = 0;
  return {
    increase: () => ++count,
    decrease: () => --count,
  }
})();


console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

console.log(decrease());
console.log(decrease());

