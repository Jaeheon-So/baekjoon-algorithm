#토마토2
from collections import deque
def bfs():
    while queue:
        p, q, r = queue.popleft()
        for i in range(6):
            nx = p+dx[i]
            ny = q+dy[i]
            nz = r+dz[i]
            if nx < 0 or nx >= h or ny < 0 or ny >= n or nz < 0 or nz >= m:
                continue
            if graph[nx][ny][nz] == 0:
                graph[nx][ny][nz] = graph[p][q][r] + 1
                queue.append((nx, ny, nz))
    return

graph = []
dx = [-1,1,0,0,0,0]
dy = [0,0,-1,1,0,0]
dz = [0,0,0,0,-1,1]
queue = deque()
result = 0
m, n, h = map(int, input().split())
for _ in range(h):
    temp = []
    for _ in range(n):
        temp.append(list(map(int, input().split())))
    graph.append(temp)

for i in range(h):
    for j in range(n):
        for k in range(m):
            if graph[i][j][k] == 1:
                queue.append((i,j,k))
bfs()
for i in graph:
    for j in i:
        for k in j:
            if k==0:
                print(-1)
                exit(0)
        result = max(result,max(j))
print(result-1)


            

