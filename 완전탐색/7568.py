#덩치
N = int(input())
size = []
for i in range(N):
    w, h = map(int, input().split())
    size.append([w, h])
for i,j in size:
    rank = 0
    for p,q in size:
        if i<p and j<q:
            rank += 1
    print(rank+1, end=' ')