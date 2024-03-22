

for (var i = 1; i <= 10; i++) {
  if(i % 3 === 0) continue; // skip
  console.log(i);
}
console.log('반복문 종료');


while(true) {
  var n = +prompt('숫자를 입력!');
  
  if(n === 0) break;
  else if (n === 1) continue;

  alert('😛');
}
alert('끝났지롱')