// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	
	for await (const line of rl) {
		N = +line;
		rl.close();
	}
	console.log(solution(N));
	process.exit();
})();

/*
	문제 설계
	
	1. 총 N개의 줄을 출력해야하며, 각 줄은 N개의 숫자로 이루어져 있어야 한다.
	2. n번째 줄의 시작 숫자는 N*(n-1) + 1이며, n은 1부터 시작한다.
*/

function solution(N){
	const answer = [];
	
	for(let r=1; r<=N; r++){
		let row = []; // r번째 줄에 들어갈 숫자들
		
		for(let num=N*(r-1) + 1; num<N*(r-1) + 1 + N; num++){
			row.push(num);
		}
		
		answer.push(row.join(" "));
	}
	
	return answer.join("\n");
}