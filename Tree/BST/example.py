class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Recursive insertion
def insert_recursive(root, value):
    if root is None:
        return BSTNode(value)
    if value < root.value:
        root.left = insert_recursive(root.left, value)
    elif value > root.value:
        root.right = insert_recursive(root.right, value)
    return root

# Iterative insertion (for-loop style)
def insert_iterative(root, value):
    if root is None:
        return BSTNode(value)
    current = root
    while True:
        if value < current.value:
            if current.left is None:
                current.left = BSTNode(value)
                break
            current = current.left
        elif value > current.value:
            if current.right is None:
                current.right = BSTNode(value)
                break
            current = current.right
        else:
            break
    return root

# Convert array to BST using recursive insertion
def array_to_bst_recursive(arr):
    root = None
    for value in arr:
        root = insert_recursive(root, value)
    return root

# Convert array to BST using iterative insertion
def array_to_bst_iterative(arr):
    root = None
    for value in arr:
        root = insert_iterative(root, value)
    return root

# In-order traversal to verify BST
def inorder_traversal(root,level=0, prefix="Root: "):
    if root:
        # Traverse right subtree first to print it on top
        inorder_traversal(root.right, level + 1, "R--- ")
        # Print current node with indentation
        print(" " * (level * 4) + prefix + str(root.value))
        # Traverse left subtree
        inorder_traversal(root.left, level + 1, "L--- ")

# Example usage
arr = [10, 5, 20, 3, 7, 15, 30]

print("BST (Recursive Insertion):")
bst_recursive = array_to_bst_recursive(arr)
inorder_traversal(bst_recursive)
print("\nBST (Iterative Insertion):")
bst_iterative = array_to_bst_iterative(arr)
inorder_traversal(bst_iterative)
