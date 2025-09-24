CALL-1: subsequences([1,2,3], index=0, current=[], result=[])
│ arr[0] = 1, index < len(arr), so continue
│ 
│ ── CHOICE 1: Include arr[0] = 1
│    current.append(1) → current = [1]
│    
│    CALL-2: subsequences([1,2,3], index=1, current=[1], result=[])
│    │ arr[1] = 2, index < len(arr), so continue
│    │
│    │ ── CHOICE 1: Include arr[1] = 2  
│    │    current.append(2) → current = [1,2]
│    │    
│    │    CALL-3: subsequences([1,2,3], index=2, current=[1,2], result=[])
│    │    │ arr[2] = 3, index < len(arr), so continue
│    │    │
│    │    │ ── CHOICE 1: Include arr[2] = 3
│    │    │    current.append(3) → current = [1,2,3]
│    │    │    
│    │    │    CALL-4: subsequences([1,2,3], index=3, current=[1,2,3], result=[])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([1,2,3]) → result = [[1,2,3]]
│    │    │    │ RETURN result = [[1,2,3]]
│    │    │    └── CALL-4 ENDS
│    │    │    
│    │    │ ── CHOICE 2: Exclude arr[2] = 3 (Backtrack)
│    │    │    current.pop() → current = [1,2]
│    │    │    
│    │    │    CALL-5: subsequences([1,2,3], index=3, current=[1,2], result=[[1,2,3]])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([1,2]) → result = [[1,2,3], [1,2]]
│    │    │    │ RETURN result = [[1,2,3], [1,2]]
│    │    │    └── CALL-5 ENDS
│    │    │
│    │    │ RETURN result = [[1,2,3], [1,2]]
│    │    └── CALL-3 ENDS
│    │    
│    │ ── CHOICE 2: Exclude arr[1] = 2 (Backtrack)
│    │    current.pop() → current = [1]
│    │    
│    │    CALL-6: subsequences([1,2,3], index=2, current=[1], result=[[1,2,3], [1,2]])
│    │    │ arr[2] = 3, index < len(arr), so continue
│    │    │
│    │    │ ── CHOICE 1: Include arr[2] = 3
│    │    │    current.append(3) → current = [1,3]
│    │    │    
│    │    │    CALL-7: subsequences([1,2,3], index=3, current=[1,3], result=[[1,2,3], [1,2]])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([1,3]) → result = [[1,2,3], [1,2], [1,3]]
│    │    │    │ RETURN result = [[1,2,3], [1,2], [1,3]]
│    │    │    └── CALL-7 ENDS
│    │    │    
│    │    │ ── CHOICE 2: Exclude arr[2] = 3 (Backtrack)
│    │    │    current.pop() → current = [1]
│    │    │    
│    │    │    CALL-8: subsequences([1,2,3], index=3, current=[1], result=[[1,2,3], [1,2], [1,3]])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([1]) → result = [[1,2,3], [1,2], [1,3], [1]]
│    │    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1]]
│    │    │    └── CALL-8 ENDS
│    │    │
│    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1]]
│    │    └── CALL-6 ENDS
│    │
│    │ RETURN result = [[1,2,3], [1,2], [1,3], [1]]
│    └── CALL-2 ENDS
│    
│ ── CHOICE 2: Exclude arr[0] = 1 (Backtrack)
│    current.pop() → current = []
│    
│    CALL-9: subsequences([1,2,3], index=1, current=[], result=[[1,2,3], [1,2], [1,3], [1]])
│    │ arr[1] = 2, index < len(arr), so continue
│    │
│    │ ── CHOICE 1: Include arr[1] = 2
│    │    current.append(2) → current = [2]
│    │    
│    │    CALL-10: subsequences([1,2,3], index=2, current=[2], result=[[1,2,3], [1,2], [1,3], [1]])
│    │    │ arr[2] = 3, index < len(arr), so continue
│    │    │
│    │    │ ── CHOICE 1: Include arr[2] = 3
│    │    │    current.append(3) → current = [2,3]
│    │    │    
│    │    │    CALL-11: subsequences([1,2,3], index=3, current=[2,3], result=[[1,2,3], [1,2], [1,3], [1]])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([2,3]) → result = [[1,2,3], [1,2], [1,3], [1], [2,3]]
│    │    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3]]
│    │    │    └── CALL-11 ENDS
│    │    │    
│    │    │ ── CHOICE 2: Exclude arr[2] = 3 (Backtrack)
│    │    │    current.pop() → current = [2]
│    │    │    
│    │    │    CALL-12: subsequences([1,2,3], index=3, current=[2], result=[[1,2,3], [1,2], [1,3], [1], [2,3]])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([2]) → result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2]]
│    │    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2]]
│    │    │    └── CALL-12 ENDS
│    │    │
│    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2]]
│    │    └── CALL-10 ENDS
│    │    
│    │ ── CHOICE 2: Exclude arr[1] = 2 (Backtrack)
│    │    current.pop() → current = []
│    │    
│    │    CALL-13: subsequences([1,2,3], index=2, current=[], result=[[1,2,3], [1,2], [1,3], [1], [2,3], [2]])
│    │    │ arr[2] = 3, index < len(arr), so continue
│    │    │
│    │    │ ── CHOICE 1: Include arr[2] = 3
│    │    │    current.append(3) → current = [3]
│    │    │    
│    │    │    CALL-14: subsequences([1,2,3], index=3, current=[3], result=[[1,2,3], [1,2], [1,3], [1], [2,3], [2]])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([3]) → result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3]]
│    │    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3]]
│    │    │    └── CALL-14 ENDS
│    │    │    
│    │    │ ── CHOICE 2: Exclude arr[2] = 3 (Backtrack)
│    │    │    current.pop() → current = []
│    │    │    
│    │    │    CALL-15: subsequences([1,2,3], index=3, current=[], result=[[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3]])
│    │    │    │ index = 3 = len(arr), BASE CASE!
│    │    │    │ result.append([]) → result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
│    │    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
│    │    │    └── CALL-15 ENDS
│    │    │
│    │    │ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
│    │    └── CALL-13 ENDS
│    │
│    │ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
│    └── CALL-9 ENDS
│
│ RETURN result = [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
└── CALL-1 ENDS