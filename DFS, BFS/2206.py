# 벽 부수고 이동하기***
from collections import deque
def bfs(x, y, break_cnt):
    queue = deque()
    queue.append((x, y, break_cnt))
    visit = [[[0] * 2 for _ in range(m)] for _ in range(n)]
    visit[x][y][break_cnt] = 1 

    while queue:
        x, y, break_cnt = queue.popleft()
        if x == n-1 and y == m-1:
            return visit[x][y][break_cnt]
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                if graph[nx][ny] == 1 and break_cnt == 1: 
                    visit[nx][ny][0] = visit[x][y][break_cnt] + 1
                    queue.append([nx, ny, 0])
                elif graph[nx][ny] == 0 and visit[nx][ny][break_cnt] == 0: 
                    visit[nx][ny][break_cnt] = visit[x][y][break_cnt] + 1
                    queue.append([nx, ny, break_cnt])
    return -1

graph = []
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
n, m = map(int, input().split())
for _ in range(n):
    graph.append(list(map(int, input())))
print(bfs(0, 0, 1))
