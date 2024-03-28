// length 6인 trader 배열
// traders[i] : trader객체(name, city), year, value
const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
const result1 = traders
  .filter((trd) => trd.year === 2022)
  .map((trd) => trd.trader);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const result2 = [];
traders.forEach((trd) => {
  if (!result2.includes(trd.trader.city)) {
    result2.push(trd.trader.city);
  }
});

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
const result3 = traders
  .filter((trd) => trd.trader.city === "대전")
  .map((trd) => ({ name: trd.trader.name, city: trd.trader.city }));

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const result4 = [];
traders
  .map((trd) => trd.trader.name)
  .forEach((traderName) => {
    if (!result4.includes(traderName)) {
      result4.push(traderName);
    }
  });

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// let total = 0;
// traders
//   .filter((trd) => trd.trader.city === "서울")
//   .forEach((trd) => {
//     total += trd.value;
//   });

const total = traders
              .filter(trs => trs.trader.city === '서울')
              .reduce((total, trs) => total + trs.value, 0);

console.log(`연습5 서울 총 거래액 : ${total}`);


console.log(result1);
console.log("=====================");
console.log(result2);
console.log("=====================");
console.log(result3);
// console.log(result3.forEach(el => console.log(el)));
console.log("=====================");
console.log(result4);
console.log("=====================");
console.log(`거래총액: ${total}원`);


console.log("=====================");


// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
const totalInDj2023 = traders
  .filter((trd) => trd.trader.city === "대전" && trd.year === 2023)
  .map((trd) => trd.value)
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
console.log(`2023년 대전 거래총액: ${totalInDj2023}원`);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const q2 = traders
  .filter((trd) => trd.trader.city === "부산")
  .map((trd) => trd.trader.name);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
let maxValueTrd = traders[0];
traders.forEach((trd) => {
  if (maxValueTrd.value < trd.value) maxValueTrd = trd;
});

console.log(
  `최고액 거래자: (${maxValueTrd.trader.name}, ${maxValueTrd.trader.city}), 거래액: ${maxValueTrd.value}`
);

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
// 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
const q4 = {};

traders.forEach((trd) => {
  let trdCity = trd.trader.city;
  if (trdCity in q4) q4[trdCity] += trd.value;
  else q4[trdCity] = trd.value;
});
console.log(q4);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요.
// 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
const q5 = {};

traders
  .filter((trd) => trd.value >= 700000)
  .forEach((trd) => {
    // console.log('trd:', trd.trader);
    let trdYear = trd.year.toString();
    if (trdYear in q5) q5[trdYear].push(trd);
    else q5[trdYear] = [trd];
    // console.log('q5:',q5);
  });
console.log(JSON.stringify(q5, null, 2));

// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.
// 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
// const q6 = {};
// 거래자이름 -> reduce 토탈밸류, 거래자, {}

console.log("=====================");

const totalByPerson = traders.reduce((total, trs) => {
  const trdPerson = trs.trader.name;
  total[trdPerson] = (total[trdPerson] || 0) + trs.value;
  return total;
}, {});
// console.log(totalByPerson);

const countByPerson = traders.reduce((count, trs) => {
  const trdPerson = trs.trader.name;
  count[trdPerson] = (count[trdPerson] || 0) + 1;
  return count;
}, {});
// console.log(countByPerson);

const averageByPerson = traders.reduce((result, trs) => {
  const trdPerson = trs.trader.name;
  // 해당 거래자의 평균 거래액 계산하여 결과에 추가
  result[trdPerson] = totalByPerson[trdPerson] / countByPerson[trdPerson];
  
  return result;
}, {});

console.log('평균 거래액');
console.log(JSON.stringify(averageByPerson, null, 2));



// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

function mostFrequentTrsUser(array, year) {
  
  const filteredArr = array.filter(trs => trs.year === year);

  for(let trs of filteredArr) {
    const trsName = trs.trader.name;
    if(filteredArr.some(ftrs => ftrs.trader.name === trsName)) {
      trs.count = (trs.count || 0) + 1;
    }
  }

  const maxTrsUser = filteredArr.reduce((maxTrsUser, trs) => {
      if(!maxTrsUser || maxTrsUser.count < trs.count) return trs;
      else return maxTrsUser;
    }, undefined);
  console.log(`${year}년 가장 많은 거래: ${maxTrsUser.trader.name} 거래 ${maxTrsUser.count}회`);
}
mostFrequentTrsUser(traders, 2022);
mostFrequentTrsUser(traders, 2023);

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
const getMiddleTrs = traders.sort((a, b) => a.value - b.value)[Math.floor(traders.length/2)];

console.log(`Q8. 거래액 중간값 거래 : ${getMiddleTrs}`);
console.log(JSON.stringify(getMiddleTrs, null, 2));

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
const countTrsByCity = traders.reduce((count, trs) => {
  count[trs.trader.city] ? count[trs.trader.city]++ : count[trs.trader.city] = 1;
  return count;
}, {});

console.log('Q9 도시별 거래 수: ' + countTrsByCity);
console.log(JSON.stringify(countTrsByCity, null, 2));

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요.
// 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
console.log("=====================");

const sortedList = traders.sort((a, b) => a.value - b.value);

console.log(sortedList);