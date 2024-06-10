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
	const [first, second] = input[0].split(" ").map(Number);
	
	return first + second;
}