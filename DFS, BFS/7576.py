#토마토
from collections import deque
def bfs():
    global cnt
    while queue:
        p, q = queue.popleft()
        for i in range(4):
            nx = p+dx[i]
            ny = q+dy[i]
            if nx < 0 or nx >=n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 0:
                graph[nx][ny] = graph[p][q] + 1
                queue.append((nx, ny))
    return



graph = []
dx = [-1,1,0,0]
dy = [0,0,-1,1]
cnt = 0
result = []
queue = deque()
m, n = map(int, input().split())
for _ in range(n):
    graph.append(list(map(int, input().split())))
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            queue.append((i,j))
bfs()
for i in range(n):
    if 0 in graph[i]:
        print(-1)
        break
else:
    for i in range(n):
        result.append(max(graph[i]))
    print(max(result)-1)
