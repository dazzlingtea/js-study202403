
// 1. 변수의 중복선언을 암묵적으로 허용

// var x = 10; 

// // ... 10만 줄

// var x = 'ddd'; // 의도치 않게 x = 10 삭제
// console.log(`x: ${x}`);

// let을 사용하면 에러 발생해서 실수 방지
// SyntaxError: Identifier 'x' has already been declared
// let x = 10; 

// ... 10만 줄

// let x = 'ddd'; // 의도치 않게 x = 10 삭제
// console.log(`x: ${x}`);

// 2. 블록 레벨 스코프를 지원하지 않음 
// 전역변수와 지역변수의 중간은 없나.. 

// for 안에서만 숫자를 출력하고 전역에선 메롱을 출력했으면 좋겠어
 let i = '메롱';
 for(let i = 0; i< 3; i++) {
  console.log(`for - i: ${i}`);
}
console.log(`global - i: ${i}`);

// 3. 호이스팅 : 선언위치와 관계없이 참조가능
// hobby = '댄스';

// var hobby;

// console.log(hobby);

hobby = '댄스';

let hobby;

console.log(hobby);