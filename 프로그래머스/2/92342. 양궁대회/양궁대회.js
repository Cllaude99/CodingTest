/*
    # 요구사항 분석
    
    어피치와 라이언은 모두 n발의 화살을 쏘며, 어피치가 먼저 화살을 쏜다

    k점에 대한 점수는 아래와 같이 부여된다.
    - 기본적으로 k점을 많이 맞춘 사람이 k점을 가져가게 된다. (k점을 가져감에 주의)
    - 어피치와 라이언 모두 k점을 맞춘 횟수가 동일하다면 어피치가 k점을 획득하게 된다.
    - 다만, 어피치, 라이언 모두 k점을 맞추지 못했다면 둘 다 점수 획득이 되지 않는다.
    
    최종점수는 다음과 같이 산정한다.
    - 각 과녁 점수에 대해서 두 선수의 최종점수를 계산한다.
    - 두 선수의 최종 점수가 동일할 경우 어피치가 우승하게 된다.
    
    최종적으로 반환해야하는 값
    - 라이언이 가장 큰 점수차로 우승하기 위해 n발의 화살을 어떤 과녁 점수에 맞혀야 하는지를 리턴한다
    (10점부터 0점순으로)
    - 이때, 가장 큰 점수 차이로 우승할 수 있는 방법이 여러가지인 경우, 가장 낮은 점수를 더 많이 맞힌 경우를 
    return한다.
    - 만약 라이언이 이기는 수가 존재하지 않는다면 [-1]을 리턴한다. 
    
    # 문제 설계
*/

function solution(n, info) {
    let maxDiff = -1;
    let answer = Array(11).fill(0);

    function dfs(index, arrowsLeft, lionScore, apeachScore, lionHits) {
        if (index === 11) {
            // 남은 화살이 있을 경우, 0점에 할당
            lionHits[10] += arrowsLeft;

            if (lionScore > apeachScore) {
                const diff = lionScore - apeachScore;
                if (diff > maxDiff) {
                    maxDiff = diff;
                    answer = lionHits.slice();
                } else if (diff === maxDiff) {
                    for (let i = 10; i >= 0; i--) {
                        if (lionHits[i] > answer[i]) {
                            answer = lionHits.slice();
                            break;
                        } else if (lionHits[i] < answer[i]) {
                            break;
                        }
                    }
                }
            }

            // 남은 화살 복구 (백트래킹)
            lionHits[10] -= arrowsLeft;

            return;
        }

        // 라이언이 점수를 가져갈 수 있는 경우
        if (arrowsLeft > info[index]) {
            lionHits[index] = info[index] + 1;
            dfs(
                index + 1,
                arrowsLeft - lionHits[index],
                lionScore + (10 - index),
                apeachScore,
                lionHits
            );
            lionHits[index] = 0;
        }

        // 라이언이 점수를 포기하는 경우
        const apeachPoints = info[index] > 0 ? 10 - index : 0;
        dfs(
            index + 1,
            arrowsLeft,
            lionScore,
            apeachScore + apeachPoints,
            lionHits
        );
    }

    dfs(0, n, 0, 0, Array(11).fill(0));

    if (maxDiff === -1) {
        return [-1];
    }

    return answer;
}
