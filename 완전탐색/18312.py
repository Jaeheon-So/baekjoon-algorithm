#시각
N, K = map(int, input().split())
count = 0
for i in range(N+1):
    i = "%02d" % i
    A = list(map(int, str(i)))
    for j in  range(60):
        j = "%02d" % j
        B = list(map(int, str(j)))
        for k in range(60):
            k = "%02d" % k
            C = list(map(int, str(k)))
            if K in A or K in B or K in C:
                count += 1
            
print(count)
