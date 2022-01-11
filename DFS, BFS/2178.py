#미로 탐색
from collections import deque
def bfs(x,y):
    queue = deque()
    queue.append((x,y))
    while queue:
        p, q = queue.popleft()
        for i in range(4):
            nx = p+dx[i]
            ny = q+dy[i]
            if nx < 0 or nx >=n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[p][q] + 1
                queue.append((nx, ny))
    return

graph = []
dx = [-1,1,0,0]
dy = [0,0,-1,1]
n, m = map(int, input().split())
for _ in range(n):
    graph.append(list(map(int, input())))
bfs(0,0)
print(graph[n-1][m-1])
