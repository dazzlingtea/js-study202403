
// 객체 생성
// 우리 집 강아지 정보 저장

var name = '뽀삐';
var kind  = '진돗개';
var age = 3;
var injection = true;
var favorite = ['산책', '간식'];
var bark = () => console.log('왈왈!');

var dog = {
  name: '뽀삐',
  favorite: ['산책', '간식'],   // 순서가 바껴도 상관 없음
  kind: '진돗개',
  age: 3,
  injection: true,
  bark: () => console.log('왈왈!'),
}

console.log(dog.name);      // 뽀삐
console.log(dog.favorite);  // [ '산책', '간식' ]

// 우리 집 고양이 정보 저장
var cat = {
  kind: '코숏',
  favorite: ['낮잠', '방 어지르기'],   // 순서가 바껴도 상관 없음
  name: '콩순이',
  age: 2,
  injection: true,
  hate: null,
  hair: {}
}

console.log(cat.name);      // 콩순이
console.log(cat.favorite);  // [ '낮잠', '방 어지르기' ]



var 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: 'abc',
    닉네임: '깜찍이',
    가입일자: '2023-12-12'
  },
  글내용: 'ㅇㄹㅇㄹㅇ',
  작성일자: '2024-03-26',
}

console.log('=========================');

// 객체에 저장된 데이터 참조(조회)

console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);  // 방 어지르기


// 데이터 타입: 어떤 데이터가 할 수 있는 일을 정의
dog.age++;
dog.name++;      // 문자열은 ++ 안되니까 하면 안 됨
!dog.injection;  // 논리타입이라 가능
// dog.kind.push('메롱'); // 배열 메서드 push 사용 불가
dog.favorite.push('꼬리흔들기'); // 배열이라 가능
cat.favorite.splice(0, 1);       // 배열 가능


// slice는 복사본이라서 dog.favorite에 변화 없음
dog.favorite.slice(0).splice(1,1).reverse();  // [ '산책', '간식', '꼬리흔들기' ]
dog.favorite.slice(0).splice(1,1);  // [ '산책', '간식', '꼬리흔들기' ]
console.log(dog.favorite);

dog.favorite.splice(1,1);  // [ '산책', '꼬리흔들기' ]
dog.favorite.reverse();  // [ '꼬리흔들기', '산책' ]
console.log(dog.favorite);


// 객체를 참조하는 두번째 방법
console.log('======================');

console.log(dog.name);
console.log(dog['name']); // ['키'] 문자열로 작성해야 함
// console.log(dog[key]);  // 뽀삐
// console.log(dog[name]);

// 프로퍼티 수정 (기존 key로 접근)
console.log('========================');

dog.age = 4;
cat.favorite[1] = '실뭉치';

console.log(dog);
console.log(cat);

// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
console.log('==========================');

cat.friend = '철수';  // 객체에 추가된 것을 볼 수 있음
console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;
console.log(cat);



