### Lets assume- m = 3 and the graph is 

```
  0
 / \
1---2

```

### Code Flow

```

CALL: backtrack(0)
├─ node = 0, V = 3
├─ Try color 0 for vertex 0
├─ is_safe(0, 0, [-1,-1,-1]) → True (no neighbors colored yet)
├─ colors[0] = 0 → colors = [0,-1,-1]
├─ CALL: backtrack(1)
    │
    ├─ node = 1, V = 3
    ├─ Try color 0 for vertex 1
    ├─ is_safe(1, 0, [0,-1,-1]) → False (neighbor 0 has color 0)
    ├─ Try color 1 for vertex 1
    ├─ is_safe(1, 1, [0,-1,-1]) → True
    ├─ colors[1] = 1 → colors = [0,1,-1]
    ├─ CALL: backtrack(2)
        │
        ├─ node = 2, V = 3
        ├─ Try color 0 for vertex 2
        ├─ is_safe(2, 0, [0,1,-1]) → False (neighbor 0 has color 0)
        ├─ Try color 1 for vertex 2
        ├─ is_safe(2, 1, [0,1,-1]) → False (neighbor 1 has color 1)
        ├─ Try color 2 for vertex 2
        ├─ is_safe(2, 2, [0,1,-1]) → True
        ├─ colors[2] = 2 → colors = [0,1,2]
        ├─ CALL: backtrack(3)
            │
            └─ node = 3, V = 3 → BASE CASE!
            └─ return True ✅
        │
        └─ return True ✅
    │
    └─ return True ✅
│
└─ return True ✅

FINAL RESULT: True
FINAL COLORING: [0, 1, 2]

```