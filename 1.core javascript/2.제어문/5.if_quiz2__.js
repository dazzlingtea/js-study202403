
var nA = +prompt('정수 A');
var nB = +prompt('정수 B');
var nC = +prompt('정수 C');

if (nA !== nB && nA !== nC && nB !== nC) {
  alert('모두 다른 값입니다.');
} else {
  if (nA === nB) {
    if(nA === nC) {
      alert('3개 값이 모두 같습니다.');
    } else {
      alert('2개 값이 같습니다.');
    }
  } else {
    alert('2개 값이 같습니다.');
  }
}

alert('정수 2개 입력 후 두값의 차이를 구하라');
var nA2 = +prompt('정수 A');
var nB2 = +prompt('정수 B');
// var diff = Math.abs(nA2-nB2);

if(nA2 < nB2) {
  alert(`두 값의 차이는 ${nB2 - nA2}입니다.`);
} else {
  alert(`두 값의 차이는 ${nA2 - nB2}입니다.`);
}


alert('정수 3개 입력 후 최소값 구하기');
var nA3 = +prompt('정수 A');
var nB3 = +prompt('정수 B');
var nC3 = +prompt('정수 C');

if(nA3 > nB3) {
  if(nB3 > nC3) {
    alert(`최소값은 ${nC3}입니다.`);
  } else if (nC3 > nA3) {
    alert(`최소값은 ${nB3}입니다.`);
  } else {
    alert(`최소값은 ${nB3}입니다.`);
  }
} else if (nB3 > nC3) {
  if(nA3 > nC3) {
    alert(`최소값은 ${nC3}입니다.`);
  } else {
    alert(`최소값은 ${nA3}입니다.`);
  }
} else {
  alert(`최소값은 ${nA3}입니다.`);
}