const pingCanvas = document.getElementById("ping");
const context = pingCanvas.getContext("2d");
var inc = 10;
var framesPerSecond = 20;

var board = {
	x: 0,
	y: 0,
	width: pingCanvas.width,
	height: pingCanvas.height,
	colour: "black"
};

var ball = {
	x: 10,
	y: board.height/2,
	speed: 5,
	dx: 5,
	dy: 5,
	radius: 10,
	colour: "red"
};

var user = {
	x: 0,
	y: board.height/2-100/2,
	height: 100,
	width: 10,
	colour: "white",
	score: 0
};

var comp = {
	x: board.width-10,
	y: board.height/2-100/2,
	height: 100,
	width: 10,
	colour: "white",
	score: 0
};

var net = {
	x: board.width/2 - 2/2,
	y: 0,
	height: 10,
	width: 2,
	colour: "white"
};

const size = 10;
var balls = [];

for(i=0; i<= size; i++){
	let vx = 5;
	let vy = 5;
	if(Math.random() > 0.5){
		vx = -5; 
		vy = -5;
	}
	let balli = {
		x: Math.floor(Math.random()*(board.width-2*10)+10),
		y: Math.floor(Math.random()*(board.height-2*10)+10),
		speed: 5,
		dx: vx,
		dy: vy,
		radius: 10,
		colour: "red"
	};
	balls.push(balli);
}


setInterval(game,1000/framesPerSecond);

function drawRect(x, y, width, height, colour){
	context.fillStyle = colour;
	context.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, colour){
	context.fillStyle = colour;
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI, false);
	context.closePath();
	context.fill();
}

function drawText(x, y, text, colour){
	context.fillStyle = colour;
	context.font = "40px fantasy";
	context.fillText(text, x, y);
}

function update(){
	/*
	ball.x += ball.dx;
	ball.y += ball.dy;

	if(ball.x >= board.width-ball.radius || ball.x <= ball.radius)
		ball.dx = 0-ball.dx;

	if(ball.y >= board.height-ball.radius || ball.y <= ball.radius)
		ball.dy = 0-ball.dy;*/

	balls.forEach(ball => {
		ball.x += ball.dx;
		ball.y += ball.dy;

		if(ball.x >= board.width-ball.radius || ball.x <= ball.radius)
			ball.dx = 0-ball.dx;

		if(ball.y >= board.height-ball.radius || ball.y <= ball.radius)
			ball.dy = 0-ball.dy;		
	});
}



function render(){
	drawRect(board.x, board.y, board.width, board.height, board.colour);
	//drawCircle(ball.x, ball.y, ball.radius, ball.colour);
	//drawRect(user.x, user.y, user.width, user.height, user.colour);
	//drawRect(comp.x, comp.y, comp.width, comp.height, comp.colour);
	//drawText(board.width/4, board.height/4, user.score, user.colour);
	//drawText(3*board.width/4, board.height/4, comp.score, comp.colour);
	/*for(i=0; i < board.height; i+=15){
		drawRect(net.x, i, net.width, net.height, net.colour);
	}*/
	balls.forEach(ball => drawCircle(ball.x, ball.y, ball.radius, ball.colour));
}

function game(){
	update();
	render();
}