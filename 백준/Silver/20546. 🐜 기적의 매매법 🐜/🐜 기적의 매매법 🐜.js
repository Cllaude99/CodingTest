const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
  문제 설계

  jh_result: 준현이의 최종자산
  sm_result: 성민이의 최종자산

  1. 준현이의 경우

    jh_cash: 준현이가 가지고 있는 현금을 의미하는 변수
    jh_stock_num: 준현이의 주식수를 의미하는 변수

    1. 입력으로 주어지는 14개의 주가에 대해 아래와 같은 과정으로 수행한다.
    2. 현재 주가의 금액 <= jh_cash인 경우, 아래를 수행한다.
       jh_stock_num += Math.floor(jh_cash / 현재주가의 금액)
       jh_cash = jh_cash % 현재주가의 금액
       이때 jh_cash가 0인 경우, 1번과정을 종료한다.
    3. jh_result에 js_cash + 1월 14일의 주가 * js_stock_num을 대입한다.


  2. 성민이의 경우

    sm_cash: 성민이가 가지고 있는 현금을 의미하는 변수
    sm_stock_num: 성민이의 주식수를 의미하는 변수
    increase: 몇일간 연속상승을 하였는지 확인하기 위한 변수
    decrease: 몇일간 연속하락을 하였는지 확인하기 위한 변수
    price: 주가의 금액을 저장하는 변수

    1. 먼저 입력으로 주어지는 첫번째 주가의 금액을 price에 저장한다.
    2. 이후 나오는 13개의 주가에 대해 아래와 같은 과정을 수행한다.

    3. price < 입력으로 주어진 주가의 금액
      decrease값에 0을 대입한다.
      increase값을 1증가한다.

      만약 increase값이 3인 경우, 
      sm_cash += 현재주가 금액 * sm_stock_num
      increase값에 0을 대입한다.

      price값에 입력으로 주어진 주가의 금액을 대입한다.


    4. 입력으로 주어진 주가의 금액 < price
      increase값에 0을 대입한다.
      decrease값을 1증가한다.

      만약 decrease값이 3인 경우 + sm_cash >= 현재주가의 금액인 경우
      sm_stock_num += Math.floor(sm_cash / 현재주가의 금액)
      sm_cash = sm_cash % 현재주가의 금액

      price값에 입력으로 주어진 주가의 금액을 대입한다.
    
    5. sm_result에 sm_cash + 1월14일의 주가 * sm_stock_num을 대입한다
  
  3. jh_result와 sm_result의 값을 비교하여 알맞는 결과 메세지를 반환한다.

*/

function solution(input) {
  const initial_cash = parseInt(input[0]);
  const stock_flow = input[1].split(' ').map(Number);
  const LAST_STOCK_PRICE = stock_flow[stock_flow.length - 1];

  let jh_cash = initial_cash;
  let sm_cash = initial_cash;
  let jh_stock_num = 0;
  let sm_stock_num = 0;

  for (let i = 0; i < stock_flow.length; i++) {
    if (stock_flow[i] <= jh_cash) {
      jh_stock_num += Math.floor(jh_cash / stock_flow[i]);
      jh_cash = jh_cash % stock_flow[i];
    }

    if (jh_cash === 0) break;
  }

  const jh_result = jh_cash + LAST_STOCK_PRICE * jh_stock_num;

  let increase = 0;
  let decrease = 0;
  let price = stock_flow[0];

  for (let i = 1; i < stock_flow.length; i++) {
    if (price < stock_flow[i]) {
      decrease = 0;
      increase += 1;

      if (increase >= 3) {
        sm_cash += stock_flow[i] * sm_stock_num;
        increase = 0;
      }
    } else if (stock_flow[i] < price) {
      increase = 0;
      decrease += 1;

      if (decrease >= 3 && sm_cash >= stock_flow[i]) {
        sm_stock_num += Math.floor(sm_cash / stock_flow[i]);
        sm_cash = sm_cash % stock_flow[i];
      }
    } else {
      increase = 0;
      decrease = 0;
    }
    price = stock_flow[i];
  }
  const sm_result = sm_cash + LAST_STOCK_PRICE * sm_stock_num;

  if (jh_result === sm_result) {
    return 'SAMESAME';
  } else if (jh_result < sm_result) {
    return 'TIMING';
  } else {
    return 'BNP';
  }
}

console.log(solution(input));
