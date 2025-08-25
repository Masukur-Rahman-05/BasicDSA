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


def MergeList(l1,l2):

    dummy = Node(0)
    tail = dummy


    p1 = l1.head
    p2 = l2.head
    count = 0

    while p1 and p2:

        if p1.data < p2.data:
            tail.next = p1
            p1 = p1.next
            
        else:
            tail.next = p2
            p2 = p2.next
            
        tail = tail.next
        count += 1

        
    if p1:
            tail.next = p1
            while p1.next:
                p1 = p1.next
                count += 1
            
            tail = p1
            count += 1

    elif p2:
            tail.next = p2
            while p2.next:
                p2 = p2.next
                count += 1
            tail = p2
            count += 1

        
    merged = LinkedList()
    merged.head = dummy.next
    merged.tail = tail
    merged.length = count

    return merged


if __name__ == "__main__":

    l1 = LinkedList()

    l1.append(10)
    l1.append(30)
    l1.append(60)
    l1.append(80)
    l1.append(100)

    l2 = LinkedList()

    l2.append(20)
    l2.append(40)
    l2.append(50)
    l2.append(70)
    l2.append(90)
    l2.append(110)
    l2.append(120)

    merged = MergeList(l1,l2)

    merged.print()
    print("Head Node" + "-", merged.head.data)
    print("Tail Node" + "-", merged.tail.data)
    print("Tail Node" + "-", merged.length)

