
var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

// indexOf() : 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var target = '짜장면';

var index = foodList.indexOf(target);
console.log(`index: ${index}`);

// for (var i = 0; i < foodList.length; i++) {
//   if(target === foodList[i]) {
//     index = i;
//     break;
//   }
// }

// include() : 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes('족발');
console.log(`flag: ${flag}`);

// slice() : 배열을 원하는 범위만큼 분할
var sliced = foodList.slice(1, 3);
console.log(sliced);

// 1개: 3번부터 끝까지 (end 생략)
var sliced2 = foodList.slice(3);
console.log(sliced2);

// 음수 index
var sliced5 = foodList.slice(-3);
console.log('음수 index: ' + sliced5);

// endIndex가 배열 크기 이상: 전체 복사
var sliced4 = foodList.slice(2, 10);
console.log('endIndex가 배열길이보다 크면: ' + sliced4);

// 0개: 전체 복사
var sliced3 = foodList.slice();
console.log(sliced3);

// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음
console.log(foodList);

console.log('======================');
// reverse() : 배열을 역정렬
// 원본이 변경되므로 카피본에 사용

var nums = [10, 20, 30, 40, 50];

var numsCopy = nums.slice(); // 카피본 생성  
numsCopy.reverse();

console.log(nums);
console.log(numsCopy);

console.log('======================');


// concat() : 배열을 결합한 사본을 반환함
// [...arr1]

var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2);
console.log(concated);

console.log('======================');

// splice() : 배열의 삭제 및 삽입,
// 원본에서 삭제삽입을 진행하므로 원본이 손상됨

console.log(foodList);

// foodList.splice(1, 2);
// console.log(foodList);

foodList.splice(2, 1);
console.log(foodList);

foodList.splice(0, 1, '파스타', '보쌈');
console.log(foodList);

foodList.splice(2, 0, '마라탕');
console.log(foodList);

foodList.splice(2); // 2번부터 끝까지 삭제
console.log(foodList);


