class Node():
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def insert(root, value):

    if root is None:
        return Node(value)
    
    if value < root.value:
        root.left = insert(root.left , value)
    elif value > root.value:
        root.right = insert(root.right, value)

    return root

def arrayInsert(arr):
    root = None

    for value in arr:
        root = insert(root,value)

    return root


def display(root, level=0, prefix="Root: "):
    if root:

        display(root.right, level+1,"R--- ")

        print(" " * (level * 4) + prefix + str(root.value))

        display(root.left, level+1, "L--- ")


arr = [10, 5, 20, 3, 7, 15, 30]

root = arrayInsert(arr)

display(root)