// 한 변의 길이
// var x = +prompt(`한 변[1] `);
// var y = +prompt(`한 변[2] `);

// var result = '';

// for(var i = 1; i < x; i++) {
//   for(var j = 1; j < y; j++) {
//     result += `* `;
//   }
//   result += `\n`;
// }
// alert(result);

var x = 4;
var y = 4;
var result = '';

for(var i = 0; i < x; i++) {
  for(var j = 0; j < y; j++) {
    result += `* `;
  }
  result += `\n`;
}

console.log(result);