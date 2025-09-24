# Find the subset of an Array

def subset(arr):
    result = []

    def backtrack(current, index):
        result.append(current[:])

        for i in range(index, len(arr)):
            current.append(arr[i])
            backtrack(current,i+1)
            current.pop()

    backtrack([],0)
    return result

nums = [1,2,3]
print(subset(nums))