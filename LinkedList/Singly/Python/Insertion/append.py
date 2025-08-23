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
    
    def append(self, data):

        if self.head is None:
            self.prepend(data)
            return True
        
        node = Node(data)

        self.tail.next = node
        self.tail = node
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

    linked_list.append(10)
    linked_list.append(20)
    linked_list.append(30)
    linked_list.append(40)
    linked_list.append(50)

    linked_list.print()