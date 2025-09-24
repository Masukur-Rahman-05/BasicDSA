def subsequences(arr, index=0, current=None, result=None):
    if current is None:
        current = []
    if result is None:
        result = []

    # Base case: reached end of array
    if index == len(arr):
        result.append(current[:])  # make a copy
        return result

    # Choice 1: include current element
    current.append(arr[index])
    subsequences(arr, index + 1, current, result)

    # Backtrack and Choice 2: exclude current element
    current.pop()
    subsequences(arr, index + 1, current, result)

    return result


# Example usage
arr = [1, 2, 3]
print(subsequences(arr))
