class Graph:
    def __init__(self):
        self.graph = {}
        self.visited = set()

    def add_edge(self,u,v):

        if u not in self.graph:
            self.graph[u]= []

        self.graph[u].append(v)

    
    def dfs_traverse(self,start):
        self.visited.add(start)
        print(start)

        for neighbor in self.graph.get(start,[]):
            if neighbor not in self.visited:
                self.dfs_traverse(neighbor)


g = Graph()
g.add_edge("A", "B")
g.add_edge("A", "C")
g.add_edge("B", "D")
g.add_edge("C", "E")
g.add_edge("D", "F")

print("DFS Traversal:")
g.dfs_traverse("A")
