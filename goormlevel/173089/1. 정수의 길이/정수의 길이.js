const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function (line) {
	input.push(line);
	
	rl.close();
}).on("close", function (){
	console.log(solution(input));
	process.exit();
});


function solution(input){
	return input[0].length;
}