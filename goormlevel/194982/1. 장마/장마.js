// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	let M = null;
	let houseHeight = [];
	let input = [];
	let count = 0;
	
	for await (const line of rl) {
		if(!N && !M){
			[N,M] = line.split(" ").map(Number);
		}else if(houseHeight.length === 0){
			houseHeight = line.split(" ").map(Number);
		}else{
			input.push(line);
			count++;
		}
		
		if(count === M){
			rl.close();
		}
		
	}
	console.log(solution(N, M, houseHeight, input));
	process.exit();
})();

/*
	문제 설계
	
	# waterHeight: 각 집별로 쌓인 물의 높이를 저장하고 있는 배열 (크기는 N+1이다)
	# rainDay: 각 집별로 언제 비가 왔는지 저장하고 있는 배열 (크기는 M+1이다)
	# houseHeight: 각 집의 높이값을 저장하고 있는 배열 (크기는 N+1이다)
	
	1. M개의 줄의 입력을 참고하여, 각각의 줄에 대해 다음을 수행한다.
	
	2. 첫번째 숫자부터 두번째 숫자까지의 waterHeight를 1증가한다.
	3. 시작된지 n일이라고 했을때, rainDay[n]에 첫번째 숫자부터 두번째 숫자까지 저장한다.
	
	4. 장마가 시작된지 3의 배수가 된 날인지 확인한다.
	
	4-1. 3의 배수가 아닌 경우, 1번으로 돌아간다.
	4-2. 3의 배수인 경우
		a. n일째라고 했을때, rainDay[n-2], rainDay[n-1], rainDay[n]에 저장되어 있는 값을 참고하여, 중복을 허용하지 않도록
		targetLocation에 저장한다.
		b. targetLocation에는 집의 번호들이 들어있으므로, 해당 번호들에 대한 waterHeight를 확인하고, 해당 값이 0보다 큰 경우,
		   해당값의 해당하는 waterHeight를 1감소한다.
	
	5. 모든 M개의 줄을 확인한 후, waterHeight배열을 참고하여, houseHeight를 waterHeight값 만큼 증가한다.
*/

function solution(N, M, houseHeight, input){
	let waterHeight = new Array(N+1).fill(0);
	let rainDay = new Array(M+1);
	let rainInfo = new Set(); // 몇일째 되는날 어느집에 비가 왔는지 체크하기 위한 변수
	
	input.forEach((info, index) => {
		const [start, end] = info.split(" ").map(Number);
		
		for(let i=start; i<=end; i++){
			waterHeight[i]++;
			rainInfo.add(i);
		}
		
		if((index+1) % 3 === 0){
			drainageSystem(index, rainInfo, waterHeight);
			rainInfo.clear();
		}
	});
	
	// 쌓여진 물의 높이 만큼 집의 높이를 증가하는 과정
	for(let i=1; i<=N; i++){
		houseHeight[i-1] += waterHeight[i];
	}
	
	return houseHeight.join(" ");
}

// 배수 시스템 함수
function drainageSystem(index, rainInfo, waterHeight){
	
	for(let j of rainInfo){
		if(waterHeight[j] > 0){
			waterHeight[j]--;
		}
	}
}