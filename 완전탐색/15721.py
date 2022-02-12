#번데기
a = int(input())
t = int(input())
sign = int(input())
progress = []
cnt = 0
turn = 0
participant = 0
while cnt != t:
    turn += 1
    for _ in range(2):
        progress.append(0)
        progress.append(1)
    for _ in range(turn+1):
        progress.append(0)
    for _ in range(turn+1):
        progress.append(1)

    if len(progress) // 2 >= t:
        for i in progress:
            if i == sign:
                cnt += 1
            if cnt == t:
                break
            participant += 1
print(participant % a)
