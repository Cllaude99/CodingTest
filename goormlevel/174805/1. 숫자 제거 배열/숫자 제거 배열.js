// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	let count = 0;
	
	for await (const line of rl) {
		if(count !== 2){
			input.push(line);
			count++;
		}
		if(count === 2){
			rl.close();
		}
	}
	console.log(solution(input));
	process.exit();
})();

function solution(input){
	const [N, K] = input[0].split(" ");
	const arr = input[1].split(" ");
	const result = [];
	
	for(let i=0; i<arr.length; i++){
		if(!arr[i].includes(K)){
			result.push(arr[i]);
		}
	}
	
	return result.length;
}
