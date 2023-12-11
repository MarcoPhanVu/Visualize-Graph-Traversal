const nodesEleList = document.querySelectorAll(".node");
const lineEleList = document.querySelectorAll(".node");

const reportEle = document.querySelectorAll(".report-temp");


const log = document.getElementById("log");

function dragEle(ele) {
	reportEle[0].innerHTML = clientX;
	reportEle[1].innerHTML = clientY;
}


nodesEleList.forEach(node => {
	node.addEventListener("mousedown", (ev) => {
		reportEle[0].innerHTML = ev.clientX;
		reportEle[1].innerHTML = ev.clientY;
	})
});

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