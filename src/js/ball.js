
var Ball = function(x,y,w,h)
{
	this.go = new GameObject(x,y,w,h);
	
	this.speedx = 5;
	this.speedy = -5;
	
	this.speedRot = 5;
	this.angle = 0;
	
	this.getInfo = function()
	{
		this.go.getInfo("ball");
	}
	
	this.update = function()
	{
		this.go.x += this.speedx;
		this.go.y += this.speedy;		
		
		this.angle += this.speedRot;
	}
	
	this.draw = function()
	{
		graphics.ctx.save();
		
		graphics.ctx.translate(this.go.x,this.go.y);
		graphics.ctx.rotate(this.angle * Math.PI / 180);
		graphics.drawCircle(0,0,this.go.w,0,Math.PI,"lightgray");
		graphics.drawCircle(0,0,this.go.w,Math.PI,Math.PI*2,"brown");
	
		graphics.ctx.restore();
	}
}