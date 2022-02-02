#신입사원
import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    grade = []
    n = int(input())
    cnt = n
    for _ in range(n):
        paper, interview = map(int, input().split())
        grade.append([paper, interview])
    grade = sorted(grade, key= lambda a: a[0])
    temp = grade[0][1]
    for i in range(1, n):
        if grade[i][1] > temp:
            cnt -= 1
        else:
            temp = grade[i][1]
    print(cnt)
     