

var yourName = prompt('당신의 이름은?');
var yourAge = prompt('당신의 나이는?');
var birthYear = 2024 - yourAge + 1;  // 가독성을 위해 2025 - yourAge 하지 말기..
// var today = new Date();
// var birthyear = today.getFullYear() - age + 1;

alert(`${yourName}님은 ${birthYear}년생이시군요??`);