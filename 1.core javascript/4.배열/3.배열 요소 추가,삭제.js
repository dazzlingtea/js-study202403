
var pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// push() : 배열 맨 끝에 데이터 추가
pets.push('징징이');
pets.push('어흥이', '거부긔', '닭둘긔');

console.log(pets);

// pop() : 배열 맨 끝 데이터 삭제
var myPet1 = pets.pop();
pets.pop();
var myPet2 = pets.pop();
console.log(pets);
console.log(myPet1);
console.log(myPet2);


// shift() : 배열의 맨 첫데이터 삭제
// unshift() : 배열의 맨 첫번째에 데이터 추가

var myPet3 = pets.shift();
console.log(pets);   // [ '야옹이', '쩝쩝이', '징징이' ]

pets.unshift('뽈뽈이', '몰랑이');
console.log(pets);   // [ '뽈뽈이', '몰랑이', '야옹이', '쩝쩝이', '징징이' ]
console.log(myPet3);


