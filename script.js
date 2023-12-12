const nodesEleList = document.querySelectorAll(".node");
const lineEleList = document.querySelectorAll(".node");

const reportEle = document.querySelectorAll(".report-temp");

let count = 0;


const nOrg = document.getElementById("node-org")
// console.log(nOrg)


function dragElement(ev) {
	ev.preventDefault();

	let nodeSVG = ev.target.parentElement;
	let initMouseX = 0;
	let initMouseY = 0;


	if (nodeSVG.tagName == "svg") { // Make sure that we selected the node
		ev.onmousedown = initDrag(ev);
		reportEle[1].innerHTML = nodeSVG.dataset.nodeValue;	

		reportEle[10].innerHTML = nodeSVG.style.left;
		reportEle[11].innerHTML = nodeSVG.style.top;
	}

	function initDrag(ev) {
		ev.preventDefault();
		console.log("INIT DRAGGED")

		//Use document to prevent ele doesn't move that fast accourding to Mouse -> mouse went out of div and broke the algo(?)

		// get initial Mouse position to calculate offset
		initMouseX = ev.clientX; 
		initMouseY = ev.clientY;

		// can't use offset(only support HTML elements) because SVG doesn't support it'
		// get offset relative to node when mouse clicked on node
		offsetX = initMouseX - ev.target.getBoundingClientRect().left;
		offsetY = initMouseY - ev.target.getBoundingClientRect().top;

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


nodesEleList.forEach(node => {
	node.addEventListener("mousedown", dragElement);
});

const displayer = document.getElementById("displayer");
displayer.addEventListener("mousemove", updateMouseLoc);

function updateMouseLoc(ev) {
	// console.log(ev)
	reportEle[4].innerHTML = ev.clientX;
	reportEle[5].innerHTML = ev.clientY;
}

// document.addEventListener('mousemove', (ev) => {
// 	reportEle[0].innerHTML = ev.clientX;
// 	reportEle[1].innerHTML = ev.clientY;
// })


// function logMovement(event) {
// 	log.insertAdjacentHTML(
// 		"afterbegin",
// 		`movement: ${event.movementX}, ${event.movementY}<br>`,
// 	);
// 	while (log.childNodes.length > 128) log.lastChild.remove();
// }
// document.addEventListener("mousemove", logMovement);