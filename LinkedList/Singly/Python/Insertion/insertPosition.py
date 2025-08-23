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
    

    def insertPosition(self,position,data):

        if(position < 1 or position > self.length + 1):
            raise Exception("Position is Out of Range")
        
        if(position == 1):
            self.prepend(data)
            return True
        
        node = Node(data)
        current = self.head
        prev = None
        currentPosition = 1

        while current.next != None and currentPosition < position:
            prev = current
            current = current.next
            currentPosition += 1


        node.next = current
        prev.next = node
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
    linked_list.prepend(50)

    linked_list.insertPosition(3,60)

    

    linked_list.print()

            
            

