//your JS code here. If required.
const h1  = document.getElementsByTagName("h1")[0];
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
h1.innerText = `Width: ${innerWidth} and Height: ${innerHeight}`;
window.addEventListener('resize',()=>{
	let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
h1.innerText = `Width: ${innerWidth} and Height: ${innerHeight}`;
});