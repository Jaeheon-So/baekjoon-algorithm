#숨바꼭질
from collections import deque
def bfs(x):
    graph[x] = 1
    queue = deque()
    queue.append(x)
    while queue:
        x = queue.popleft()
        for nx in (x-1, x+1, 2*x):
            if 0<=nx<100001 and graph[nx] == 0:
                graph[nx] = graph[x] + 1
                queue.append(nx)
    return graph[k]-1
graph = [0 for _ in range(100001)]
n, k = map(int, input().split())
print(bfs(n))
