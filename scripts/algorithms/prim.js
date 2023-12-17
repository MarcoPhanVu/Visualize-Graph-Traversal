let lala = {startNode: '0', endNode: '3', weight: 15};

console.log("THIS IS LALA: ", connectionExisted(lala));

let graph = []

let actions = [
    // {
    //     target: null,
    //     action: null
    // }
]

function setActions(target, action) {
    actions.push({
        target: target,
        action: action
    })
    // console.log(actions);
}

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

function runDijsktra(startingPoint=nodesEleList[0]) {

}

function runPrim(startingPoint=nodesEleList[0]) {
    convertToGraph();
    let startingNode = startingPoint;
    startingPoint = startingPoint.dataset.nodeId;
    
    let vertexCount = nodesEleList.length;
    let visitedNodes = [];
    let visitedEdges = [];
    let notYetChecked = 0;

    for (let i = 0; i < vertexCount; i++) {
        visitedNodes[i] = 0;
    }
    visitedNodes[startingPoint] = 1;

    while (notYetChecked < vertexCount - 1) {
        minWeight = 10000;

        for (let i = 0; i < vertexCount; i++) {
            if (visitedNodes[i] == 1) {                
                // setTimeout(() => { // Highlight current selected node
                //     highlight(getNode(i));
                //     setTimeout(() => {
                //         highlight(getNode(i), false);
                //     }, 500);
                // }, 500);

                setActions(getNode(i), "highlight")

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

            console.log("say hehehe");
        }

        visitedEdges.push(minEdge);

        // console.log("IND: ", connectionExisted(minEdge, "getIndex"))
        highlight(linesEleListArray[connectionExisted(minEdge, "getIndex")], "chosen");

        visitedNodes[minEdge.endNode] = 1;
        notYetChecked++;
    }

    for (let i = 0; i < visitedEdges.length; i++) {
        console.log(visitedEdges[i].startNode, " connected to ", visitedEdges[i].endNode);
    }
}

convertToGraph();
runPrim(nodesEleList[0]);


