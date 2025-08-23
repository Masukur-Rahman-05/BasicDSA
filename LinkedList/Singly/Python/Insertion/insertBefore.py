class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def prepend(self,data):

        node = Node(data)
        node.next = self.head
        self.head = node
        self.length += 1

        if self.tail is None:
            self.tail = node

        return True
    

    def insertBefore(self, target, data):

        current = self.head

        node = Node(data)

        if(self.head.data == target):
            node.next = self.head
            self.head = node
            self.length += 1

            return True
        
        while current != None and current.next.data != target:
            current = current.next

        if current.next == None:
            return False
        
        node.next = current.next
        current.next = node
        self.length += 1

        return True
    
    def print(self):

        current = self.head
        result = ""
        while current:

            result += f"{current.data}" + ("->" if current.next else "")
            current = current.next

        print(result)
    
if __name__ == "__main__":

    linked_list = LinkedList()

    linked_list.prepend(10)
    linked_list.prepend(20)
    linked_list.prepend(30)
    linked_list.prepend(40)

    linked_list.insertBefore(30,50)
    linked_list.insertBefore(20,70)

    linked_list.print()

            
            

