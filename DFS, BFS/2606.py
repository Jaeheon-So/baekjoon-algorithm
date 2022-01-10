#바이러스
def dfs(graph, start, visited):
    visited[start] = True
    #print(start, end=" ")
    for i in graph[start]:
        if not visited[i]:
            dfs(graph, i, visited)

computer = int(input())
link_num = int(input())
graph = [[] for _ in range(computer+1)]
visited = [False]*(computer+1)
for _ in range(link_num):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
for i in range(1, computer+1):
    graph[i].sort()
dfs(graph, 1, visited)
print(visited.count(True) - 1)
