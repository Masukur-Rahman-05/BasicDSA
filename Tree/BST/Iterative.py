class Node():
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None


def insert(root,value):

    if root is None:
        return Node(value)
    
    current = root
    while True:
        if value < current.value:
            if current.left is None:
                current.left = Node(value)
                break
            current = current.left
        
        elif value > current.value:
            if current.right is None:
                current.right = Node(value)
                break
            current = current.right

        else:
            break

    return root


def arrayInsert(arr):
    root = None
    for value in arr:
        root = insert(root,value)

    return root


def display(root, level = 0, prefix = "Root: "):

    if root:
        display(root.right,level + 1, "R--- ")
        print(" " * (level * 4) + prefix + str(root.value))
        display(root.left,level+1, "L--- ")

    
array = [10,5,20,3,7,15,30]

root = arrayInsert(array)
display(root)