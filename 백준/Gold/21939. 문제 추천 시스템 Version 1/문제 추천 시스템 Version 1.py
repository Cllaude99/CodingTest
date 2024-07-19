import heapq
import sys
input = sys.stdin.read

RECOMMEND = 'recommend'
ADD = 'add'
SOLVED = 'solved'

def solution():
    input_data = input().strip().split('\n')
    N = int(input_data[0])
    questions = input_data[1:N+1]
    commands = input_data[N+1:]

    problem_map = {}
    max_heap = []
    min_heap = []

    for info in questions:
        P, L = map(int, info.split())
        add_problem(P, L, problem_map, max_heap, min_heap)

    result = []

    for command in commands:
        parts = command.split()
        menu = parts[0]

        if menu == RECOMMEND:
            x = int(parts[1])
            if x == 1:
                result.append(recommend_highest(problem_map, max_heap))
            else:
                result.append(recommend_lowest(problem_map, min_heap))
        elif menu == ADD:
            P, L = int(parts[1]), int(parts[2])
            add_problem(P, L, problem_map, max_heap, min_heap)
        elif menu == SOLVED:
            P = int(parts[1])
            solve_problem(P, problem_map)

    print('\n'.join(map(str, result)))

def add_problem(P, L, problem_map, max_heap, min_heap):
    problem_map[P] = L
    heapq.heappush(max_heap, (-L, -P))
    heapq.heappush(min_heap, (L, P))

def solve_problem(P, problem_map):
    if P in problem_map:
        del problem_map[P]

def recommend_highest(problem_map, max_heap):
    while max_heap:
        L, P = heapq.heappop(max_heap)
        L, P = -L, -P
        if P in problem_map and problem_map[P] == L:
            heapq.heappush(max_heap, (-L, -P))
            return P
    return None

def recommend_lowest(problem_map, min_heap):
    while min_heap:
        L, P = heapq.heappop(min_heap)
        if P in problem_map and problem_map[P] == L:
            heapq.heappush(min_heap, (L, P))
            return P
    return None

if __name__ == "__main__":
    solution()
