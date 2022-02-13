#단지번호붙이기
def dfs(x, y):
    global cnt
    if x<0 or x>=n or y<0 or y>=n:
        return False
    if graph[x][y] == 1:
        cnt += 1
        graph[x][y] = 0
        for i in range(4):
            dfs(x+dx[i],y+dy[i])
        return True
    return False

graph = []
dx = [-1,1,0,0]
dy = [0,0,-1,1]
result = []
cnt = 0
n = int(input())
for _ in range(n):
    graph.append(list(map(int, input())))
for i in range(n):
    for j in range(n):
        if dfs(i,j) == True:
            result.append(cnt)
            cnt = 0
result.sort()
print(len(result))
for i in result:
    print(i)

# bfs 풀이
# from collections import deque
# def bfs(x,y):
#     queue = deque()
#     graph[x][y] = 0
#     cnt = 1
#     queue.append((x,y))
#     while queue:
#         x, y = queue.popleft()
#         for i in range(4):
#             nx = x + dx[i]
#             ny = y + dy[i]
#             if 0<=nx<n and 0<=ny<n and graph[nx][ny] == 1:
#                 queue.append((nx,ny))
#                 graph[nx][ny] = 0
#                 cnt += 1
#     return cnt

# graph = []
# dx = [-1,1,0,0]
# dy = [0,0,-1,1]
# result = []
# n = int(input())
# for _ in range(n):
#     graph.append(list(map(int, input())))
# for i in range(n):
#     for j in range(n):
#         if graph[i][j] == 1:
#             result.append(bfs(i, j))
# result.sort()
# print(len(result))
# for i in result:
#     print(i)