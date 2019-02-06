//sketch 

// move all stuff from draw code into a function called myTarget

var rings = 10;

function setup() {
createCanvas(1020, 800);
background(64);
noStroke();
colorMode(HSB);

}

function draw() {
	myTarget(400, 300, width/10, 94, 249, 10);
	myTarget(100, 500, 500, 247, 87, 25);
	//myTarget(150, 50,70,7.5);
	noLoop();
  
}

function myTarget(tarX,tarY, tarSize, tarHue, tarSat, tarAlpha) {
	let size = (tarSize);
	let steps = (size/rings);
	let greyValue = (255/rings);

		for (i = 0; i < rings; i++) {
		fill(tarHue, tarSat, i*greyValue, tarAlpha);
		ellipse(tarX, tarY, size-i*steps, size-i*steps);
		}
}