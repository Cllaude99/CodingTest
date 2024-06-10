// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	
	for await (const line of rl) {
		input.push(line.split(" ").map(Number));
		rl.close();
	}
	console.log(solution(input));
	process.exit();
})();


function solution(input){
	const [first, second] = input[0];
	
	let sum = first + second;
	
	sum = sum.toFixed(7);
	sum = sum.slice(0, -1);
	
	return sum;
}
