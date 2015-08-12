function Target(radians, radius, pathRadius) {
	var _radians = radians;
	var _squash = 1;
	var _jump_speed = 15;
	var _radius = radius;
	var _path_radius = pathRadius;
	var _switching = false;
	var _color = "#ff0000";

	var _x=(_path_radius-_radius)*Math.cos(_radians);
	var _y=(_path_radius-_radius)*Math.sin(_radians);

	$(document).click(function() {
		//_switching = true;
	})

	this.update = function() {
		if (_switching) {
			_x -= rotationSpeed*Math.cos(_radians-pi/2)+_jump_speed*Math.cos(_radians)/2;
			_y -= rotationSpeed*Math.sin(_radians-pi/2)+_jump_speed*Math.sin(_radians)/2;
			if (Math.sqrt(_x*_x + _y*_y) > _path_radius-_radius) {
				_radians = Math.atan2(_y, _x);
				_switching = false;
			}
		} else {
			_radians += rotationSpeed/_path_radius;
			_x = (_path_radius-_radius)*Math.cos(_radians);
			_y = (_path_radius-_radius)*Math.sin(_radians);
		}
	}

	this.render = function() {
		ctx.save();
		ctx.translate(WIDTH/2, HEIGHT/2);
		ctx.fillStyle = _color;
		ctx.beginPath();
		ctx.arc(_x, _y, _radius, 0, 2*pi);
		ctx.fill();
		ctx.restore();
	}
}  