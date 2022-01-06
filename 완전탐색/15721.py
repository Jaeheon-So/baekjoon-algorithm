#번데기
A = int(input())
T = int(input())
say = int(input())
cnt = 0
turn = 0
end = 0
bbundegi = []
while cnt != T:
    turn += 1
    for _ in range(2):
        bbundegi.append(0)
        bbundegi.append(1)
    for _ in range(turn + 1):
        bbundegi.append(0)
    for _ in range(turn + 1):
        bbundegi.append(1)
    if len(bbundegi) // 2 >= T:
        for i in bbundegi:
            end += 1
            if i == say:
                cnt += 1
            if cnt == T:
                break

print((end-1) % A)
