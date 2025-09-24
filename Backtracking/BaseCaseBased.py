
def subset(arr):

    result = []

    def backtrack(current,index):

        if index == len(arr):
            result.append(current[:])
            return
        
        
        current.append(arr[index])
        backtrack(current,index+1)
        current.pop()
        backtrack(current,index+1)

    backtrack([],0)
    return result


nums = [1,2,3]
print(subset(nums))


