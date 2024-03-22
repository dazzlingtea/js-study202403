

// for (var i = 1; i <= 50; i++) {
//   console.log(i);
//   if (i > 10) {
//     break;
//   }
//   console.log(`${i} 회차`);
// }

console.log('==========================');

grape: for(var i = 0; i < 3; i++) {  // i: 0 j: 0
strawberry:  for(var j = 0; j < 2; j++) {
    if(i === j) {
      break grape;
    }
    console.log(`${i}, ${j}`);
  }
}



