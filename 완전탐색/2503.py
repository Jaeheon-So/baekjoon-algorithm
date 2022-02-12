#숫자 야구
from itertools import permutations

num = list(permutations([1,2,3,4,5,6,7,8,9], 3))
n = int(input())
for _ in range(n):
    num_copy = num.copy()
    ans, strike, ball = map(int, input().split())
    ans = list(str(ans))
    for i in range(3):
        ans[i] = int(ans[i])
    for i in num_copy:
        s_cnt = 0
        b_cnt = 0
        for j in ans:
            if j in i:
                if ans.index(j) == i.index(j):
                    s_cnt += 1
                else:
                    b_cnt += 1
        if s_cnt != strike or b_cnt != ball:
            num.remove(i)  
print(len(num))
    


