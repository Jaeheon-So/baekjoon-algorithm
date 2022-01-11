#나이트의 이동
from collections import deque
def bfs(x, y):
    queue = deque()
    queue.append((x, y))
    while queue:
        x, y = queue.popleft()
        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0<=nx<l and 0<=ny<l and graph[nx][ny] == 0:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
    return graph[go_x][go_y] - 1

dx = [-2, -1, 1, 2, 2, 1, -1, -2]
dy = [1, 2, 2, 1, -1, -2, -2, -1]
t = int(input())
for _ in range(t):
    graph = []
    l = int(input())
    cur_x, cur_y = map(int, input().split())
    go_x, go_y = map(int, input().split())
    graph = [[0 for _ in range(l)] for _ in range(l)]
    graph[cur_x][cur_y] = 1
    print(bfs(cur_x, cur_y))