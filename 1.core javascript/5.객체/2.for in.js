

var phone = {
  company: '삼성',
  color: '펄 화이트',
  mode: '갤럭시 S24 Ultra',
  price: 1200000
}


// 값이 아닌 키가 반복됨
for (var data in phone) {
  // console.log(data);      // key 반복 
  console.log(phone.data); // undefined
  console.log(phone[data]); // 값 출력
  // console.log(typeof data); // string
}

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하고 싶음
console.log('================================');
console.log('memory' in phone);


if(!('memory' in phone)) { // 괄호 없으면 !'memory' 되고 !truthy라 false
  phone.memory = '32GB';
}
console.log(phone);


var newKey = 'memory';
if(!(newKey in phone)) { 
  phone[newKey] = '32GB'; // 변수를  ' ' 쓸거면 객체에선 [ ] 사용해야
}
console.log(phone);