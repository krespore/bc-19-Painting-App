// Add new palettes
var colors = ['black', 'grey', 'white', 'green', 'red', 'blue', 'orange', 'yellow', 'violet'];


// Select color by class
//var swatches = document.getElementsByClassName('swatch');
//for (var i = 0, n = swatches.length; i<n; i++) {
//	swatches[i].addEventListener('click', setSwatch);
//};

for (var i = 0, n = colors.length; i<n; i++) {
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

//set color according to background color css
function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	//change class
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className = 'swatch';
	}
} 

function setSwatch(e){
	//identify class
	var swatch = e.target;
	//use color
	setColor(swatch.style.backgroundColor);
	//activate class
	swatch.className += ' active'; 
}

// Assign the active class to the first element of the colors array
setSwatch({target: document.getElementsByClassName('swatch')[0]});