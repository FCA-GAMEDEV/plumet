
var GameObject = function(x,y,w,h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.getInfo = function(object)
	{
		console.log(object + 
					" x: " + this.x + 
					" y: " + this.y +
					" w: " + this.w +
					" h: " + this.h);
	}
}