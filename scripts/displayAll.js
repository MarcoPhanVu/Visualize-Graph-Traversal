// convert to array so that they can be manipulate later
const nodesEleList = Array.from(document.querySelectorAll(".node")); // NODES will be SVG
let linesEleListArray = Array.from(document.querySelectorAll(".line"));

const lineContainer = document.querySelector(".line-container")

const reportEle = document.querySelectorAll(".report-temp");
const selectedNodeRecord = document.querySelectorAll(".selectedNode");

const joinWarning = document.getElementById("joinNeed2N");
const unjoinWarning = document.getElementById("unjoinNeed2N");
const maxNodesWarning = document.getElementById("max2Nodes");
const connectionExistedWarning = document.getElementById("connectionExisted");

let selectedNodes = [];

let connections = [];

function dragElement(ev) {
	ev.preventDefault();
	//Use document to prevent ele doesn't move that fast accourding to Mouse -> mouse went out of div and broke the algo(?)
	let node = ev.target;
	if (ev.target.tagName == "text") {
		node = ev.target.parentElement;
	}

	let nodeSVG = ev.target.parentElement;

	if (nodeSVG.tagName == "svg") { // Make sure that we selected the node
		ev.onmousedown = initDrag(ev);
		reportEle[1].innerHTML = nodeSVG.dataset.nodeId;

		reportEle[10].innerHTML = nodeSVG.style.left;
		reportEle[11].innerHTML = nodeSVG.style.top;
	}

	function initDrag(ev) {
		ev.preventDefault();
		// can't use offset(only support HTML elements) because SVG doesn't support it'
		// get mouse offset relative to node when mouse clicked on node
		offsetX = ev.clientX - node.getBoundingClientRect().left;
		offsetY = ev.clientY - node.getBoundingClientRect().top;

		document.onmouseup = stopDrag;
		document.onmousemove = moveEle;
	}

	function moveEle(ev) {
		ev.preventDefault();

		nodeSVG.style.top = (ev.clientY - offsetY) + "px";
		nodeSVG.style.left = (ev.clientX - offsetX) + "px";

		ev.target.parentElement.dataset.nodeHeld = "true";
		drawLines();

	}

	function stopDrag(ev) {
		document.onmousedown = null;
		document.onmousemove = null;
	}
}

function selectNode(ev) {
	// node only = circle here
	let node = ev.target;
	if (ev.target.tagName == "text") {
		node = ev.target.parentElement.querySelector("circle");
	}

	if (node.parentElement.dataset.nodeHeld == "false") {		
		if (node.classList.contains("selected")) {
			node.classList.remove("selected");
			// selectedNodes.pop(node);

			updateSelectedNodes(node.parentElement, "remove");

		} else {
			if(selectedNodes.length < 2) {	
				node.classList.add("selected");
				// selectedNodes.push(node);
				// console.log("NODE: ", node.parentElement.dataset)

				updateSelectedNodes(node.parentElement, "add");
				return;
			}
		}
	}

	node.parentElement.dataset.nodeHeld = false;
}

function updateSelectedNodes(node, action="add") {
	if (node.tagName == "circle") {
		console.log("NO UPDATE, Node is: ", node);
		return;
	}

	if (action == "add") {
		if (selectedNodes.length >= 2) {
			console.log("NO MORE, tooo much nodes selected");
			return;
		}

		selectedNodes.push(node);
	}

	if (action == "remove") {
		if (selectedNodes.length <= 0) {
			console.log("There's no nodes to remove");
			return;
		}

		selectedNodes.splice(selectedNodes.indexOf(node), 1); // 1 = remove 1 only
	}
}

const displayer = document.getElementById("displayer");

displayer.addEventListener("mousemove", updateMouseLoc);
function updateMouseLoc(ev) {
	reportEle[4].innerHTML = ev.clientX;
	reportEle[5].innerHTML = ev.clientY;
}

function createNode(posX = displayer.clientWidth/2 + 50, posY = displayer.clientHeight/2 + 50) {
    let node = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");

    if ("draw" == "draw") {
        node.setAttribute("class", "node")
        node.setAttribute("width", "100")
        node.setAttribute("height", "100")
        node.setAttribute("style", `top: ${posY}px; left: ${posX}px`)
        node.setAttribute("data-node-id", nodesEleList.length)
        node.setAttribute("data-node-held", "false")
        
    
        circle.setAttribute("r", "50")
        circle.setAttribute("cy", "50")
        circle.setAttribute("cx", "50")
    
        text.textContent = "V" + nodesEleList.length;
        text.setAttribute("x", "50");
        text.setAttribute("y", "50");
        text.setAttribute("font-size", "24");
        text.setAttribute("font-color", "#fff");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("alignment-baseline", "middle");

    }

	node.appendChild(circle);
	node.appendChild(text);

	node.addEventListener("mousedown", dragElement);
	node.addEventListener("click", selectNode);

	displayer.appendChild(node)
	nodesEleList.push(node);
}

function joinNode() {
	if (selectedNodes.length < 2) { // needs 2 nodes to be selected
		joinWarning.classList.add("activate");
		setTimeout(() => {
			joinWarning.classList.remove("activate");
		}, 3000);

		return;
	}

    startNode = selectedNodes[0];
    endNode = selectedNodes[1];
    let startX = startNode.getBoundingClientRect().x + 50;
    let startY = startNode.getBoundingClientRect().y + 50;
    let endX = endNode.getBoundingClientRect().x + 50;
    let endY = endNode.getBoundingClientRect().y + 50;

    let lineLen = Math.floor(
        Math.sqrt((startX - endX)**2 + (startY - endY)**2) / 20
    )

	let newConnection = {
		startNode: selectedNodes[0],
		endNode: selectedNodes[1],
		weight: lineLen
	}

	if (connectionExisted(newConnection)) {
		return;
	}

	connections.push(newConnection);

	drawLines();
}

function drawLines() {
	linesEleListArray = [];
	removeAllChilds(lineContainer);
	
	for (let i = 0; i < connections.length; i++) {
		let startNode = connections[i].startNode;
		let endNode = connections[i].endNode;
		let lineLen = connections[i].weight;
		let startX = startNode.getBoundingClientRect().x + 50;
		let startY = startNode.getBoundingClientRect().y + 50;
		let endX = endNode.getBoundingClientRect().x + 50;
		let endY = endNode.getBoundingClientRect().y + 50;
	
		let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
		line.setAttribute("class", "line")
		line.setAttribute("x1", startX)
		line.setAttribute("y1", startY)
		line.setAttribute("x2", endX)
		line.setAttribute("y2", endY)
		line.setAttribute("data-line-id", linesEleListArray.length)
		line.setAttribute("data-line-len", lineLen)
	
		let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
		text.textContent = "Line " + linesEleListArray.length + ": " + lineLen;
		text.setAttribute("x", (startX + endX)/2);
		text.setAttribute("y", (startY + endY)/2);
		text.setAttribute("font-color", "#fff");
		// text.setAttribute("text-anchor", "middle");
		// text.setAttribute("alignment-baseline", "middle");
	
		lineContainer.appendChild(line);
		lineContainer.appendChild(text);
		
		linesEleListArray.push(line)
	}

}

function unjoinNode() {
	if (selectedNodes.length < 2) { // needs 2 nodes to be selected
		unjoinWarning.classList.add("activate");
		setTimeout(() => {
			unjoinWarning.classList.remove("activate");
		}, 3000);
		return;
	}

	console.log("unjoin");
}

function updateNodeLinks(node1, node2) {
	// Needs more time
}

function runDijsktra(startingNode) {

}

function runPrim(startingNode) {

}


function clearGraph() {

} 

{/* <svg class="node" width="100" height="100" style="top: 305px; left: 578px" data-node-id="Node Org" data-node-held="false">
<circle r="100" cy="50" cx="50" id="3"></circle>
</svg>

<svg class="node" width="100" height="100" style="top: 50px; left: 600px;" data-node-id="Node" data-node-held="false">
<circle r="50" cy="50" cx="50"></circle>
</svg> */}

function connectionExisted(connection, action="none") {
    for (let i = 0; i < connections.length; i++) {
        if (connections[i].startNode == connection.startNode && connections[i].endNode == connection.endNode || connections[i].startNode == connection.endNode && connections[i].endNode == connection.startNode) {
			// console.log("Yes, connectionExisted at index: ", i);
			connectionExistedWarning.classList.add("activate");
			setTimeout(() => {
				connectionExistedWarning.classList.remove("activate");
			}, 3000);
		
			if (action == "getIndex") {
				return i;
			}
			return true;
		}
    }
    return false;
}
