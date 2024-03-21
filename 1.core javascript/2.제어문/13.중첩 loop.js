

var count = 0;

for (var i = 0; i < 4; i++) { // 4회 반복
  for (var j = 0; j < 2; j++) { // 2회 반복
    // count++;
    // console.log('😛 ' + ++count);
    console.log(`${i}, ${j}`);
  }
}

// 구구단 2단
var level = 2; // 단수

console.log(`# 구구단 ${level}단`);
for (var line = 1; line <= 9; line++) {
  console.log(`-> ${level} x ${line} = ${level * line}`);
}
console.log('======================');

// 구구단 
var level = 2; // 단수

for(var level = 2; level <= 9; level++) {
  console.log('--------');
  console.log(`# 구구단 ${level}단`);
  for (var line = 1; line <= 9; line++) {
    console.log(`-> ${level} x ${line} = ${level * line}`);
  }
}
console.log('======================');


var count = 0;
for (var i = 0; i < 3; i++) { // 3회 반복
  for (var j = 0; j < 2; j++) { // 2회 반복
    console.log('메롱' + ++count);
    // console.log(`${i}, ${j}`);
  }
  console.log('냠냠' + count);
}

for(var x = 1;  x <= 3; x++) {
  console.log('하하');              // 3회
  for(var y = 1; y <= 5; y++) {
    for(var z = 1; z <= 2; z++) {
      console.log('히히');          // 30회 3*5*2
    }
    console.log('호호');            // 15회 3*5
  }
}