
var Rect = function(x,y,w,h,color)
{
	this.go = new GameObject(x,y,w,h);
	
	this.color = color;
	
	this.speedy = -2;
	
	this.getInfo = function()
	{
		this.go.getInfo("rect");
	}
	
	this.update = function()
	{		
		this.go.y += this.speedy;
	}
	
	this.draw = function()
	{
		graphics.ctx.save();		
		
		graphics.ctx.translate(this.go.x, this.go.y);
		graphics.drawRect(0,0,this.go.w,this.go.h,this.color);
		
		graphics.ctx.restore();
	}
}