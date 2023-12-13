// convert to array so that they can be manipulate later
const nodesEleList = Array.from(document.querySelectorAll(".node"));
const lineEleList = Array.from(document.querySelectorAll(".node"));

const reportEle = document.querySelectorAll(".report-temp");

let nOrg = nodesEleList[0];

let selectedNodes = [];

nodesEleList.forEach(node => {
	node.addEventListener("mousedown", dragElement);

	node.addEventListener("click", selectNode);
});

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

		reportEle[13].innerHTML = ev.clientX;
		reportEle[14].innerHTML = ev.clientY;

		reportEle[7].innerHTML = "offsetX= " + offsetX;
		reportEle[8].innerHTML = "offsetY= " + offsetY;

		nodeSVG.style.top = (ev.clientY - offsetY) + "px";
		nodeSVG.style.left = (ev.clientX - offsetX) + "px";

		ev.target.parentElement.dataset.nodeHeld = "true";
		console.log(ev.target.parentElement.dataset)
	}

	function stopDrag(ev) {
		document.onmousedown = null;
		document.onmousemove = null;
	}
}

function selectNode(ev) {
	let node = ev.target;
	if (ev.target.tagName == "text") {
		console.log("TETET")
		node = ev.target.parentElement.querySelector("circle");
	}
	console.log(node.parentElement.dataset.nodeHeld)

	if (node.parentElement.dataset.nodeHeld == "false") {		
		if (node.classList.contains("selected")) {
			node.classList.remove("selected");
			selectedNodes.pop(node);
		} else {
			if(selectedNodes.length < 2) {	
				node.classList.add("selected");
				selectedNodes.push(node);
				return;
			}
		}
	}

	node.parentElement.dataset.nodeHeld = false;
}

const displayer = document.getElementById("displayer");
displayer.addEventListener("mousemove", updateMouseLoc);

function updateMouseLoc(ev) {
	reportEle[4].innerHTML = ev.clientX;
	reportEle[5].innerHTML = ev.clientY;
}

function createNode(posX = displayer.clientWidth/2 + 50, posY = displayer.clientHeight/2 + 50) {

	let node = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	node.setAttribute("class", "node")
	node.setAttribute("width", "100")
	node.setAttribute("height", "100")
	node.setAttribute("style", `top: ${posY}px; left: ${posX}px`)
	node.setAttribute("data-node-id", nodesEleList.length)
	node.setAttribute("data-node-held", "false")
	

	let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("r", "50")
	circle.setAttribute("cy", "50")
	circle.setAttribute("cx", "50")

	let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
	text.textContent = "V" + nodesEleList.length;
	text.setAttribute("x", "50");
	text.setAttribute("y", "50");
	text.setAttribute("font-size", "24");
	text.setAttribute("font-color", "#fff");
	text.setAttribute("text-anchor", "middle");
	text.setAttribute("alignment-baseline", "middle");

	node.appendChild(circle);
	node.appendChild(text);

	node.addEventListener("mousedown", dragElement);
	node.addEventListener("click", selectNode);

	console.log(node)

	displayer.appendChild(node)

	nodesEleList.push(node);
}

function createLine() {
	
}

{/* <svg class="node" width="100" height="100" style="top: 305px; left: 578px" data-node-id="Node Org" data-node-held="false">
<circle r="100" cy="50" cx="50" id="3"></circle>
</svg>

<svg class="node" width="100" height="100" style="top: 50px; left: 600px;" data-node-id="Node" data-node-held="false">
<circle r="50" cy="50" cx="50"></circle>
</svg> */}


createNode(500, 400);
createNode(200, 200);
createNode(500, 200);
createNode(300, 400);