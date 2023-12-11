import heapq

def prims_mst(n, adj):
    start = 1
    weight = [float('inf')] * (n + 1)
    parent = [-1] * (n + 1)
    in_mst = [False] * (n + 1)
    mst_edges = []

    q = [(0, start)]
    weight[start] = 0

    while q:
        u_w, u = heapq.heappop(q)
        if in_mst[u]:
            continue
        in_mst[u] = True

        for v, w in adj[u]:
            if not in_mst[v] and w < weight[v]:
                weight[v] = w
                heapq.heappush(q, (w, v))
                parent[v] = u

    mst_weight = sum(weight[1:])
    for i in range(1, n + 1):
        if parent[i] != -1:
            mst_edges.append((i, parent[i]))

    return mst_weight, mst_edges

def main():
    # Đọc input từ file
    with open("ifstr.txt", "r") as f:
        n, m = map(int, f.readline().split())
        adj = [[] for _ in range(n + 1)]
        for _ in range(m):
            x, y, w = map(int, f.readline().split())
            adj[x].append((y, w))
            adj[y].append((x, w))

    # Tìm MST
    mst_weight, mst_edges = prims_mst(n, adj)

    # Ghi output vào file
    with open("output.txt", "w") as f:
        f.write(str(mst_weight) + "\n")
        for edge in mst_edges:
            f.write(f"{edge[0]} {edge[1]}\n")

if __name__ == "__main__":
    main()
