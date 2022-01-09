#체스판 다시 칠하기
board = []
result = []
N, M = map(int, input().split())
for _ in range(N):
    board.append(input())
for i in range(N - 7):
    for j in range(M - 7):
        temp2 = 'B'
        for _ in range(2):
            cnt = 0
            for p in range(i, i + 8):
                for q in range(j, j + 8):
                    temp = board[p][q]
                    if temp == temp2:
                        cnt += 1
                        if temp == 'B':
                            temp = 'W'
                        else:
                            temp = 'B'   
                    temp2 = temp
                if temp2 == 'B':
                    temp2 = 'W'
                else:
                    temp2 = 'B'
            result.append(cnt)
            temp2 = 'W'
print(min(result))
"""" 더 좋은 코드
n, m = map(int, input().split())
l = []
mini = []

for _ in range(n):
    l.append(input())

for a in range(n - 7):
    for i in range(m - 7):
        idx1 = 0
        idx2 = 0
        for b in range(a, a + 8):
            for j in range(i, i + 8):              # 8X8 범위를 B와 W로 번갈아가면서 검사
                if (j + b)%2 == 0:
                    if l[b][j] != 'W': idx1 += 1  
                    if l[b][j] != 'B': idx2 += 1
                else :
                    if l[b][j] != 'B': idx1 += 1
                    if l[b][j] != 'W': idx2 += 1
        mini.append(idx1)                          # W로 시작했을 때 칠해야 할 부분
        mini.append(idx2)                          # B로 시작했을 때 칠해야 할 부분

print(min(mini))     
"""