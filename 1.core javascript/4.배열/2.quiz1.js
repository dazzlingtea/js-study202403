

var scores = [83, 99, 100, 57,];

var sum = 0, avg;

for(var score of scores) {
  sum += score;
}
avg = sum / scores.length;

console.log(`총점 : ${sum}점, 평균 : ${avg}점`);


