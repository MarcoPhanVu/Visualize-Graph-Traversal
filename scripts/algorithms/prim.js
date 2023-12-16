// console.log("fuck")

let lala = {startNode: nodesEleList[5],
    endNode: nodesEleList[4],
    weight: 100}

// if (lala == connections[4]) {
//     console.log("hey")
// }

// connectionExisted(lala)
let graph = []

function convertToGraph() {
    graph = []
    let vertexCount = nodesEleList.length;
    for (let i = 0; i < vertexCount; i++) {
        let temp = []
        graph.push(temp)
        for (let j = 0; j < vertexCount; j++) {
            graph[i][j] = 0;
        }
    }
    
    for (let i = 0; i < connections.length; i++) {
        graph[
                Number(connections[i].startNode.dataset.nodeId)
            ][
                Number(connections[i].endNode.dataset.nodeId)
            ] = connections[i].weight
        graph[
                Number(connections[i].endNode.dataset.nodeId)
            ][
                Number(connections[i].startNode.dataset.nodeId)
            ] = connections[i].weight
    }

    console.log(graph)
}

function runDijsktra(startingPoint) {

}

function runPrim(startingPoint) {
    startingPoint = startingPoint.dataset.nodeId;
    
    let vertexCount = nodesEleList.length;
    let visitedNodes = [];
    let visitedEdges = [];
    let notYetChecked = 0;

    for (let i = 0; i < vertexCount; i++) {
        visitedNodes[i] = 0;
    }
    visitedNodes[startingPoint] = 1;

    console.log("VN: ", visitedNodes)

    while (notYetChecked < vertexCount - 1) {
        minWeight = 10000;
        xP = 0;
        yP = 0;

        for (let i = 0; i < vertexCount; i++) {
            if (visitedNodes[i] == 1) {
                for (let j = 0; j < vertexCount; j++) {
                    if (visitedNodes[j] == 0 && graph[i][j] != 0) { // j node haven't been visited and have connections to i node
                        if (graph[i][j] <= minWeight) {
                            minWeight = graph[i][j];
                            minEdge = {
                                startNode: nodesEleList[i].dataset.nodeId,
                                endNode: nodesEleList[j].dataset.nodeId,
                                weight: graph[i][j]
                            };
                        }
                    }
                }
            }
        }

        visitedEdges.push(minEdge);
        visitedNodes[minEdge.endNode] = 1;
        notYetChecked++;
    }

    console.log("VN: ", visitedEdges)

    for (let i = 0; i < visitedEdges.length; i++) {
        console.log(visitedEdges[i].startNode, " connected to ", visitedEdges[i].endNode);
    }
}

convertToGraph();
runPrim(nodesEleList[0]);