
var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당(대입)

var multiple = result * 3; // 90
console.log(multiple);

var fruit;
fruit = "자몽";
console.log(fruit);

var food = '볶음밥';
food = '돈까스';
console.log(food);



// 변수 이름 규칙
var number;
// var 7number; // (X)

var num7ber; // (O)

// var user name; // (X)

// 띄어쓰기 불가
var currentloginuserphonenumber; 
var current_login_user_phone_number; // snake case
var currentLoginUserPhoneNumber;  // camel case (js: o)

// 셋 모두 다른 변수
var apple;
var APPLE;
var Apple;

// var myPetName!; // (x) 특수문자 사용X
var $myPetName_;

// var for; // (x) 예약어
// var let;
var For; // (o)
var lEt; // (o)


// 변수명은 일관성 유지
var userName;
var userEmail;
var memberAddress; // (X)

// 변수명으로 영어 사용
var 쩰리 = '곰표젤리';
console.log(쩰리);

// 상수
// const myMoney = 1000; 변수가 적합
const $orange = '#ffa808'; // 컬러코드처럼 변경을 막고 싶은 경우 상수
// $orange = 'sdfds';         // TypeError: Assignment to constant variable.
console.log($orange);