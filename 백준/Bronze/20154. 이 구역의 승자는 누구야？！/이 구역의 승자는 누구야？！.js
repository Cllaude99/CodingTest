const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let K = null;

rl.on('line', function (line) {
  K = line;
  rl.close();
}).on('close', function () {
  console.log(solution(K));
  process.exit();
});

function solution(K) {
  const alphabet = {
    A: 3,
    B: 2,
    C: 1,
    D: 2,
    E: 3,
    F: 3,
    G: 3,
    H: 3,
    I: 1,
    J: 1,
    K: 3,
    L: 1,
    M: 3,
    N: 3,
    O: 1,
    P: 2,
    Q: 2,
    R: 2,
    S: 1,
    T: 2,
    U: 1,
    V: 1,
    W: 2,
    X: 2,
    Y: 2,
    Z: 1,
  };

  let arr = K.split('').map((word) => alphabet[word]);

  while (arr.length > 1) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i + 1 < arr.length) {
        const first = arr[i];
        const second = arr[i + 1];
        new_arr.push((first + second) % 10);
        i++;
      } else {
        new_arr.push(arr[i]);
      }
    }

    arr = new_arr;
  }

  if (arr[0] % 2 !== 0) {
    return "I'm a winner!";
  } else {
    return "You're the winner?";
  }
}
