// let lala = {startNode: '0', endNode: '3', weight: 15};

// console.log("THIS IS LALA: ", connectionExisted(lala));

delay = 300;

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
}

function runDijkstra(startingPoint=nodesEleList[0]) {

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


}

function runPrim(startingPoint=nodesEleList[0]) {
	clearAllEle(actions);
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
                setActions(getNode(i), "highlightNode")

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
                        setActions(linesEleListArray[connectionExisted(minEdge, "getIndex")], "highlightLine");   
                    }
                }
            }
        }

        visitedEdges.push(minEdge);

        setActions(linesEleListArray[connectionExisted(minEdge, "getIndex")], "chosen");

        // highlight(linesEleListArray[connectionExisted(minEdge, "getIndex")], "chosen");

        visitedNodes[minEdge.endNode] = 1;
        
        setActions(linesEleListArray[connectionExisted(minEdge, "getIndex")], "nodeVisited");
        
        notYetChecked++;
    }

    for (let i = 0; i < visitedEdges.length; i++) {
        console.log(visitedEdges[i].startNode, " connected to ", visitedEdges[i].endNode);
    }

    performAction(0);
}


function performAction(index) {
    if (graphEmptied == true) {
        logAction(`Graph Cleared`);
        logAction(`Algorithm stopped.`);
        return;
    }
    if (index < actions.length) {
        console.log("currently executing: ", index);
        if (actions[index].action == "highlightNode") {
            getRelatedConnections(actions[index].target);
            logAction(`Selected Node [${actions[index].target.dataset.nodeId}] and`);
            logAction(`traverse all connections.`);
        }

        if (actions[index].action == "highlightLine") {
            console.log("active")
            highlight(actions[index].target, "active");
            // logAction(`Traversed through Line [${actions[index].target.dataset.lineId}]`);
        }

        if (actions[index].action == "chosen") {
            console.log("chosen", actions[index].target)
            highlight(actions[index].target, "chosen");
            logAction(`Chosen Line [${actions[index].target.dataset.lineId}]`);
        }

        index++;

        setTimeout(() => {
            performAction(index);
        }, delay);
    } else {
        logAction(`Algorithm Finished Successfully!`);
    }
}

convertToGraph();

console.log("this is actions: ", actions);

// clearGraph();



