

var money = 10000;

var food = (money >= 8000) ? '돈까스' : '라면';

if(money >= 8000) {
  food = '돈까스';
} else {
  food = '라면';
}

console.log(`선택한 음식: ${food}`);


// 선택지 많아질 수록 삼항 연산자는 가독성이 저하

var food = (money >= 8000) ? '돈까스' 
: (money >= 5000) ? '쫄면' 
: (money >= 3000) ?'라면' : '굶어';

if(money >= 8000) {
  food = '돈까스';
} else if (money >= 5000) {
  food = '쫄면';
} else if (money >= 3000) {
  food = '라면';
} else {
  food = '굶어';
}
