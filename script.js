const nodesEleList = document.querySelectorAll(".node");
const lineEleList = document.querySelectorAll(".node");
const reportEle = document.querySelectorAll(".report-temp");

let selectedNodes = [];

nodesEleList.forEach(node => {
	node.addEventListener("mousedown", dragElement);

	node.addEventListener("click", selectNode);
});

function dragElement(ev) {
	ev.preventDefault();
	//Use document to prevent ele doesn't move that fast accourding to Mouse -> mouse went out of div and broke the algo(?)
	let node = ev.target;
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
	}

	function stopDrag(ev) {
		document.onmousedown = null;
		document.onmousemove = null;
	}
}

function selectNode(ev) {
	console.log("YO!")
	let node = ev.target;
	console.log(node.classList);
	if (node.classList.contains("selected")) {
		console.log("selected")
		node.classList.remove("selected");
		selectedNodes.pop(node);
	} else {
		if(selectedNodes.length < 2) {
			console.log("over")

			node.classList.add("selected");
			selectedNodes.push(node);
			return;
		}
	}
	// node.classList.toggle("selected");
}

const displayer = document.getElementById("displayer");
displayer.addEventListener("mousemove", updateMouseLoc);

function updateMouseLoc(ev) {
	reportEle[4].innerHTML = ev.clientX;
	reportEle[5].innerHTML = ev.clientY;
}