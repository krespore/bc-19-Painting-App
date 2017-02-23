// Variables to get canvas in the DOM
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 10;
var dragging = false;

canvas.width = window.innerWidth * 0.85;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

var putPoint = function(e){
	if (dragging) {
		context.lineTo(e.offsetX, e.offsetY); //draw line
		context.stroke(); 

		context.beginPath();
		context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI+2);
		context.fill();

		context.beginPath(); //draw line
		context.moveTo(e.offsetX, e.offsetY); //draw line
	}
}

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);