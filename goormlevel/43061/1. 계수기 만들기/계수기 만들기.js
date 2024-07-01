// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N = null;
let A = null;
let counter = null;
let K = null;

rl.on("line", function(line) {
	if(!N){
		N = +line;
	}else if(!A){
		A = line.split(" ").map(Number);
	}else if(!counter){
		counter = line.split(" ").map(Number);
	}else{
		K = +line;
		rl.close();
	}
}).on("close", function() {
	console.log(solution(N, A, counter, K));
	process.exit();
});

/*
	문제설계
	
	# counter: 계수기
	# A: i번째 자리에 표시할 수 있는 숫자
	
	1. 아래의 과정을 K번 수행한다.
	
	2. N-1번째 자리의 값을 1증가한다.
	3. N-1번째 자리의 값부터 1번째 자리의 값까지 확인해가며, 표시할 수 있는 숫자인지 확인한다.
	4-1. 해당 자릿수가 표시할 수 범위를 넘어간 경우
	-  첫번째 자리가 아닌 경우
	   	해당 자릿수의 값을 0으로 수정한다.
		 	(해당 자릿수 - 1)번째 값을 1증가한다.
			3번 과정으로 돌아간다.
			
	-  첫번째 자리인 경우
	   해당 자릿수의 값을 0으로 수정한다.
		 반복문을 종료한다.
	4-2. 해당 자릿수가 표시할 수 있는 범위를 넘어가지 않은 경우에는 2번과정으로 돌아간다.
	
	5. 최종적으로 계수기에 표시된 숫자를 처음부터 출력한다
*/

function solution(N, A, counter, K){
	while(K > 0){
		counter[N-1]++;
		
		for(let i=N-1; i>=0; i--){
			if(counter[i] <= A[i]) break;
			
			counter[i] = 0;
			if(i !== 0) counter[i-1]++;
		}
		
		K--;
	}
	
	return counter.join("");
}