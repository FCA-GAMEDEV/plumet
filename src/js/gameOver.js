
var GameOver = function()
{
	this.update = function()
	{
	}
	
	this.draw = function()
	{
		graphics.clear();
		
		graphics.drawRect(0,0,graphics.canvas.width,graphics.canvas.height,"red");
	
		graphics.drawText("GAME OVER", 100, 300, "100px Arial", "black");		
	}
}