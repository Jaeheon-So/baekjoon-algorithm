#영화감독 숌
N = int(input())
cnt = 0
i = 1
while True:
    cnt6 = 0
    num = i
    while num != 0:
        temp = num % 10
        if temp == 6:
            cnt6 += 1
        else:
            cnt6 = 0
        num = num // 10
        if cnt6 == 3:
            cnt += 1
    if cnt == N:
        break
    i += 1
print(i)
"""이걸 왜 생각 못했지
n = int(input())
cnt = 0
six_n = 666
while True:
    if '666' in str(six_n):
        cnt += 1
    if cnt == n:
        print(six_n)
        break
    six_n += 1
"""