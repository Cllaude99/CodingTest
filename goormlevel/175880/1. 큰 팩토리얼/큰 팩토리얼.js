// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	console.log(solution(input));
	process.exit();
})();


function solution(input){
	const num = +input[0];
	let answer = 1;
	
	for(let i=1; i<=num; i++){
		answer = (answer*i)%1000000007;
	}
	
	return answer;
}

