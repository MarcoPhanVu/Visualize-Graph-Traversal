using System;
using System.Collections.Generic;

namespace LTDT
{
    class DFS
    {
        private List<List<int>> _adjacent; // danh sach canh ke
        private List<int> _reportPath = new List<int>(); // danh sach dinh duong di

        public DFS(List<List<int>> adjacent)
        {
            this._adjacent = adjacent;
        }

        // find path using DFS
        public List<int> findPathByDfs(int tips, int start, int end)
        {
            if (this._adjacent[start] == null || this._adjacent[end] == null)
                return null;

            bool[] visited = new bool[tips]; // danh dau cac dinh da tham
            int[] previous = new int[tips + 1]; // luu dinh truoc

            // khoi tao mang visited va previous
            for (int index = 0; index < tips; ++index)
            {
                visited[index] = false;
                previous[index] = -1;
            }

            // start DFS from the given start node
            performDFS(start, end, visited, previous);

            // if the end node is not visited, return null
            if (!visited[end])
                return null;

            // truy vet duong di
            int current = end;
            this._reportPath.Add(end);
            while (previous[current] != -1)
            {
                this._reportPath.Add(previous[current]);
                current = previous[current];
            }
            this._reportPath.Reverse();
            return this._reportPath;
        }

        // DFS recursive function
        private void performDFS(int current, int end, bool[] visited, int[] previous)
        {
            visited[current] = true;

            List<int> row = new List<int>(this._adjacent[current]);
            if (row != null)
            {
                foreach (int col in row)
                {
                    if (!visited[col])
                    {
                        previous[col] = current;

                        // if the end node is visited, break the recursion
                        if (col == end)
                            return;

                        // continue DFS from the next node
                        performDFS(col, end, visited, previous);
                    }
                }
            }
        }
    }
}

