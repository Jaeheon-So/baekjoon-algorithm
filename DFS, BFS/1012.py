#유기농 배추
from collections import deque
def bfs(x,y):
    queue = deque()
    queue.append((x,y))
    graph[x][y] = 0
    while queue:
        p, q = queue.popleft()
        for i in range(4):
            nx = p+dx[i]
            ny = q+dy[i]
            if nx < 0 or nx >=n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append((nx, ny))
    return

graph = []
dx = [-1,1,0,0]
dy = [0,0,-1,1]
t = int(input())
for _ in range(t):
    result = 0
    m, n, k = map(int, input().split())
    graph = [[0 for j in range(m)] for i in range(n)]
    for _ in range(k):
        x, y = map(int, input().split())
        graph[y][x] = 1
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                bfs(i,j)
                result += 1
    print(result)
