// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	const input = [];
	let count = 0;
	
	for await (const line of rl) {
		if(!N){
			N = +line;
		}else if(input.length === 0){
			input.push(line);
		}
		count++;
		
		if(count === 2){
			rl.close();
		}
	}
	
	console.log(solution(input));
	process.exit();
})();

function solution(input){
	const sum = input[0].split(" ").map(Number).reduce((acc, cur) => acc + cur, 0);
	
	return caculate_8(sum);
}

function caculate_8(num){
	const result = [];
	
	while(num >= 8){
		result.push(num % 8);
		num = Math.floor(num / 8);
	}
	
	result.push(num);
	return result.reverse().join("");
}