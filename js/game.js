var WIDTH=700, HEIGHT=700;
var canvas, ctx;

function main() {
	canvas = $("#gameCanvas")[0];
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	ctx = canvas.getContext("2d");

	init();
}

function init() {
	window.requestAnimationFrame(loop);
}

function loop() {
	update();
	render();
	window.requestAnimationFrame(loop);
}

function update() {}

function render() {
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

main();