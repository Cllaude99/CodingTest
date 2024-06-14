// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	let M = null;
	let input = []; // 과목 번호와 점수에 대한 정보
	let count = 0;
	
	for await (const line of rl) {
		if(!N && !M){
			[N, M] = line.split(" ").map(Number);
		}else{
			input.push(line);
			count++;
		}
		
		if(count === N){
			rl.close();
		}
	}
	console.log(solution(input));
	process.exit();
})();

/*
	문제설계
	
	# score: 과목별 시험점수를 저장하기 위한 객체 (예. score[1] : [1,2,3]은 1번과목은 1,2,3점을 받았음을 의미)
	# avg: score객체의 키값을 확인하여 각 과목별 평균점수를 저장하는데 사용하는 변수로 배열값은 [과목번호, 평균점수] 의 형태로 저장한다.
	
	
	1. N개의 입력에 대해 score객체에 과목별 점수를 등록한다.
	
	2. score객체의 키값을 확인하여 각 과목별로 평균점수를 구해 avg배열에 저장한다.
	
	3. avg배열을 평균점수를 기준으로 내림차순 정렬하고, 평균점수가 동일한 경우 과목번호가 낮은 순으로 정렬한다.
	
	4. avg배열의 처음 배열값에 있는 과목번호를 출력하고 종료한다.
*/

function solution(input){
	const score = {}; // 과목별 시험 점수 (키: 과목번호 , 값: 해당과목의 점수)
	let avg = [];
	
	for(let i=0; i<input.length; i++){
		const [num, value] = input[i].split(" ").map(Number); // num은 과목번호, value는 과목점수를 의미
		
		/* 과목번호에 해당하는 score객체의 값에 과목점수를 저장 */
		if(score[num] === undefined){
			score[num] = [value];
		}else{
			score[num].push(value);
		}
	}
	
	// score객체의 키값을 참고하여 평균점수를 구해 avg배열에 추가하는 과정
	Object.keys(score).forEach((num) => {
		const scoreList = score[num]; // num번 과목의 점수 리스트
		
		const sum = scoreList.reduce((acc, cur) => acc + cur, 0); // num번 과목의 점수 합
		
		avg.push([+num, sum / scoreList.length]); // 평균점수를 구해 avg배열에 [과목번호, 평균점수]의 형태로 추가
	});
	
	
	// 평균점수 기준 내림차순 정렬하고 평균점수 동일시 과목번호 기준 오름차순 정렬
	avg.sort((a,b) => {
		if(a[1] === b[1]) return a[0] - b[0];
		else return b[1] - a[1];
	});
	
	return avg[0][0];
}