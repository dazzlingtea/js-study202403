

var food1 = '짬뽕';
var food2 = '탕수육';
var food3 = '짜장';


var all = `${food1}, ${food2}, ${food3}`;

var arr = [10, 20, 30, 40];
console.log(typeof arr); // object

console.log(arr[1]);
console.log(arr[2] ** 2);
console.log(arr[2]);  // 계산결과를 저장 안했으니 여전히 30

arr[1] = 999;
arr[3]++;

console.log(arr); // [ 10, 999, 30, 41 ]


// 배열 데이터 수 확인
console.log(arr.length);  // 4

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length-1]}`);

//  배열데이터 순회 (전체참조: travis)
console.log('======================');

for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for ~ of 반복문 (배열 전용 반복문)
console.log('======================');
var weekDays = ['월', '화', '수', '목', '금', '토', '일'];

for (var day of weekDays) {
  console.log(`${day}요일!!`);
}

// for(var n of [1, 3, 5, 7]) {}; // O
// for(var n of 999) {};          // X
// for(var n of {'zzz'}) {};      // O

// 배열 생성 관례 : 이름 복수형, -List 어미
var fruits = ['grape', 'strawberry', 'orange'];
var fruitList = ['grape', 'strawberry', 'orange'];
var fruitArray = ['grape', 'strawberry', 'orange'];

fruits = ['grape', 'strawberry', 'orange', ];
console.log(fruits.length);                         // 3

var tags = [                        // 세로로 작성하다보니 마지막 , 관례 지키면 좋음
 '<li>오렌지</li>',
 '<a href="#">링크</a>',
 '<h1>로고</h1>',
 '<h2>로고2</h2>',
];