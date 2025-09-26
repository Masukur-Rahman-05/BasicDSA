
# Problem: M-Coloring of a Graph

# You are given an undirected graph represented as a list of edges and an integer m. 
# Your task is to determine if it is possible to color the graph
# using at most m colors such that no two adjacent vertices share the same color.

# Example-1

# edges = [[0, 1], [0, 2], [0, 3], [1, 3], [2, 3]]
# m = 3

# sol = Solution()
# print(sol.graphColoring(edges, m))  # Output: True


# Example-2

# edges = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 4], [2, 3], [2, 4], [3, 4]]
# m = 3

# sol = Solution()
# print(sol.graphColoring(edges, m))  # Output: False



class Graph:

    def __init__(self):
        self.graph = {}

    def add_edges(self,u,v):

        if u not in self.graph:
            self.graph[u] = []
        if v not in self.graph:
            self.graph[v]=[]
        self.graph[u].append(v)
        self.graph[v].append(u)

    def isSafe(self,node,color,colors):

        for neighbor in self.graph[node]:
            if colors[neighbor] == color:
                return False
        return True
        
    def solve(self,m):

        nodes = list(self.graph.keys())
        v = len(nodes)
        colors = [-1] * v

        def backtrack(node):
            if node == v:
                return True
            
            for c in range(m):
                if self.isSafe(node,c,colors):
                    colors[node] = c
                    if backtrack(node+1):
                        return True
                    colors[node]= -1
            return False

        return backtrack(0)
    

graph = Graph()

edges = [[0,1],[1,2],[0,2]]
m = 2
for u,v in edges:
    graph.add_edges(u,v)

print(graph.solve(m))



