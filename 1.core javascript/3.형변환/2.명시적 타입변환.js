

var x  = '30', y = '40';

var result = Number(x) + Number(y); // 70
var result2 = parseInt(x) + parseInt(y); // 70
var result2 = parseInt(x) + parseInt(y); // 70
console.log(result);
console.log(result2);



// parseInt는 문자를 숫자로 바꿀때 정수로 바꾼다.
// parseDouble을 사용하면 소수점을 지킬 수 있음.
var x1  = '30.5', y1 = '40.5';
var result3 = Number(x1) + Number(y1); // 71
var result4 = parseInt(x1) + parseInt(y1); // 70
var result5 = +x1 + +y1;
console.log(result3);
console.log(result4);
console.log(result5);


var m = '' + 10 + 20; // 10이 문자가 되고 문자10 + 20 => 문자 1020
console.log(m);

var f = +false; // number
var f1 = '' + false; // string

console.log('====================================');

// 논리 타입으로 명시적 변환
console.log(Boolean('hello'));  // true
console.log(Boolean(null));     // false
console.log(!!999);             // true
console.log(!999);              // false
console.log(!!undefined);       // false

// 회원 로그인 여부 확인
function isLogin() {
  // window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

 return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN'); 