var WIDTH=700, HEIGHT=700;
var canvas, ctx;
var pi = Math.PI;
var player, target;
var rotationSpeed, rotation=0;

function main() {
	canvas = $("#gameCanvas")[0];
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	ctx = canvas.getContext("2d");

	init();
}

function init() {
	rotationSpeed = 5;
	player = new Player(pi, 20, 300);
	target = new Target(0, 20, 300);

	window.requestAnimationFrame(gameLoop);
}

function gameLoop() {
	update();
	render();
	window.requestAnimationFrame(gameLoop);
}

function update() {
	player.update();
	target.update();
}

function render() {
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.save();

	rotation -= rotationSpeed/300;
	//ctx.translate(WIDTH/2, HEIGHT/2);
	//ctx.rotate(rotation);
	//ctx.translate(-WIDTH/2, -HEIGHT/2);
	player.render();
	target.render();

	ctx.strokeStyle = "#ffffff";
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.arc(WIDTH/2, HEIGHT/2, 300+2, 0, 2*pi)
	ctx.stroke();

	ctx.restore();
}

main();