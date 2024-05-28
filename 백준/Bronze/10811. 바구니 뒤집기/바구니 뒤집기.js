const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  let basket = Array.from({ length: N }, (_, index) => index + 1);

  for (let i = 1; i <= M; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    let copy_basket = JSON.parse(JSON.stringify(basket));
    let k = 0;
    for (let i = start - 1; i <= end - 1; i++) {
      copy_basket[i] = basket[end - 1 - k];
      k++;
    }
    basket = copy_basket;
  }

  return basket.join(' ');
}

console.log(solution(input));
