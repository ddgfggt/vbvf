img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	//img=loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotPoses);
}
function modelLoaded(){
	console.log("modelLoaded");
}
function gotPoses(results){
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
}
function draw() {
	game();
}