#DFS와 BFS
from collections import deque
def dfs(graph, start, visited):
    visited[start] = True
    print(start, end=" ")
    for i in graph[start]:
        if not visited[i]:
            dfs(graph, i, visited)

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    while queue:
        v = queue.popleft()
        print(v, end=" ")
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

if __name__ == "__main__":
    n, m, v = map(int, input().split())
    graph = [[] for _ in range(n+1)]
    visited = [False]*(n+1)
    for _ in range(m):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)
    for i in range(1, n+1):
        graph[i].sort()
    dfs(graph, v, visited)
    visited = [False]*(n+1)
    print()
    bfs(graph, v, visited)