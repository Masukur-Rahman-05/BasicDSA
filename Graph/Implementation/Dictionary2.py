class Graph:
    def __init__(self,directed):
        self.directed = directed
        self.graph = {}

    def add_edge(self,u,v):
         
        if u not in self.graph:
            self.graph[u] = []
        if v not in self.graph:
            self.graph[v] = []

        self.graph[u].append(v)

        if not self.directed:
            self.graph[v].append(u)

    def dfs(self,start):
        visited = set()
        
        def traverse(node):
            visited.add(node)
            print(node)

            for neighbor in self.graph.get(node,[]):
                if neighbor not in visited:
                    traverse(neighbor)

        traverse(start)

    
    def dfs_iterative(self, start):
        stack = [start]
        visited = set()

        while stack:
            node = stack.pop()
            if node not in visited:
                visited.add(node)
                print(node)

                for neighbor in self.graph.get(node,[]):
                    if neighbor not in visited:
                        stack.append(neighbor)



graph = Graph(True)

graph.add_edge("A","B")
graph.add_edge("A","C")
graph.add_edge("B","D")
graph.add_edge("C","E")
graph.add_edge("D","F")

graph.dfs_iterative("A")