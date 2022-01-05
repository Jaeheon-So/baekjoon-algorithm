#신입사원***
import sys
input = sys.stdin.readline

T = int(input())
for i in range(T):
    rank = []
    cnt = 1
    N = int(input())
    for i in range(N):
        doc, interV = map(int, input().split())
        rank.append([doc, interV])
    rank = sorted(rank, key=lambda a: a[0])
    temp = rank[0][1]
    for i in range(1,N):
        if rank[i][1] < temp:
            temp = rank[i][1]
            cnt += 1
    print(cnt)

     