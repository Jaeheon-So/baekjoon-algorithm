#유기농 배추
from collections import deque
def bfs(x,y):
    queue = deque()
    queue.append((x,y))
    graph[x][y] = 0
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0<=nx<n and 0<=ny<m and graph[nx][ny] == 1:
                queue.append((nx,ny))
                graph[nx][ny] = 0
    return

graph = []
dx = [-1,1, 0, 0]
dy = [0,0,-1,1]
t = int(input())
for _ in range(t):
    cnt = 0
    m, n, k = map(int, input().split())
    graph = [[0 for _ in  range(m)] for _ in range(n)]
    for _ in range(k):
        x, y =  map(int, input().split())
        graph[y][x] = 1
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                bfs(i,j)
                cnt += 1
    print(cnt)