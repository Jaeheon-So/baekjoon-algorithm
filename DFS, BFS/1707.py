#이분 그래프
import sys
from collections import deque
input = sys.stdin.readline

def bfs(start):
    queue = deque()
    queue.append(start)
    color[start] = 1
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if color[i] == 0:
                queue.append(i)
                color[i] = -color[v]
            else:
                if color[i] == color[v]:
                    return "NO"
    return "YES"

k = int(input())
for _ in range(k):
    v, e = map(int, input().split())
    graph = [[] for _ in range(v+1)]
    color = [0 for i in range(v + 1)]
    for _ in range(e):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)
    for i in range(1, v+1):
        if color[i] == 0:
            if bfs(i) == "NO":
                print("NO")
                break
    else:
        print("YES")
   