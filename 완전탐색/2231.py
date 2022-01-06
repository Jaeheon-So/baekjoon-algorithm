#분해합
N = int(input())
ans = []
for i in reversed(range(int(N))):
    result2 = i
    result = i
    temp = i
    while temp != 0:
        result += temp % 10
        temp = temp // 10
    if result == N:
        ans.append(result2)
if ans:
    print(ans.pop())
else:
    print(0)
""" 훨씬 좋은 코드
N = int(input())
result = 0
for i in range(1, N+1):
    A = list(map(int, str(i)))
    result = i + sum(A)
    if result == N:
        print(i)
        break
    if i == N:
        print(0)
"""