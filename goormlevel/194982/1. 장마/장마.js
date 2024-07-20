// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null; // 집의 개수
	let M = null; // 장마 기간
	let height = null; // 마을의 땅 높이
	let rainInfo = []; // 장마가 내린 위치에 대한 정보
	let count = 0;
	
	for await (const line of rl) {
		if(N === null && M === null){
			[N, M] = line.split(" ").map(Number);
		}else if(height === null){
			height = line.split(" ").map(Number);
		}else{
			rainInfo.push(line);
			count++;
		}
		
		if(count === M){
			rl.close();
		}
	}
	console.log(solution(height, rainInfo))
	process.exit();
})();


function solution(height, rainInfo){
	let beforeRain = {}; // 이전에 비가 내린 위치에 대한 정보 (위치 : 내린 횟수)
	
	rainInfo.forEach((info, index) => {
		const [s, e] = info.split(" ").map(Number);
		
		for(let i=s-1; i<=e-1; i++){
			height[i]++;
			beforeRain[i] === undefined ? (beforeRain[i] = 1) : beforeRain[i]++;
		}
		
		// 장마가 시작된 지 3의 배수가 되는 날
		if((index+1) % 3 === 0){
			Object.keys(beforeRain).forEach((h) => height[h]--);
			beforeRain = {};
		}
	});
	
	return height.join(" ");
}