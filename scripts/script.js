// Prefilled data
// 1
createNode(200, 200);
createNode(200, 400);
createNode(250, 600);
createNode(500, 300);

//5
createNode(600, 500);
createNode(700, 200);

selectedNodes.push(nodesEleList[0]);
selectedNodes.push(nodesEleList[3]);
joinNode();
selectedNodes.pop();
selectedNodes.push(nodesEleList[5]);
joinNode();
selectedNodes.pop();
selectedNodes.pop();
selectedNodes.push(nodesEleList[3]);
selectedNodes.push(nodesEleList[1]);
joinNode();
selectedNodes.pop();
selectedNodes.push(nodesEleList[2]);
joinNode();
selectedNodes.pop();
selectedNodes.pop();
selectedNodes.push(nodesEleList[2]);
selectedNodes.push(nodesEleList[4]);
joinNode();
selectedNodes.pop();
selectedNodes.pop();
selectedNodes.push(nodesEleList[4]);
selectedNodes.push(nodesEleList[5]);
joinNode();
selectedNodes.pop();
selectedNodes.pop();
drawLines();

let num = 5;

function fib(indx) {
    if (indx <= 1) {
        return indx;
    }
    return fib(indx - 1) + fib(indx - 2);
}

console.log(fib(5));

function gridPath(x, y) {
    return gridPath(x - 1, y + 1);
}
