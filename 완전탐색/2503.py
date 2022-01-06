#숫자 야구
from itertools import permutations  
nums = list(permutations([1,2,3,4,5,6,7,8,9], 3))
N = int(input())
for _ in range(N):
    nums_temp = nums.copy()
    ans, strike, ball = map(int, input().split())
    ans = list(str(ans))
    for i in range(3):
        ans[i] = int(ans[i])
    for i in nums_temp:
        s_cnt = 0
        b_cnt = 0
        for j in ans:
            if j in i:
                if ans.index(j) == i.index(j):
                    s_cnt += 1
                else:
                    b_cnt += 1
        if s_cnt != strike or b_cnt != ball:
            nums.remove(i)  
print(len(nums))
    


