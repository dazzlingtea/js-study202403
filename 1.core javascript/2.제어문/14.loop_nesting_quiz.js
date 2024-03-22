// 한 변의 길이
// var x = +prompt(`한 변[1]: `);
// var y = +prompt(`한 변[2]: `);

// var result = '';

// for(var i = 1; i < x; i++) {
//   for(var j = 1; j < y; j++) {
//     result += `* `;
//   }
//   result += `\n`;
// }
// alert(result);

var x = 3;
var y = 5;
var result = '';

for(var i = 0; i < x; i++) {
  for(var j = 0; j < y; j++) {
    result += `* `;
  }
  result += `\n`;
}

console.log(result);



// // 가로길이, 세로길이
// var width = +prompt('한 변 (1): ');
// var height = +prompt('한 변 (2): ');

// // 사각형을 저장할 변수
// var rectangle = '';


// for (var i = 0; i < width; i++) {
//     // .... 3번
//     for (var j = 0; j < height; j++) {
//         // .... 15번
//         rectangle += '* ';
//     }
//     rectangle += '\n';
// }

// alert(rectangle);
