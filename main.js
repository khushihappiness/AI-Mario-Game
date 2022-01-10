function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');//It is a functiion used to put canvas/webcam inside a html div
	instializeInSetup(mario);
}

function draw() {
	game()
}






